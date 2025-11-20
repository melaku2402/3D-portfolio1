

import { useEffect, useRef, useState } from "react";


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    const updateCursor = (e) => {
      // Use requestAnimationFrame for 60fps smoothness
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      requestRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        // Detect interactive elements professionally
        const target = e.target;
        const computedStyle = window.getComputedStyle(target);
        const isClickable = 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.onclick !== null ||
          computedStyle.cursor === 'pointer' ||
          target.role === 'button' ||
          computedStyle.pointerEvents !== 'none';
        
        setIsInteractive(isClickable);
      });
    };

    document.addEventListener('mousemove', updateCursor);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.style.cursor = 'auto';
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden md:block"
      style={{ cursor: 'none' }}
    >
      {/* Crosshair for precision */}
      <div
        className="absolute w-6 h-6 pointer-events-none transition-transform duration-75"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Horizontal line */}
        <div className={`absolute w-6 h-0.5 top-1/2 transform -translate-y-1/2 ${
          isInteractive ? 'bg-blue-500' : 'bg-white'
        }`} />
        {/* Vertical line */}
        <div className={`absolute h-6 w-0.5 left-1/2 transform -translate-x-1/2 ${
          isInteractive ? 'bg-blue-500' : 'bg-white'
        }`} />
        {/* Center dot */}
        <div className={`absolute w-1.5 h-1.5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          isInteractive ? 'bg-blue-500' : 'bg-red-500'
        }`} />
      </div>

      {/* Coordinates display - useful for debugging */}
      <div
        className="absolute text-xs text-gray-400 font-mono bg-black bg-opacity-50 px-2 py-1 rounded"
        style={{ 
          left: `${position.x + 20}px`, 
          top: `${position.y + 20}px`,
        }}
      >
        {position.x}, {position.y}
      </div>
    </div>
  );
};

export default CustomCursor;
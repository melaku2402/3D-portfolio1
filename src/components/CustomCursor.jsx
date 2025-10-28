import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden md:block"
      style={{ cursor: 'none' }}
    >
      <div
        className="absolute text-2xl text-white"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}
      >
       👍
        
      </div>
    </div>
  );
};

export default CustomCursor
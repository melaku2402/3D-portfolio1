import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { scrollToSection } from "../utils/scrollUtils";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [pendingMessages, setPendingMessages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Use fallback values if env vars are undefined
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  };

  // Check if using fallback values
  const usingFallback = !import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

  // Load pending messages on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("pendingMessages");
    if (savedMessages) {
      const messages = JSON.parse(savedMessages);
      setPendingMessages(messages);

      // If we're online and have pending messages, send them immediately
      if (navigator.onLine && messages.length > 0) {
        syncPendingMessages();
      }
    }
  }, []);

  // Online/Offline detection with auto-sync
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Auto-sync when coming back online
      if (pendingMessages.length > 0) {
        syncPendingMessages();
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [pendingMessages]); // Add pendingMessages as dependency

  // Save pending messages to localStorage
  useEffect(() => {
    localStorage.setItem("pendingMessages", JSON.stringify(pendingMessages));
  }, [pendingMessages]);

  // Sync pending messages when back online - FIXED VERSION
  const syncPendingMessages = async () => {
    if (pendingMessages.length === 0 || !navigator.onLine) return;

    console.log(
      "🔄 Starting to sync pending messages:",
      pendingMessages.length
    );

    setLoading(true);
    const successfulMessages = [];
    const failedMessages = [];

    // Create a copy of current pending messages to avoid mutation during loop
    const messagesToSend = [...pendingMessages];

    for (const message of messagesToSend) {
      try {
        console.log("📤 Sending pending message:", message);

        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: message.name,
            to_name: "Melaku Adane",
            from_email: message.email,
            to_email: "melakuadane54@example.com", 
            message: message.message,
          },
          EMAILJS_CONFIG.publicKey
        );

        successfulMessages.push(message);
        console.log("✅ Successfully sent message from:", message.name);
      } catch (error) {
        failedMessages.push(message);
        console.error("❌ Failed to send pending message:", error);
      }
    }

    // Update state with only failed messages
    setPendingMessages(failedMessages);
    setLoading(false);

    if (successfulMessages.length > 0) {
      setSubmitStatus("sync_success");
      console.log(
        `✅ Successfully sent ${successfulMessages.length} pending messages`
      );

      // Auto-hide success message
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }

    if (failedMessages.length > 0) {
      console.warn(`❌ ${failedMessages.length} messages failed to send`);
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    // If offline, save message to localStorage
    if (!isOnline) {
      const pendingMessage = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...form,
      };

      setPendingMessages((prev) => [...prev, pendingMessage]);
      setLoading(false);
      setSubmitStatus("offline_saved");
      setForm({
        name: "",
        email: "",
        message: "",
      });

      console.log("💾 Message saved offline:", pendingMessage);
      return;
    }

    // If online, send immediately
    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          to_name: "Melaku Adane",
          from_email: form.email,
          to_email: "melakuadane54@example.com", 
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey
      )
      .then(
        () => {
          setLoading(false);
          setSubmitStatus("success");
          setForm({
            name: "",
            email: "",
            message: "",
          });

          console.log("✅ Message sent successfully");

          setTimeout(() => {
            scrollToSection("home", { duration: 1000 });
          }, 2000);
        },
        (error) => {
          setLoading(false);
          setSubmitStatus("error");
          console.error("❌ EmailJS Error:", error);
        }
      );
  };

  const getButtonText = () => {
    if (loading) return "Sending...";
    // if (!isOnline) return "Save Offline";
    return "Send Message";
  };

  // Manual sync button for testing
  const handleManualSync = () => {
    if (pendingMessages.length > 0 && isOnline) {
      syncPendingMessages();
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-center`}>Contact.</h3>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-green-400 font-semibold">
                Message sent successfully!
              </p>
            </div>
          </motion.div>
        )}

        {/* {submitStatus === "offline_saved" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💾</span>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">
                  Message saved offline!
                </p>
                <p className="text-yellow-300 text-sm">
                  Your message will be sent automatically when you're back
                  online.
                </p>
              </div>
            </div>
          </motion.div>
        )} */}

        {/* {submitStatus === "sync_success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🔄</span>
              </div>
              <div>
                <p className="text-green-400 font-semibold">
                  Pending messages sent!
                </p>
                <p className="text-green-300 text-sm">
                  Your offline messages have been delivered successfully.
                </p>
              </div>
            </div>
          </motion.div>
        )} */}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">!</span>
              </div>
              <p className="text-red-400 font-semibold">
                Failed to send message
              </p>
            </div>
          </motion.div>
        )}

        {/* Connection Status */}
        <div
          className={`mt-4 p-3 rounded-lg text-center ${
            isOnline
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {isOnline
            ? "🟢 You are online - Messages send instantly"
            : "🟡 You are offline"}
        </div>

        {/* Pending Messages Section */}
        {/* {pendingMessages.length > 0 && (
          <div className="mt-3 p-4 bg-blue-500/20 border border-blue-500 rounded-lg">
            <div className="flex items-center justify-between">
              {/* <div>
                <p className="text-blue-400 font-semibold">
                  💾 {pendingMessages.length} message(s) waiting to be sent
                </p>
                <p className="text-blue-300 text-sm mt-1">
                  {isOnline
                    ? "Messages will be sent automatically now that you're online"
                    : "Messages will auto-send when you come back online"}
                </p>
              </div> */}

              {/* Manual Sync Button - Only show when online */}
              {/* {isOnline && (
                <button
                  onClick={handleManualSync}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Now"}
                </button>
              )} */}
            {/* </div> */} 
          {/* </div>
        )} */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col focus">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            } `}
          >
            {getButtonText()}
          </button>

          <p className="text-secondary text-center text-sm">
            {isOnline
              ? "💬 Message will be delivered instantly to my email"
              : "📱 Message saved locally - will auto-send when online"}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");


// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "../components/canvas";
// import { SectionWrapper } from "../hoc";

// import { scrollToSection } from "../utils/scrollUtils";

// const Contact = () => {
//   const formRef = useRef();
//   const leftSectionRef = useRef();
//   const rightSectionRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [isOnline, setIsOnline] = useState(navigator.onLine);
//   const [pendingMessages, setPendingMessages] = useState([]);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // ✅ HARDCODED - Remove this once .env works
//   const EMAILJS_CONFIG = {
//     serviceId: "service_t2iga5f",
//     templateId: "template_bpxf3ip",
//     publicKey: "a00bj6UDGQjp9aPN8",
//   };

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "-50px 0px -50px 0px" }
//     );

//     if (leftSectionRef.current) observer.observe(leftSectionRef.current);
//     if (rightSectionRef.current) observer.observe(rightSectionRef.current);

//     return () => {
//       if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
//       if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
//     };
//   }, []);

//   // Load pending messages on component mount
//   useEffect(() => {
//     const savedMessages = localStorage.getItem("pendingMessages");
//     if (savedMessages) {
//       const messages = JSON.parse(savedMessages);
//       setPendingMessages(messages);

//       // If we're online and have pending messages, send them immediately
//       if (navigator.onLine && messages.length > 0) {
//         syncPendingMessages();
//       }
//     }
//   }, []);

//   // Online/Offline detection with auto-sync
//   useEffect(() => {
//     const handleOnline = () => {
//       setIsOnline(true);
//       // Auto-sync when coming back online
//       if (pendingMessages.length > 0) {
//         syncPendingMessages();
//       }
//     };

//     const handleOffline = () => {
//       setIsOnline(false);
//     };

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, [pendingMessages]);

//   // Save pending messages to localStorage
//   useEffect(() => {
//     localStorage.setItem("pendingMessages", JSON.stringify(pendingMessages));
//   }, [pendingMessages]);

//   // Sync pending messages when back online
//   const syncPendingMessages = async () => {
//     if (pendingMessages.length === 0 || !navigator.onLine) return;

//     console.log(
//       "🔄 Starting to sync pending messages:",
//       pendingMessages.length
//     );

//     setLoading(true);
//     const successfulMessages = [];
//     const failedMessages = [];

//     const messagesToSend = [...pendingMessages];

//     for (const message of messagesToSend) {
//       try {
//         console.log("📤 Sending pending message:", message);

//         await emailjs.send(
//           EMAILJS_CONFIG.serviceId,
//           EMAILJS_CONFIG.templateId,
//           {
//             from_name: message.name,
//             to_name: "Melaku Adane",
//             from_email: message.email,
//             to_email: "melakuadane54@gmail.com",
//             message: message.message,
//           },
//           EMAILJS_CONFIG.publicKey
//         );

//         successfulMessages.push(message);
//         console.log("✅ Successfully sent message from:", message.name);
//       } catch (error) {
//         failedMessages.push(message);
//         console.error("❌ Failed to send pending message:", error);
//       }
//     }

//     setPendingMessages(failedMessages);
//     setLoading(false);

//     if (successfulMessages.length > 0) {
//       setSubmitStatus("sync_success");
//       console.log(
//         `✅ Successfully sent ${successfulMessages.length} pending messages`
//       );

//       setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     }

//     if (failedMessages.length > 0) {
//       console.warn(`❌ ${failedMessages.length} messages failed to send`);
//     }
//   };

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSubmitStatus(null);

//     // If offline, save message to localStorage
//     if (!isOnline) {
//       const pendingMessage = {
//         id: Date.now(),
//         timestamp: new Date().toISOString(),
//         ...form,
//       };

//       setPendingMessages((prev) => [...prev, pendingMessage]);
//       setLoading(false);
//       setSubmitStatus("offline_saved");
//       setForm({
//         name: "",
//         email: "",
//         message: "",
//       });

//       console.log("💾 Message saved offline:", pendingMessage);
//       return;
//     }

//     // If online, send immediately
//     emailjs
//       .send(
//         EMAILJS_CONFIG.serviceId,
//         EMAILJS_CONFIG.templateId,
//         {
//           from_name: form.name,
//           to_name: "Melaku Adane",
//           from_email: form.email,
//           to_email: "melakuadane54@gmail.com",
//           message: form.message,
//         },
//         EMAILJS_CONFIG.publicKey
//       )
//       .then(
//         () => {
//           setLoading(false);
//           setSubmitStatus("success");
//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });

//           console.log("✅ Message sent successfully");

//           setTimeout(() => {
//             scrollToSection("home", { duration: 1000 });
//           }, 2000);
//         },
//         (error) => {
//           setLoading(false);
//           setSubmitStatus("error");
//           console.error("❌ EmailJS Error:", error);
//         }
//       );
//   };

//   const getButtonText = () => {
//     if (loading) return "Sending...";
//     if (!isOnline) return "Save Offline";
//     return "Send Message";
//   };

//   // Manual sync button for testing
//   const handleManualSync = () => {
//     if (pendingMessages.length > 0 && isOnline) {
//       syncPendingMessages();
//     }
//   };

//   // Animation classes based on visibility
//   const getAnimationClasses = (direction = "left") => {
//     const baseClasses = "transition-all duration-700 ease-out transform";
    
//     if (!isVisible) {
//       return direction === "left" 
//         ? `${baseClasses} -translate-x-10 opacity-0`
//         : `${baseClasses} translate-x-10 opacity-0`;
//     }
    
//     return direction === "left"
//       ? `${baseClasses} translate-x-0 opacity-100 delay-200`
//       : `${baseClasses} translate-x-0 opacity-100 delay-400`;
//   };

//   const getStatusAnimationClasses = () => {
//     return isVisible 
//       ? "transition-all duration-500 ease-out transform translate-y-0 opacity-100"
//       : "transition-all duration-500 ease-out transform -translate-y-4 opacity-0";
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       {/* Left Section - Contact Form */}
//       <div
//         ref={leftSectionRef}
//         className={`flex-[0.75] bg-black-100 p-8 rounded-2xl ${getAnimationClasses("left")}`}
//       >
//         <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
//         <h3 className={`${styles.sectionHeadText} text-center`}>Contact.</h3>

//         {/* Status Messages */}
//         {submitStatus === "success" && (
//           <div
//             className={`mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg ${getStatusAnimationClasses()}`}
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                 <span className="text-white text-sm">✓</span>
//               </div>
//               <p className="text-green-400 font-semibold">
//                 Message sent successfully!
//               </p>
//             </div>
//           </div>
//         )}

//         {submitStatus === "offline_saved" && (
//           <div
//             className={`mt-6 p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg ${getStatusAnimationClasses()}`}
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
//                 <span className="text-white text-sm">💾</span>
//               </div>
//               <div>
//                 <p className="text-yellow-400 font-semibold">
//                   Message saved offline!
//                 </p>
//                 <p className="text-yellow-300 text-sm">
//                   Your message will be sent automatically when you're back
//                   online.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {submitStatus === "sync_success" && (
//           <div
//             className={`mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg ${getStatusAnimationClasses()}`}
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                 <span className="text-white text-sm">🔄</span>
//               </div>
//               <div>
//                 <p className="text-green-400 font-semibold">
//                   Pending messages sent!
//                 </p>
//                 <p className="text-green-300 text-sm">
//                   Your offline messages have been delivered successfully.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {submitStatus === "error" && (
//           <div
//             className={`mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg ${getStatusAnimationClasses()}`}
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
//                 <span className="text-white text-sm">!</span>
//               </div>
//               <p className="text-red-400 font-semibold">
//                 Failed to send message
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Connection Status */}
//         <div
//           className={`mt-4 p-3 rounded-lg text-center transition-all duration-300 transform hover:scale-105 ${
//             isOnline
//               ? "bg-green-500/20 text-green-400 border border-green-500/30"
//               : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
//           }`}
//         >
//           {isOnline
//             ? "🟢 You are online - Messages send instantly"
//             : "🟡 You are offline - Messages will be saved locally"}
//         </div>

//         {/* Pending Messages Section */}
//         {pendingMessages.length > 0 && (
//           <div className="mt-3 p-4 bg-blue-500/20 border border-blue-500 rounded-lg transition-all duration-300 transform hover:scale-105">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-blue-400 font-semibold">
//                   💾 {pendingMessages.length} message(s) waiting to be sent
//                 </p>
//                 <p className="text-blue-300 text-sm mt-1">
//                   {isOnline
//                     ? "Messages will be sent automatically now that you're online"
//                     : "Messages will auto-send when you come back online"}
//                 </p>
//               </div>

//               {/* Manual Sync Button - Only show when online */}
//               {isOnline && (
//                 <button
//                   onClick={handleManualSync}
//                   disabled={loading}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
//                 >
//                   {loading ? "Sending..." : "Send Now"}
//                 </button>
//               )}
//             </div>
//           </div>
//         )}

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-8 flex flex-col gap-8"
//         >
//           <div className="flex flex-col group">
//             <span className="text-white font-medium mb-4 transition-all duration-300 group-hover:text-[#C3BFFB] group-focus-within:text-[#915EFF]">
//               Your Name
//             </span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium transition-all duration-300 focus:border-[#915EFF] focus:scale-105 hover:border-gray-600 hover:scale-105"
//               required
//             />
//           </div>
          
//           <div className="flex flex-col group">
//             <span className="text-white font-medium mb-4 transition-all duration-300 group-hover:text-[#C3BFFB] group-focus-within:text-[#915EFF]">
//               Your email
//             </span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium transition-all duration-300 focus:border-[#915EFF] focus:scale-105 hover:border-gray-600 hover:scale-105"
//               required
//             />
//           </div>
          
//           <div className="flex flex-col group">
//             <span className="text-white font-medium mb-4 transition-all duration-300 group-hover:text-[#C3BFFB] group-focus-within:text-[#915EFF]">
//               Your Message
//             </span>
//             <textarea
//               rows={7}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium transition-all duration-300 focus:border-[#915EFF] focus:scale-105 hover:border-gray-600 hover:scale-105 resize-none hover:resize-y"
//               required
//             />
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 ${
//               loading 
//                 ? "opacity-50 cursor-not-allowed bg-gray-600" 
//                 : !isOnline 
//                   ? "bg-yellow-600 hover:bg-yellow-700 hover:shadow-lg hover:shadow-yellow-500/25" 
//                   : "bg-tertiary shadow-primary hover:bg-[#915EFF] hover:shadow-lg hover:shadow-[#915EFF]/25"
//             }`}
//           >
//             {getButtonText()}
//           </button>

//           <p className="text-secondary text-center text-sm transition-all duration-300 hover:text-[#C3BFFB]">
//             {isOnline
//               ? "💬 Message will be delivered instantly to my email"
//               : "📱 Message saved locally - will auto-send when online"}
//           </p>
//         </form>
//       </div>

//       {/* Right Section - Earth Canvas */}
//       <div
//         ref={rightSectionRef}
//         className={`xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ${getAnimationClasses("right")}`}
//       >
//         <EarthCanvas />
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");
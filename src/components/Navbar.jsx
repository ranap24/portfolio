import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import LogoSample from '../assets/LogoSample.png'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 z-10 flex justify-center pt-3"
    >
      <nav className="flex text-[10px] sm:text-[16px] justify-between gap-2 sm:gap-3 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-3 *:rounded-md 0 *:px-2.5 sm:*:px-5 *:py-1 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
      <a href="#" className="border border-hidden">
          <motion.img
            className="h-3 w-3 sm:h-6 sm:w-6"
            src={LogoSample}
            initial={{ scale: 1, rotate: 0 }}
            animate={{ rotate: 360, transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" } }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{scale : 0.9}}
          />
          
          <span className="sr-only">Home</span>
        </a>
        <a href="#home" className="text-black dark:text-white hover:text-gray-900">Home</a>
        <a href="#services" className="text-black dark:text-white hover:text-gray-900">Services</a>
        <a href="#about" className="text-black dark:text-white hover:text-gray-900">About</a>
        <a href="#contact" className="text-black dark:text-white hover:text-gray-900">Contact</a>
      </nav>
    </motion.div>
  );
};

export default Navbar;
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
      className="fixed top-0 z-10 flex w-full mx-auto sm:justify-center pt-3"
    >
      <nav className="flex text-[10px] sm:text-[16px] justify-between gap-2 sm:gap-3 rounded-lg bg-white p-3 *:rounded-md *:border *:border-gray-200 *:px-2.5 sm:*:px-5 *:py-1 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <a href="#" className="border-white">
          <motion.img
            className="h-3 w-3 sm:h-6 sm:w-6"
            src={LogoSample} 
            initial = {{scale: 1.2,rotate : 90,transition : {duration : 0.5}}}
            animate = {{scale : 1,rotate : 180,transition : {duration : 0.9,repeat : Infinity,ease : "easeInOut"}}}
            />
          
          <span className="sr-only">Home</span>
        </a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </motion.div>
  );
};

export default Navbar;
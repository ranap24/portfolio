import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headingArray = ["C", "a", "r", "i", "n", "a", "m", "i"];

const Homepage = () => {
  const ref = useRef();

  // Use scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Map scroll start to end
  });

  // Transform scroll progress into horizontal movement (from center to left)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Start from center (0%) and move left

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="h-screen flex flex-col justify-center items-center"
        ref={ref} // Ref for scroll tracking
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "200vh", // Ensures there is enough scrollable space
        }}
      >
        <motion.div
          className="h-full w-full flex flex-col justify-center items-center"
          key="HomePage"
          style={{ x }} // Apply horizontal scroll transform
        >
          <motion.h1
            className="font-canela text-[180px] tracking-[8px] text-[#252525]"
            initial={{ y: 48, scale: 0.8, opacity: 0 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
              transition: { duration: 1.6, ease: "easeInOut" },
            }}
            exit={{ x: 100 }}
          >
            {headingArray.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 500, damping: 25 },
                  color: "#379237",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="font-raleway text-4xl uppercase tracking-[48px] font-light"
            initial={{ opacity: 0, letterSpacing: "16px" }}
            animate={{
              opacity: 1,
              letterSpacing: "48px",
              transition: { duration: 1.2, delay: 0.6, ease: "easeInOut" },
            }}
          >
            Studios
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;

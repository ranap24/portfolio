/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="font-raleway bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-lg lg:text-xl py-2 md:pb-10 relative z-20 tracking-tight"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("", className)}>
      <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
      {renderWords()}
      </div>
    </div>)
  );
};

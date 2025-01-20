import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Container = ({ heading }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-[248px] h-[399.28px] bg-[#252525] rounded-lg shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-3 opacity-90"
    >
      <div className="text-white flex flex-row">
        <p className="text-[32px] font-canela">{heading}</p>
      </div>
      <div className="w-[116.8px] h-[59.4px] bg-[#f0935d] rounded-lg flex justify-between items-center cursor-pointer">
        <p className="text-[14px] font-raleway">Know more</p>
        <div>
          <FaArrowRightLong color="#252525" size={42} strokeWidth={0.1} />
        </div>
      </div>
    </motion.div>
  );
};

export default Container;

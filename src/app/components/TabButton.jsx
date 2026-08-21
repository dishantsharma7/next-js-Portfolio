import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0, opacity: 0 },
  active: { width: "100%", opacity: 1, backgroundColor: "#00d4ff" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#00ff88] glow-text-green" : "text-slate-500 hover:text-[#00d4ff]";

  return (
    <button onClick={selectTab} className="relative group focus:outline-none">
      <p className={`mr-6 font-mono font-bold uppercase transition-colors duration-300 flex items-center gap-2 ${buttonClasses}`}>
        {active && <span className="text-[#00ff88]">{'>'}</span>}
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-[2px] mt-1 absolute left-0 bottom-0 group-hover:bg-[#ff00ff] transition-colors"
      ></motion.div>
    </button>
  );
};

export default TabButton;

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#00ff88] border-[#00ff88] cyber-chamfer-sm glow-green"
    : "text-slate-400 border-cyber hover:border-[#00ff88] hover:text-[#00ff88] transition-colors duration-300";
    
  return (
    <button
      className={`${buttonStyles} font-mono uppercase border-2 px-6 py-3 text-sm md:text-base cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

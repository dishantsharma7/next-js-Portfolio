import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group border border-cyber cyber-chamfer bg-[#12121a] transition-all duration-300 hover:border-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] overflow-hidden flex flex-col h-full relative">
      {/* Terminal Header */}
      <div className="flex justify-between items-center bg-[#0a0a0f] border-b border-cyber px-4 py-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-share text-xs text-slate-400 hidden sm:block truncate">
          [PROJECT_LOG_v1.0]
        </div>
      </div>
      
      {/* Image Area */}
      <div
        className="h-52 md:h-64 relative group/image"
        style={{ background: `url(${imgUrl})`, backgroundPosition: "center", backgroundSize: "cover" }}
      >
        {/* Overlay */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0a0a0f] bg-opacity-0 hidden group-hover/image:flex group-hover/image:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-4 flex flex-col items-center justify-center border-2 rounded border-[#ADB7BE] hover:border-[#00d4ff] hover:shadow-[0_0_10px_rgba(0,212,255,0.8)] group/link transition-all"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover/link:text-[#00d4ff]" />
            <span className="font-mono text-[10px] mt-1 text-[#ADB7BE] group-hover/link:text-[#00d4ff]">CODE</span>
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 flex flex-col items-center justify-center border-2 rounded border-[#ADB7BE] hover:border-[#00d4ff] hover:shadow-[0_0_10px_rgba(0,212,255,0.8)] group/link transition-all"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] group-hover/link:text-[#00d4ff]" />
            <span className="font-mono text-[10px] mt-1 text-[#ADB7BE] group-hover/link:text-[#00d4ff]">DEMO</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="text-white py-6 px-4 flex-grow flex flex-col">
        <h5 className="text-xl font-share font-semibold mb-2 text-[#00ff88]">{`> ${title}`}</h5>
        <p className="text-slate-400 font-mono text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

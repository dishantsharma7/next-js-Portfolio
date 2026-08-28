"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    metric: "Clients Served",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Languages and Frameworks",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Years of Experience",
    value: "2",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 items-stretch justify-between gap-4 sm:gap-6">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center p-4 sm:p-6 cyber-chamfer-sm border border-[#00ff88] bg-[#12121a] w-full relative group hover:glow-green transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff88] opacity-50"></div>
              <h2 className="text-[#00ff88] font-orbitron text-xl sm:text-3xl lg:text-4xl font-bold flex flex-row items-center justify-center text-glow-green drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-[#00ff88] font-orbitron text-xl sm:text-3xl lg:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-cyan-400 font-mono text-[10px] sm:text-sm tracking-wider sm:tracking-widest uppercase mt-2 sm:mt-3 text-center">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;

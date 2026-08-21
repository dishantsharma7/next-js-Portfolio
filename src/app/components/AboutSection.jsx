"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4 font-mono text-sm">
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>Node.js</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>ExpressJs</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>PostgreSQL</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>MongoDB</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>JavaScript</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>TypeScript</span></li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>ReactJs</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>NextJs</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>HTML</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>CSS</span></li>
          <li className="flex items-start gap-2 break-all sm:break-normal"><span className="text-[#00ff88] shrink-0">[+]</span><span>Bootstrap</span></li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="flex flex-col gap-4 font-mono text-sm">
        <li>
          <div className="text-[#00ff88] font-bold">{"> SDE-I"}</div>
          <div className="text-slate-400">CODE DRIVEN LABS (JUN 2024 - PRESENT)</div>
        </li>
        <li>
          <div className="text-[#00ff88] font-bold">{"> SOFTWARE DEVELOPER INTERN"}</div>
          <div className="text-slate-400">CODE DRIVEN LABS (JAN 2024 - JUN 2024)</div>
        </li>
        <li>
          <div className="text-[#00ff88] font-bold">{"> OPERATIONS HEAD"}</div>
          <div className="text-slate-400">NBLIK (JUL 2022 - AUG 2022)</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-col gap-4 font-mono text-sm">
        <li>
          <div className="text-[#00ff88] font-bold">{"> B.E. Electrical and Computer Engineering"}</div>
          <div className="text-slate-400">THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY</div>
        </li>
        <li>
          <div className="text-[#00ff88] font-bold">{"> CLASS XII"}</div>
          <div className="text-slate-400">MHAC SCHOOL NAGBANI, JAMMU</div>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="flex flex-col lg:flex-row gap-8 items-start px-4 xl:gap-16 xl:px-16">
        <div className="relative w-full lg:w-1/2 border border-cyber cyber-chamfer p-2 bg-[#0a0a0f] hidden md:block group">
          <div className="absolute top-0 left-0 w-full h-full bg-[#00d4ff] opacity-10 mix-blend-overlay group-hover:opacity-30 transition-opacity z-10"></div>
          <Image
            src="/images/profile2.jpeg"
            width={500}
            height={500}
            alt="Profile Image"
            className="object-cover w-full h-auto filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
          />
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d4ff] z-20"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff] z-20"></div>
        </div>
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full w-full lg:w-1/2 border border-cyber cyber-chamfer bg-[#12121a] p-6 md:p-8 relative">
          <div className="absolute top-0 left-0 w-full bg-[#0a0a0f] border-b border-cyber px-4 py-2 flex justify-between items-center mb-6">
            <span className="font-share text-[#00ff88] text-sm tracking-widest">[SYSTEM_INFO // BIOGRAPHY]</span>
            <span className="font-mono text-slate-500 text-xs blink">_</span>
          </div>

          <div className="mt-12">
            <p className="text-slate-300 font-mono text-sm leading-relaxed mb-8">
              <span className="text-[#ff00ff] font-bold">{">"}</span> I am a full-stack web developer with a passion for building cool
              websites. I have experience working with TypeScript, JavaScript,
              ReactJs, NextJs, Node.js, Express, PostgreSQL, Prisma MongoDB, HTML,
              CSS, Tailwind CSS and Git. I am a quick learner who is always
              looking to expand his knowledge and skill set. I am a team player
              and I am excited to work with others to create something new.
            </p>
            
            <div className="flex flex-row flex-wrap justify-start border-b border-cyber/50 pb-2 mb-6 gap-y-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
            </div>
            
            <div className="bg-[#0a0a0f] p-4 border border-cyber/30 rounded-sm">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

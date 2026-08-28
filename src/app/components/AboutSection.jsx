"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss, SiBootstrap, SiC, SiCplusplus, SiPython, SiRedux, SiMui, SiTailwindcss, SiVitest, SiJest, SiPrisma, SiMysql, SiMongoose, SiSupabase, SiN8N, SiZapier, SiVercel, SiAnthropic, SiGithubcopilot, SiGithub, SiRazorpay, SiStripe, SiPostman, SiGit, SiJira, SiTrello } from "react-icons/si";
import { FaAws, FaDatabase, FaCode, FaRocket, FaBrain } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

const SKILLS_CATEGORIES = [
  {
    title: "Languages and Frameworks",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "group-hover/skill:text-[#F7DF1E]" },
      { name: "TypeScript", Icon: SiTypescript, color: "group-hover/skill:text-[#3178C6]" },
      { name: "Node.js", Icon: SiNodedotjs, color: "group-hover/skill:text-[#339933]" },
      { name: "ExpressJs", Icon: SiExpress, color: "group-hover/skill:text-white" },
      { name: "ReactJs", Icon: SiReact, color: "group-hover/skill:text-[#61DAFB]" },
      { name: "NextJs", Icon: SiNextdotjs, color: "group-hover/skill:text-white" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "group-hover/skill:text-[#764ABC]" },
      { name: "Material UI", Icon: SiMui, color: "group-hover/skill:text-[#007FFF]" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "group-hover/skill:text-[#06B6D4]" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "group-hover/skill:text-[#7952B3]" },
      { name: "Vitest", Icon: SiVitest, color: "group-hover/skill:text-[#FCC72B]" },
      { name: "Jest", Icon: SiJest, color: "group-hover/skill:text-[#C21325]" },
      { name: "C", Icon: SiC, color: "group-hover/skill:text-[#A8B9CC]" },
      { name: "C++", Icon: SiCplusplus, color: "group-hover/skill:text-[#00599C]" },
      { name: "Python", Icon: SiPython, color: "group-hover/skill:text-[#3776AB]" },
      { name: "HTML", Icon: SiHtml5, color: "group-hover/skill:text-[#E34F26]" },
      { name: "CSS", Icon: SiCss, color: "group-hover/skill:text-[#1572B6]" },
    ]
  },
  {
    title: "Databases and ORMs",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "group-hover/skill:text-[#4169E1]" },
      { name: "Prisma", Icon: SiPrisma, color: "group-hover/skill:text-white" },
      { name: "MySQL", Icon: SiMysql, color: "group-hover/skill:text-[#4479A1]" },
      { name: "MongoDB", Icon: SiMongodb, color: "group-hover/skill:text-[#47A248]" },
      { name: "Mongoose", Icon: SiMongoose, color: "group-hover/skill:text-[#880000]" },
      { name: "Supabase", Icon: SiSupabase, color: "group-hover/skill:text-[#3ECF8E]" },
      { name: "DBT", Icon: FaDatabase, color: "group-hover/skill:text-[#FF694B]" },
    ]
  },
  {
    title: "Cloud Services and AI Tools",
    skills: [
      { name: "AWS", Icon: FaAws, color: "group-hover/skill:text-[#FF9900]" },
      { name: "n8n", Icon: SiN8N, color: "group-hover/skill:text-[#EA4B71]" },
      { name: "Zapier", Icon: SiZapier, color: "group-hover/skill:text-[#FF4A00]" },
      { name: "Vercel", Icon: SiVercel, color: "group-hover/skill:text-white" },
      { name: "Cursor AI", Icon: FaCode, color: "group-hover/skill:text-[#00d4ff]" },
      { name: "Antigravity IDE", Icon: FaRocket, color: "group-hover/skill:text-[#ff00ff]" },
      { name: "Claude Code", Icon: SiAnthropic, color: "group-hover/skill:text-[#D97757]" },
      { name: "OpenAI Codex", Icon: TbBrandOpenai, color: "group-hover/skill:text-white" },
      { name: "Github Copilot", Icon: SiGithubcopilot, color: "group-hover/skill:text-white" },
      { name: "PI agent", Icon: FaBrain, color: "group-hover/skill:text-[#00ff88]" },
      { name: "Razorpay", Icon: SiRazorpay, color: "group-hover/skill:text-[#3395FF]" },
      { name: "Stripe", Icon: SiStripe, color: "group-hover/skill:text-[#008CDD]" },
      { name: "Postman", Icon: SiPostman, color: "group-hover/skill:text-[#FF6C37]" },
      { name: "Git/GitHub", Icon: SiGithub, color: "group-hover/skill:text-white" },
      { name: "JIRA", Icon: SiJira, color: "group-hover/skill:text-[#0052CC]" },
      { name: "Trello", Icon: SiTrello, color: "group-hover/skill:text-[#0052CC]" },
    ]
  }
];

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="flex flex-col gap-4 font-mono text-sm">
        <li>
          <div className="text-[#00ff88] font-bold">{"> Sr. SOFTWARE ENGINEER"}</div>
          <div className="text-slate-400"> WORLD MARKET VIEW (NOV 2025 - PRESENT)</div>
        </li>
        <li>
          <div className="text-[#00ff88] font-bold">{"> SDE-I"}</div>
          <div className="text-slate-400">CODE DRIVEN LABS (JUN 2024 - OCT 2025)</div>
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
  const [tab, setTab] = useState("experience");
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

      {/* Skills Section */}
      <div className="mt-16 px-4 xl:px-16 w-full">
        <div className="border border-cyber cyber-chamfer bg-[#12121a] p-6 md:p-8 relative group">
          <div className="absolute top-0 left-0 w-full bg-[#0a0a0f] border-b border-cyber px-4 py-2 flex justify-between items-center mb-6">
            <span className="font-share text-[#00ff88] text-sm tracking-widest">[SYSTEM_INFO // SKILLS]</span>
            <span className="font-mono text-slate-500 text-xs blink">_</span>
          </div>

          <div className="mt-10 flex flex-col gap-12">
            {SKILLS_CATEGORIES.map((category, catIndex) => (
              <div key={catIndex} className="flex flex-col gap-6">
                <h3 className="font-mono text-[#00ff88] text-lg border-b border-cyber/30 pb-2">
                  {">"} {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.Icon;
                    return (
                      <div key={index} className="flex flex-col items-center justify-center p-6 border border-cyber/30 bg-[#0a0a0f] hover:border-[#00ff88] transition-all duration-300 group/skill hover:-translate-y-2 cursor-pointer w-full rounded-sm relative overflow-hidden shadow-none hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                        <div className="absolute inset-0 bg-[#00d4ff] opacity-0 group-hover/skill:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                        <Icon className={`text-5xl text-slate-500 transition-colors duration-300 ${skill.color} z-10`} />
                        <span className="mt-4 font-mono text-xs text-slate-400 group-hover/skill:text-white transition-colors duration-300 z-10 text-center">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

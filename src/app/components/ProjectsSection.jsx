"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

import Link from "next/link";

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Portfolio website created using Nextjs and Tailwind CSS to showcase my work and projects",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dishantsharma7/portfolio-next",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-Learning Platform",
    description:
      "Fully Responsive E-learning Platform created using Django, HTML, CSS, and JavaScript created for a non-profit organisaion.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Francis-JSM/E---Learn",
    previewUrl: "https://anhad.org.in/",
  },
  {
    id: 3,
    title: "Sorting Visualizer",
    description:
      "Sorting visualizer Created using HTML, CSS and JS for see how sorting algorithms work under the hood",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dishantsharma7/Sorting-visualizer",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Space-VOYAGE",
    description:
      "A project that uses the NASA API to fetch images from the rovers/satellites from various sources. It's a treat for space enthusiasts.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dishantsharma7/SPACE_VOYAGE",
    previewUrl: "https://space-voyage-pi.vercel.app/",
  },
  {
    id: 5,
    title: "Image-Playground",
    description:
      "An image editing tool created using HTML, CSS, and JS consisting multiple tools",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dishantsharma7/image-playground",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "U_Intern",
    description:
      "Internship/Placement portal created for the college authorities using Django,  HTML, CSS, and JavaScript",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dishantsharma7/U_INTERN",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88] tracking-normal sm:tracking-wider uppercase glitch" data-text="ACTIVE_DIRECTORIES">
          ACTIVE_DIRECTORIES
        </h2>
        <div className="h-1 w-24 bg-[#ff00ff] mt-2 shadow-[0_0_10px_#ff00ff]"></div>
      </div>

      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 py-6 mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredProjects.slice(0, 3).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      
      <div className="flex justify-center mt-12">
        <Link href="/projects" className="inline-block px-8 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00ff88] hover:bg-slate-800 text-black font-semibold text-center transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,212,255,0.4)]">
          Show More Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;

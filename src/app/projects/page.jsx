"use client";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion } from "framer-motion";
import { projectsData } from "../components/ProjectsSection";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllProjectsPage = () => {
  const [tag, setTag] = useState("All");

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
    <main className="flex min-h-screen flex-col bg-[#121212] max-w-full overflow-x-hidden">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-12 py-4">
        <div className="mb-8">
          <Link href="/#projects" className="text-[#adb7be] hover:text-white flex items-center gap-2 w-fit transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88] tracking-normal sm:tracking-wider uppercase glitch" data-text="ALL_PROJECTS">
            ALL_PROJECTS
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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-16">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
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
      </div>
      <Footer />
    </main>
  );
};

export default AllProjectsPage;

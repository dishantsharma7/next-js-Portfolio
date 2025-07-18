"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>Node.js</li>
      //   <li>ExpressJs</li>
      //   <li>PostgreSQL</li>
      //   <li>MongoDB</li>
      //   <li>JavaScript</li>
      //   <li>TypeScript</li>
      //   <li>ReactJs</li>
      //   <li>NextJs</li>
      //   <li>HTML</li>
      //   <li>CSS</li>
      //   <li>Bootstrap</li>
      // </ul>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>ExpressJs</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>ReactJs</li>
          <li>NextJs</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>Node.js</li>
      //   <li>ExpressJs</li>
      //   <li>PostgreSQL</li>
      //   <li>MongoDB</li>
      //   <li>JavaScript</li>
      //   <li>TypeScript</li>
      //   <li>ReactJs</li>
      //   <li>NextJs</li>
      //   <li>HTML</li>
      //   <li>CSS</li>
      //   <li>Bootstrap</li>
      // </ul>
      <ul className="list-disc pl-2">
        <li>SDE-I : CODE DRIVEN LABS (JUN 2024 - PRESENT)</li>
        <br></br>
        <li>
          SOFTWARE DEVELOPER INTERN : CODE DRIVEN LABS (JAN 2024 - JUN 2024)
        </li>
        <br></br>
        <li>OPERATIONS HEAD : NBLIK (JUL 2022 - AUG 2022)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>B.E. Electrical and Computer Engineering</b>: THAPAR INSTITUTE OF
          ENGINEERING AND TECHNOLOGY
        </li>
        <br></br>
        <li>
          <b>CLASS XII </b>: MHAC SCHOOL NAGBANI, JAMMU
        </li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/profile2.jpeg"
          width={500}
          height={500}
          className="rounded-full"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack web developer with a passion for building cool
            websites. I have experience working with TypeScript, JavaScript,
            ReactJs, NextJs, Node.js, Express, PostgreSQL, Prisma MongoDB, HTML,
            CSS, Tailwind CSS and Git. I am a quick learner who is always
            looking to expand his knowledge and skill set. I am a team player
            and I am excited to work with others to create something new.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

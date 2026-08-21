"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="md:py-16 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-7 self-center w-full text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl md:leading-normal font-extrabold font-orbitron glitch text-glow-green w-full" data-text="Hello, I'm">
            Hello, I&apos;m
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              <TypeAnimation
                sequence={[
                  "Dishant",
                  1000,
                  "Developer",
                  1000,
                  "Programmer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="font-mono text-accent text-base sm:text-lg mb-6 lg:text-xl text-center md:text-left w-full">
            <span className="mr-2 text-accent font-bold">&gt;</span>
            Initializing core protocols... System ready.
            <span className="animate-pulse ml-1">_</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center md:justify-start">
            <Link
              href="/#contact"
              className="cyber-chamfer px-8 py-3 w-full max-w-[280px] sm:max-w-none sm:w-auto bg-[#00ff88] text-black font-mono uppercase font-bold text-center glow-green transition-all hover:bg-white"
            >
              Hire Me
            </Link>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/1q7A6Pk4-pcMID2l9zXxkjii-o_gvv4Zc/view?usp=sharing"
              rel="noopener noreferrer"
              className="cyber-chamfer px-8 py-3 w-full max-w-[280px] sm:max-w-none sm:w-auto border-2 border-[#ff00ff] text-[#ff00ff] font-mono uppercase font-bold text-center glow-magenta transition-all bg-transparent hover:bg-[#ff00ff]/10"
            >
              Preview Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-5 place-self-center mt-8 md:mt-0 relative flex justify-center w-full"
        >
          {/* Holographic HUD panel */}
          <div className="cyber-chamfer relative bg-muted/30 p-4 border border-cyber inline-block shadow-[0_0_20px_rgba(0,255,255,0.1)]">
            {/* Corner accent markers */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent"></div>

            <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
              <Image
                src="/images/hero.png"
                alt="hero image"
                className="object-cover drop-shadow-[0_0_15px_rgba(0,255,136,0.6)]"
                fill
                sizes="(max-width: 768px) 250px, 350px"
                priority
              />
              {/* Scanline overlay over the image */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-30 z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

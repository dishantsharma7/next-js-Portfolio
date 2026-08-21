"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Website Design & Development",
    description: "Transform your vision into a reality. This service encompasses crafting beautiful and user-friendly websites that not only captivate visitors but also guide them towards specific actions, whether it's making a purchase, signing up for a newsletter, or contacting you. Our process involves in-depth understanding of your target audience, user experience (UX) design to ensure intuitive navigation and clear calls to action, and front-end development utilizing the latest web technologies to create a visually stunning and functional website.",
  },
  {
    id: 2,
    title: "Landing Page Design",
    description: "Landing pages are laser-focused on specific marketing goals. We design high-impact landing pages that grab attention, communicate your value proposition clearly, and seamlessly convert visitors into leads or paying customers. From crafting compelling headlines and captivating visuals to optimizing conversion elements like CTAs (calls to action) and lead capture forms, we ensure your landing page delivers a powerful first impression and drives results.",
  },
  {
    id: 3,
    title: "E-commerce Design",
    description: "Your online store should be a seamless shopping experience. We create user-friendly and visually appealing e-commerce websites that not only showcase your products beautifully but also make it easy for customers to browse, find what they're looking for, and complete their purchases effortlessly. We incorporate clear product information, intuitive navigation, secure payment gateways, and a streamlined checkout process to maximize sales conversions.",
  },
  {
    id: 4,
    title: "Responsive Design",
    description: "Your website needs to look great and function flawlessly across all devices, from desktop computers to tablets and smartphones. Our responsive design approach ensures your website adapts automatically to different screen sizes, delivering an optimal user experience for all visitors, regardless of their device.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    description: "Your website is an ongoing investment. We provide ongoing website maintenance and support services to ensure your website stays up-to-date, secure against potential threats, and functions smoothly. This includes regular software updates, security scans, performance monitoring, and troubleshooting any technical issues that may arise.",
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-16 text-white">
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88] tracking-normal sm:tracking-wider uppercase glitch" data-text="SERVICES">
          SERVICES
        </h2>
        <div className="h-1 w-24 bg-[#ff00ff] mt-2 shadow-[0_0_10px_#ff00ff]"></div>
      </div>
      
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
            className="flex flex-col h-full border border-cyber cyber-chamfer bg-[#12121a] p-6 md:p-8 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#00d4ff] opacity-0 mix-blend-overlay group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>
            
            <div className="absolute top-0 left-0 w-full bg-[#0a0a0f] border-b border-cyber px-4 py-2 flex justify-between items-center mb-6">
               <span className="font-share text-[#00ff88] text-sm tracking-widest">[SRV_{service.id.toString().padStart(2, '0')}]</span>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4 text-glow-green text-[#e0e0e0]">{service.title}</h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed flex-grow">
               <span className="text-[#ff00ff] font-bold mr-2">{">"}</span>{service.description}
            </p>
            
            {/* Decorative Corner Accents */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff] z-20"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

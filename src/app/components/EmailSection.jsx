"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import XIcon from "../../../public/x-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com"; // Import EmailJS library

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, data, userId).then(
      function (response) {
        setEmailSubmitted(true);
        setIsSubmitting(false);
      },
      function (error) {
        console.error("Failed to send email:", error);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative font-mono"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff88]/20 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="z-10 flex flex-col justify-center">
        <div className="mb-4 text-[#00ff88] text-sm tracking-widest uppercase">
          [ INITIATE_SUBMISSION // CONTACT_NODE ]
        </div>
        <h5 className="text-2xl font-bold text-white my-2 font-orbitron uppercase tracking-wider text-glow-green">
          Secure Channel
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
          <span className="text-[#00ff88]">{">"}</span> Establishing connection...<br/>
          <span className="text-[#00ff88]">{">"}</span> Signal locked. I&apos;m currently looking for new opportunities. 
          Transmit your inquiry below and await confirmation.
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="http://github.com/dishantsharma7" className="hover:glow-green p-2 border border-transparent hover:border-[#00ff88] transition-all cyber-chamfer-sm">
            <Image src={GithubIcon} alt="Github Icon" className="opacity-80 hover:opacity-100" />
          </Link>
          <Link href="https://www.linkedin.com/in/dishantsharma7" className="hover:glow-green p-2 border border-transparent hover:border-[#00ff88] transition-all cyber-chamfer-sm">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="opacity-80 hover:opacity-100" />
          </Link>
          <Link href="https://twitter.com/imDishantsharma" className="hover:glow-green p-2 border border-transparent hover:border-[#00ff88] transition-all cyber-chamfer-sm">
            <Image src={XIcon} alt="X Icon" className="opacity-80 hover:opacity-100" />
          </Link>
        </div>
      </div>

      <div className="z-10 bg-[#0a0a0f] border border-[#00ff88] cyber-chamfer-sm p-8 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff88] opacity-50"></div>
        {emailSubmitted ? (
          <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
            <p className="text-[#00ff88] text-xl font-orbitron text-glow-green glitch">
              [ TRANSMISSION SUCCESSFUL ]
            </p>
            <p className="text-cyan-400 text-sm mt-4 uppercase tracking-widest">Awaiting response...</p>
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label
                htmlFor="email"
                className="text-[#00ff88] block mb-2 text-xs uppercase tracking-widest"
              >
                [ Target_Email ]
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#00ff88] font-bold">{">"}</span>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#12121a] border border-[#00ff88]/50 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-gray-100 text-sm w-full pl-12 sm:pl-10 p-3 outline-none cyber-chamfer-sm transition-all placeholder-[#4A5568]"
                  placeholder="enter_address@domain.com"
                />
              </div>
            </div>
            
            <div className="relative">
              <label
                htmlFor="subject"
                className="text-[#00ff88] block text-xs mb-2 uppercase tracking-widest"
              >
                [ Subject_Line ]
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#00ff88] font-bold">{">"}</span>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#12121a] border border-[#00ff88]/50 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-gray-100 text-sm w-full pl-12 sm:pl-10 p-3 outline-none cyber-chamfer-sm transition-all placeholder-[#4A5568]"
                  placeholder="transmission_topic"
                />
              </div>
            </div>
            
            <div className="relative">
              <label
                htmlFor="message"
                className="text-[#00ff88] block text-xs mb-2 uppercase tracking-widest"
              >
                [ Data_Payload ]
              </label>
              <div className="relative flex">
                <span className="absolute left-4 top-3 text-[#00ff88] font-bold">{">"}</span>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="bg-[#12121a] border border-[#00ff88]/50 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-gray-100 text-sm w-full pl-12 sm:pl-10 p-3 outline-none cyber-chamfer-sm transition-all placeholder-[#4A5568] resize-none"
                  placeholder="compile_message_here..."
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#00ff88] hover:bg-[#0a0a0f] text-[#0a0a0f] hover:text-[#00ff88] border border-[#00ff88] font-bold py-3 px-5 w-full uppercase tracking-widest cyber-chamfer-sm hover:glow-green transition-all flex justify-center items-center gap-2 group mt-2"
            >
              {isSubmitting ? (
                <span className="glitch">UPLOADING...</span>
              ) : (
                <span className="group-hover:glitch">TRANSMIT DATA</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal } from "lucide-react";
import { SiLeetcode, SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa"; 
import Link from "next/link";
import Image from "next/image";

const techStack = [
  { icon: <FaJava className="text-orange-500" />, name: "Java" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress className="text-white" />, name: "Express" },
  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <FaJava className="text-orange-500" />, name: "Java" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress className="text-white" />, name: "Express" },
  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-4 md:px-6 pt-32 pb-12 md:py-24">
      {/* Background Decorator */}
      <div className="absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          
          {/* LEFT COLUMN: Text Content 
          */}
          <div className="flex flex-col gap-6 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500"
            >
              <Terminal className="h-4 w-4" />
              <span>Virat&apos;s Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-7xl"
            >
              Hii I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                VIRAT SIROHI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              I&apos;m a passionate <span className="font-semibold text-foreground">problem solver, full-stack developer, UI/UX enthusiast.</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 flex flex-wrap gap-4"
            >
              <Link
                href="https://leetcode.com/viratsirohii" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 font-medium transition-colors hover:bg-muted group"
              >
                <SiLeetcode className="h-5 w-5 text-[#FFA116]" /> 
                LeetCode
              </Link>

              <Link
                href="https://github.com/Jat-droid" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 font-medium transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" /> GitHub
              </Link>
              
               <Link
                href="https://linkedin.com/in/virat-sirohi" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 font-medium transition-colors hover:bg-muted"
              >
                <Linkedin className="h-5 w-5 text-blue-600" /> LinkedIn
              </Link>
            </motion.div>

            {/* Marquee Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 border-t border-border/50 pt-6"
            >
              <p className="mb-4 text-sm font-medium text-muted-foreground">Tech Stack</p>
              <div className="relative flex w-full max-w-[350px] overflow-hidden mask-image-linear-gradient">
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                  className="flex gap-8"
                  animate={{ x: "-50%" }} 
                  transition={{ 
                    duration: 15, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                >
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-2xl text-muted-foreground grayscale transition-all hover:grayscale-0 hover:scale-110">
                      {tech.icon}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          
          <div className="order-2 flex justify-center relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[60px] rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]"
              >
                <Image
                  src="/profile.png" 
                  alt="Virat Sirohi"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
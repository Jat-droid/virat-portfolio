"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-4 md:px-6 py-24">
      {/* Background Decorator */}
      <div className="absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* 1. Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500"
            >
              <Terminal className="h-4 w-4" />
              <span>Virat&apos;s Portfolio</span>
            </motion.div>

            {/* 2. Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-7xl"
            >
              Hii I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                VIRAT SIROHI
              </span>
            </motion.h1>

            {/* 3. Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              I&apos;m a passionate <span className="font-semibold text-foreground">problem solver, full-stack developer, UI/UX enthusiast.</span>
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 flex flex-wrap gap-4"
            >
              {/* LeetCode Button - OFFICIAL LOGO & COLOR */}
              <Link
                href="https://leetcode.com/u/viratsirohii/" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted group"
              >
                <SiLeetcode className="h-5 w-5 text-[#FFA116]" /> 
                LeetCode
              </Link>

              {/* GitHub Button */}
              <Link
                href="https://github.com/Jat-droid" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" /> GitHub
              </Link>
              
              {/* LinkedIn Button */}
               <Link
                href="https://www.linkedin.com/in/viratsirohii/" 
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                <Linkedin className="h-5 w-5 text-blue-600" /> LinkedIn
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image (New!) */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            {/* Glow Effect behind image */}
            <div className="absolute inset-0 from-blue-500/20 to-purple-500/20 blur-[80px] rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              >
                
                <Image
                  src="/profile.png" 
                  alt="Virat Sirohi"
                  fill
                  className="object-contain drop-shadow-2xl"
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


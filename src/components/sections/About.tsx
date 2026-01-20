"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, FileDown, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Get To Know More
          </span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[400px_1fr] lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-[400px] lg:mx-0"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
              
              <Image
                src="/profile1.png" 
                alt="Virat Sirohi"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            
            {/* 1. Info Cards (Education & Resume) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              {/* Education Card */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-colors hover:bg-muted/50">
                <GraduationCap className="mb-3 h-8 w-8 text-blue-500" />
                <h3 className="text-lg font-bold">Education</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  B.Tech (IT)
                </p>
                <p className="text-xs text-muted-foreground">
                  IMS Engineering College, Ghaziabad
                </p>
              </div>

              {/* Resume Card */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-colors hover:bg-muted/50">
                <FileDown className="mb-3 h-8 w-8 text-purple-500" />
                <h3 className="text-lg font-bold">Resume</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  
                </p>
                <a 
                  href="/resume.pdf" 
                  download
                  className="mt-3 rounded-full bg-foreground px-6 py-2 text-xs font-bold text-background transition-transform hover:scale-105"
                >
                  Download 
                </a>
              </div>
            </div>

            {/* 2. Bio Text */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a B.Tech student in my 5th semester with a deep focus on <span className="font-semibold text-foreground">MERN stack development and Data Structures & Algorithms in Java.</span> I love creating intuitive, scalable applications. My journey in tech is driven by a desire to build solutions that actually solve problems.
              </p>
              <p>
               When I'm not debugging, I'm exploring the world of <span className="font-semibold text-foreground">3D/VFX or out for a run</span>. I am always looking for the next challenging problem to solve.
              </p>
              <p>
                I am constantly learning and aiming to contribute to high-impact engineering teams. I bring the same level of dedication and creativity to my hobbies as I do to my code.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

// 1. Project Data 
const projects = [
  {
    title: "MockMate - AI Interviewer",
    description: "An AI-powered mock interview platform that analyzes resumes and conducts real-time voice interviews using the Gemini API.",
    tags: ["Next.js", "Gemini AI", "Tailwind", "Clerk Auth"],
    links: {
      demo: "https://mockmate-demo.vercel.app", 
      repo: "https://github.com/YOUR_USERNAME/mockmate", 
    },
    image: "/project-mockmate.png", 
  },
  {
    title: "Real-Time Whiteboard",
    description: "A collaborative drawing tool allowing multiple users to sketch on the same canvas simultaneously with low latency.",
    tags: ["React", "Socket.io", "Node.js", "Canvas API"],
    links: {
      demo: "https://collaborative-whiteboard-y89a.vercel.app/",
      repo: "https://github.com/Jat-droid/collaborative-whiteboard",
    },
    image: "/project-whiteboard.png",
  },
  {
    title: "FaceBeam",
    description: "An intelligent system designed to automate student attendance using real-time facial recognition, synchronized with the official class timetable.",
    tags: ["Python", 
    "Computer Vision", 
    "Flask","Full Stack"],
    links: {
      demo: "https://social-demo.vercel.app",
      repo: "https://github.com/Jat-droid/FaceBeam",
    },
    image: "/project-facebeam.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
           
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Recent <span className="text-blue-500">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl"
            >
              
              {/* Project Image Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
                  <Link
                    href={project.links.repo}
                    target="_blank"
                    className="rounded-full bg-background p-3 text-foreground shadow-lg transition-transform hover:scale-110 hover:text-blue-500"
                    title="View Code"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    className="rounded-full bg-blue-600 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
                    title="Live Demo"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight">{project.title}</h3>
                <p className="mb-6 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="https://github.com/Jat-droid"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" /> View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};
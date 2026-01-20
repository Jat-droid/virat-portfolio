"use client";

import React from "react";
import { motion } from "framer-motion";

import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiFramer,
  SiGit, SiDocker, SiPython, SiLeetcode
} from "react-icons/si";


import { FaDatabase, FaJava } from "react-icons/fa";

const skillsData = [
  {
    name: "Java (DSA)",
    level: "Intermediate",
    color: "#E76F00", 
    icon: <FaJava />, 
  },
  {
    name: "HTML5",
    level: "Experienced",
    color: "#E34F26",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    level: "Experienced",
    color: "#1572B6",
    icon: <SiCss3 />,
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    color: "#F7DF1E",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    color: "#3178C6",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    level: "Intermediate",
    color: "#61DAFB",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    level: "Intermediate",
    color: "#000000", 
    icon: <SiNextdotjs className="dark:text-white" />, 
  },
  {
    name: "Node.js",
    level: "Intermediate",
    color: "#339933",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    level: "Intermediate",
    color: "#000000",
    icon: <SiExpress className="dark:text-white" />,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    color: "#47A248",
    icon: <SiMongodb />,
  },
  {
    name: "SQL",
    level: "Intermediate",
    color: "#4169E1",
    icon: <FaDatabase />,
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    color: "#06B6D4",
    icon: <SiTailwindcss />,
  },
  {
    name: "Framer Motion",
    level: "Beginner",
    color: "#0055FF",
    icon: <SiFramer />,
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    color: "#F05032",
    icon: <SiGit />,
  },
  {
    name: "Problem Solving",
    level: "Daily",
    color: "#FFA116",
    icon: <SiLeetcode />,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
           <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            My Toolbox
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div 
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/50 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              
              <h3 className="mb-2 text-lg font-bold tracking-tight">{skill.name}</h3>
              
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
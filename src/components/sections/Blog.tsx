"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "My 50-Day DSA Roadmap: From Zero to LeetCode Medium",
    excerpt: "A structured approach to mastering Data Structures and Algorithms using the NeetCode 250 roadmap. How I balanced Java basics with daily problem solving.",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    tags: ["DSA", "Career", "Java"],
    link: "https://my50-daydsaroadmap.hashnode.dev/my-50-day-dsa-roadmap-from-zero-to-leetcode-medium", 
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
  },
  {
    title: "Building Scalable Real-Time Apps with Socket.io",
    excerpt: "Lessons learned while building a collaborative whiteboard. Managing WebSocket connections, broadcasting events, and handling latency in React.",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    tags: ["Web Dev", "Socket.io", "React"],
    link: "https://my50-daydsaroadmap.hashnode.dev/building-scalable-real-time-apps-with-socketio?showSharer=true",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4 md:px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-purple-500 uppercase tracking-widest">
            <BookOpen className="h-4 w-4" /> Technical Writing
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Thoughts & <span className="text-blue-500">Insights</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            I don&apos;t just write code; I document the journey. Here are some of my latest articles on engineering, learning, and system design.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              {/* Image Section */}
              <div 
                className="h-48 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              
              {/* Content Section */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight group-hover:text-blue-500 transition-colors">
                  <Link href={post.link} target="_blank">
                    {post.title}
                  </Link>
                </h3>

                <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto border-t border-border pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <Link 
                    href={post.link} 
                    target="_blank"
                    className="flex items-center gap-1 font-medium text-foreground hover:text-blue-500 transition-colors"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
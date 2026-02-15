"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Flame, Zap } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Link from "next/link";

export const CodeStats = () => {
 
  const stats = {
    leetcode: {
      total: 71,
      easy: 29,
      medium: 37, 
      hard: 5,
    },
    neetcode: {
      current: 75,
      total: 250,
    }
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* LEFT COLUMN: Text & Context */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-orange-500 font-medium mb-4">
                <Flame className="h-5 w-5" />
                <span>Coding Consistency</span>
              </div>
              <h2 className="text-4xl font-bold md:text-5xl mb-6">
                Mastering <span className="text-blue-500">Data Structures</span> & Algorithms
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I believe in consistent problem-solving. My primary focus is on 
                <span className="text-foreground font-semibold"> Java</span> for optimizing time & space complexity. 
                I actively follow the <span className="text-foreground font-semibold">NeetCode 250</span> roadmap to build a solid foundation.
              </p>

              {/* Profiles Row */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://leetcode.com/u/viratsirohii/" 
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg bg-[#282828] px-5 py-3 font-medium text-white transition-transform hover:scale-105"
                >
                  <SiLeetcode className="text-[#FFA116]" /> LeetCode
                </Link>
                <Link 
                  href="https://www.geeksforgeeks.org/profile/viratsiyvwz" 
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg bg-[#2F8D46]/10 px-5 py-3 font-medium text-[#2F8D46] border border-[#2F8D46]/20 transition-transform hover:scale-105"
                >
                  <SiGeeksforgeeks /> GFG
                </Link>
                <Link 
                  href="https://www.hackerrank.com/profile/viratsirohi81" 
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg bg-[#2EC866]/10 px-5 py-3 font-medium text-[#2EC866] border border-[#2EC866]/20 transition-transform hover:scale-105"
                >
                  <SiHackerrank /> HackerRank
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The "Live" Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 opacity-20 blur-2xl" />
            
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-2xl">
              
              {/* Header of Card */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <SiLeetcode className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">LeetCode Stats</h3>
                    <p className="text-xs text-muted-foreground">Updated: Weekly</p>
                  </div>
                </div>
                {/* Java Badge */}
                <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-500">
                  <FaJava /> Java
                </div>
              </div>

              {/* Circle Graph & Total */}
              <div className="flex items-center gap-8 mb-8">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-muted">
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin-slow" />
                  <div className="text-center">
                    <span className="block text-3xl font-bold">{stats.leetcode.total}</span>
                    <span className="text-xs text-muted-foreground">TOTAL</span>
                  </div>
                </div>
                
                {/* Breakdown */}
                <div className="flex-1 space-y-3">
                  {/* Easy */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-teal-400">Easy</span>
                      <span className="text-muted-foreground">{stats.leetcode.easy}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "35%" }}
                        transition={{ duration: 1 }}
                        className="h-full bg-teal-400" 
                      />
                    </div>
                  </div>
                  {/* Medium */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-yellow-400">Medium</span>
                      <span className="text-muted-foreground">{stats.leetcode.medium}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "35%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-yellow-400" 
                      />
                    </div>
                  </div>
                  {/* Hard */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-red-400">Hard</span>
                      <span className="text-muted-foreground">{stats.leetcode.hard}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "10%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-red-400" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* NeetCode Progress */}
              <div className="rounded-xl bg-secondary/50 p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Trophy className="h-4 w-4 text-purple-500" /> NeetCode 250
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stats.neetcode.current}/{stats.neetcode.total}
                  </span>
                </div>
                <div className="h-3 w-full rounded-full bg-background overflow-hidden">
                  <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${(stats.neetcode.current / stats.neetcode.total) * 100}%` }}
                     transition={{ duration: 1.5 }}
                     className="h-full bg-gradient-to-r from-purple-500 to-pink-500" 
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, ArrowRight } from "lucide-react";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    
    const serviceID = "service_heztwck";
    const templateID = "template_rdvk038";
    const publicKey = "UP09dQjuLUDXWvmQX";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSuccessMsg("Message sent successfully! I'll get back to you soon.");
          setIsSubmitting(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setErrorMsg("Failed to send message. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* LEFT COLUMN: Contact Info */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-blue-500 uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">
              Let's <span className="text-blue-500">Connect</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              I'm currently looking for **SDE Internships** and full-stack developer roles.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="mt-8 space-y-6">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-blue-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">Ghaziabad, Uttar Pradesh (Open to Remote)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-blue-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <Link href="mailto:viratsirohi81@gmail.com" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    viratsirohi81@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              <SocialBtn href="https://github.com/Jat-droid" icon={<SiGithub />} />
              <SocialBtn href="https://www.linkedin.com/in/viratsirohii/" icon={<SiLinkedin />} />
              <SocialBtn href="https://leetcode.com/u/viratsirohii/" icon={<SiLeetcode />} />
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  placeholder="Hi Virat, I'd like to discuss a project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {successMsg && (
                <p className="text-sm text-green-500 font-medium text-center bg-green-500/10 p-2 rounded">
                  {successMsg}
                </p>
              )}
              {errorMsg && (
                <p className="text-sm text-red-500 font-medium text-center bg-red-500/10 p-2 rounded">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper Component for Social Buttons
const SocialBtn = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-blue-500 hover:text-blue-500"
  >
    {icon}
  </Link>
);
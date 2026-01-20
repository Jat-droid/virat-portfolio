import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About"; 
import { Skills } from "@/components/sections/Skills";
import { CodeStats } from "@/components/sections/CodeStats";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About /> 
        <Skills />
        <CodeStats />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
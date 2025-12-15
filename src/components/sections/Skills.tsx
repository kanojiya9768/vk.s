// src/components/Skills.tsx
import React from "react";
import { Cpu, Code2 } from "lucide-react";
import { skillCategories } from "../../../lib/constants";
import RevealOnScroll from "../ui/RevealOnScroll";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-[5%] relative">
      <div className="max-w-[1400px] mx-auto">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
                <Cpu className="text-primary" size={40} />
                Tech Stack
              </h2>
              <p className="text-text-dim text-lg max-w-[600px]">
                My weapons of choice for conquering the web.
              </p>
            </div>
            <div className="h-px bg-white/10 flex-grow ml-8 hidden md:block"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="glass-card p-8 rounded-xl h-full hover:border-primary/50 transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <Code2 className="text-white/20 group-hover:text-primary/50 transition-colors" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-sm text-text-dim font-mono hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

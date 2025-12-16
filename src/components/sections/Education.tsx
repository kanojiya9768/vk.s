// src/components/Experience.tsx
import React from "react";
import { Terminal, MapPin } from "lucide-react";
import { education } from "../../../lib/constants";
import RevealOnScroll from "../ui/RevealOnScroll";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-[5%] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Education History</h2>
            <p className="text-text-dim font-mono text-sm">
              &gt; git log --oneline --decorate
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="terminal-window rounded-xl overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-text-dim flex items-center gap-2">
                <Terminal size={14} />
                <span>vishal@portfolio:~/education</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 space-y-8 bg-dark/95">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l border-white/10 pb-8 last:pb-0 last:border-0"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[9.5px] top-0 w-2.5 h-2.5 rounded-full bg-primary box-content border-4 border-dark"></div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <span className="text-secondary font-bold text-base">
                      {edu.duration}
                    </span>
                    <span className="hidden sm:inline text-text-dim">--</span>
                    <span className="text-primary font-bold text-lg">
                      {edu.degree}
                    </span>
                  </div>

                  <div className="ml-0 sm:ml-4 text-text/80 mb-1">
                    <span className="text-accent">@</span> {edu.institution}
                  </div>

                  <div className="ml-0 sm:ml-4 text-text-dim text-xs flex items-center gap-1">
                    <MapPin size={12} /> {edu.location}
                  </div>
                </div>
              ))}

              <div className="pl-6 border-l border-dashed border-white/10 pt-2">
                <div className="text-green-500 animate-pulse">
                  <span className="mr-2">➜</span>
                  <span className="text-white">Future</span>
                  <span className="text-text-dim ml-2">
                    Loading next challenge...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

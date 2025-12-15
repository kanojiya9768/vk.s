// src/components/Hero.tsx
import React from "react";
import { ChevronRight } from "lucide-react";
import { bio } from "../../../lib/constants";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[5%] pt-20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </div>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Digital Realities
            </span>
          </h1>

          <div
            className="flex items-center gap-2 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-primary font-mono text-xl">&gt;</span>
            <p className="text-xl md:text-2xl text-text/80 font-mono overflow-hidden whitespace-nowrap border-r-4 border-primary pr-1 animate-typing animate-blink w-fit">
              Full Stack Developer
            </p>
          </div>

          <p
            className="text-lg text-text-dim max-w-[540px] mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {bio.intro}
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-3 bg-primary text-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                View Projects <ChevronRight size={18} />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-transparent border border-white/20 text-text font-bold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div
          className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Abstract decorative tech circle */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-8 rounded-2xl w-3/4 animate-float">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-text-dim ml-2">
                    developer.tsx
                  </div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div>
                    <span className="text-secondary">const</span>{" "}
                    <span className="text-accent">coder</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-primary">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">name:</span>{" "}
                    <span className="text-green-400">'Vishal'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-white">skills:</span>{" "}
                    <span className="text-primary">
                      ['React', 'Node', 'Next']
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-white">hardWorker:</span>{" "}
                    <span className="text-secondary">true</span>
                  </div>
                  <div>
                    <span className="text-primary">{"}"}</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

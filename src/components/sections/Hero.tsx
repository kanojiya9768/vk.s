// src/components/Hero.tsx
import React from "react";
import { ChevronRight, Terminal } from "lucide-react";
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
      {/* Global scanlines + noise */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-scanlines"></div>
        <div className="absolute inset-0 bg-noise opacity-30"></div>
      </div>

      {/* Terminal top bar */}
      <div className="absolute top-0 left-0 w-full pt-8 px-[5%]">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4 text-green-400 font-mono text-sm">
          <Terminal size={20} className="animate-pulse" />
          <span className="tracking-wider">root@portfolio:~</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>

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
              <span className="text-green-400 font-mono text-sm tracking-wider">
                ONLINE // AVAILABLE FOR CHALLENGES
              </span>
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
            className="flex items-center gap-3 mb-8  text-xl md:text-2xl animate-fade-in-up w-max"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-green-500 font-mono">$</span>
            <p className="text-green-300 font-mono overflow-hidden border-r-4 border-green-400 pr-2 animate-typing whitespace-nowrap w-max">
              Full Stack Developer
              <span className="animate-pulse text-green-400 w-fit">_</span>
            </p>
          </div>

          <p
            className="text-lg text-text-dim max-w-[540px] mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {bio.intro}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-green-500 border border-green-500 rounded-lg font-mono font-bold text-black hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>EXECUTE PROJECTS</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-green-800 rounded-lg font-mono font-bold text-green-400 hover:border-green-500 hover:bg-green-900/30 hover:text-green-300 transition-all duration-300"
            >
              INITIATE CONTACT
            </button>
          </div>
        </div>

        {/* Right: Hacker Avatar Terminal Window */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px]">
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border border-green-900/30 rounded-full"></div>
            </div>
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite_reverse]">
              <div className="absolute bottom-0 right-0 w-48 h-48 border border-green-800/20 rounded-full"></div>
            </div>

            {/* Main Terminal Window */}
            <div className="border border-green-900 rounded-xl overflow-hidden bg-black/80 backdrop-blur-md shadow-2xl shadow-green-500/30">
              {/* Window Header */}
              <div className="bg-gradient-to-r from-green-950 to-black px-6 py-4 flex items-center justify-between border-b border-green-900">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-green-600 font-mono text-sm tracking-wider">
                  software_engineer.tsx
                </span>
              </div>

              {/* Code Content */}
              <div className="p-8 font-mono text-sm leading-relaxed">
                <div className="text-green-700">// System initialized</div>
                <div className="mt-4">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-400">{"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-green-300">identity:</span>{" "}
                  <span className="text-green-400">'Vishal Kanojiya'</span>,
                </div>
                <div className="pl-6">
                  <span className="text-green-300">role:</span>{" "}
                  <span className="text-green-400">
                    'Full Stack Developer (Software Engineer)'
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-green-300">stack:</span>{" "}
                  <span className="text-yellow-400">
                    ['Javascript','Typescript','React',
                    'Next.js','Node.js','Express js' 'Mongo
                    DB','MySql','Git','Github']
                  </span>
                  ,
                </div>
                <div className="pl-6">
                  <span className="text-green-300">status:</span>{" "}
                  <span className="text-green-400 animate-pulse">ONLINE</span>,
                </div>
                <div className="pl-6">
                  <span className="text-green-300">mission:</span>{" "}
                  <span className="text-green-400">'Build the future'</span>
                </div>
                <div>
                  <span className="text-green-400">{"}"}</span>;
                </div>

                <div className="mt-8 text-green-500 animate-pulse">
                  $ awaiting_command_
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

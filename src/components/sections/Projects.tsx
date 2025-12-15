// src/components/Projects.tsx
import React, { useState } from "react";
import { projects } from "../../../lib/constants";
import { Github, ExternalLink } from "lucide-react";
import RevealOnScroll from "../ui/RevealOnScroll";

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    return activeCategory === "All" || project.category === activeCategory;
  });

  const categories = ["All", "Full-Stack", "Education", "Corporate"];

  return (
    <section id="projects" className="py-24 px-[5%] bg-dark-light relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-dark"
                      : "bg-white/5 text-text-dim hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 50}>
              <div className="group relative bg-dark border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                {/* Card Image Area */}
                <div className="relative h-52 overflow-hidden bg-dark-card border-b border-white/5 group-hover:border-primary/20 transition-colors">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}

                  {/* Overlay content appearing on hover */}
                  <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary text-dark rounded-full hover:scale-110 transition-transform"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-dark/90 backdrop-blur border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        project.status === "Live"
                          ? "bg-green-500/10 border-green-500/20 text-green-400"
                          : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === "Live"
                            ? "bg-green-400 animate-pulse"
                            : "bg-yellow-400"
                        }`}
                      ></span>
                      {project.status || "Live"}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>

                  <p className="text-text-dim text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="text-xs font-mono text-text-dim mb-2">
                      Tech Stack:
                    </div>
                    <div className="font-mono text-xs text-accent">
                      [
                      {project.techStack
                        .slice(0, 3)
                        .map((t) => `'${t}'`)
                        .join(", ")}
                      {project.techStack.length > 3 ? ", ..." : ""}]
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

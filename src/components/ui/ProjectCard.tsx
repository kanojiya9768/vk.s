/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  image?: string;
  liveLink?: string;
  githubLink?: string;
  status?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
}) => {
  return (
    <div className="group relative bg-dark border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
      <div className="relative h-52 overflow-hidden bg-dark-card border-b border-white/5 group-hover:border-primary/20 transition-colors">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-10"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

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

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-dark/90 backdrop-blur border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-white">
            {project.category}
          </span>
        </div>
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

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
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
  );
};

export default ProjectCard;

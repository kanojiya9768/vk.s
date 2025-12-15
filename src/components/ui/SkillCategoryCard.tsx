/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Code2 } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillCategoryCard: React.FC<{
  category: SkillCategory;
  index: number;
}> = ({ category }) => {
  return (
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
  );
};

export default SkillCategoryCard;

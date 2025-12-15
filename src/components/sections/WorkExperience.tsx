import { Briefcase, MapPin } from "lucide-react";
import { workExperiences } from "../../../lib/constants"; // Adjust path if needed
import RevealOnScroll from "../ui/RevealOnScroll";

const WorkExperience = () => {
  return (
    <RevealOnScroll>
      <section id="work" className="py-24 px-[5%] relative bg-dark-light">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="text-primary" size={40} />
              Work Experience
            </h2>
            <p className="text-text-dim text-lg">
              My professional journey in software development.
            </p>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-white/5 md:before:mx-auto md:before:left-0 md:before:right-0">
            {workExperiences.map((job, index) => (
              <RevealOnScroll key={index}>
                {" "}
                <div className="relative flex flex-col md:flex-row justify-between md:items-center group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 md:left-1/2 md:-ml-3 md:top-1/2 md:-mt-3 w-6 h-6 rounded-full border-4 border-dark bg-primary z-10 shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>

                  {/* Card */}
                  <div
                    className={`md:w-[45%] mb-8 md:mb-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12 md:text-left"
                    } pl-12 md:pl-0`}
                  >
                    <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                      <div
                        className={`flex flex-col gap-1 mb-2 ${
                          index % 2 === 0 ? "md:items-end" : "md:items-start"
                        }`}
                      >
                        <h3 className="text-xl font-bold text-white">
                          {job.role}
                        </h3>
                        <div className="text-primary font-medium">
                          {job.company}
                        </div>
                      </div>
                      <div
                        className={`flex flex-col gap-2 mb-4 text-sm text-text-dim ${
                          index % 2 === 0 ? "md:items-end" : "md:items-start"
                        }`}
                      >
                        <span className="font-mono bg-white/5 px-2 py-1 rounded">
                          {job.duration}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin size={12} /> {job.location}
                        </div>
                      </div>
                      <p className="text-text/80 text-sm mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default WorkExperience;

// src/components/Footer.tsx
import React from "react";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 bg-black relative overflow-hidden border-t border-green-900/30">
      {/* Scanlines + noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-scanlines"></div>
        <div className="absolute inset-0 bg-noise opacity-30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        {/* Terminal prompt line */}
        <div className="flex items-center justify-center gap-4 text-green-400 font-mono text-sm mb-6 opacity-80">
          <Terminal size={18} className="animate-pulse" />
          <span className="tracking-wider">root@portfolio:~/</span>
          <span className="animate-pulse">_</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-green-400 font-mono text-base md:text-lg tracking-wider">
            $ echo "Built with{" "}
            <span className="text-green-300 font-bold">React</span> +{" "}
            <span className="text-cyan-400 font-bold">Next.js</span> +{" "}
            <span className="text-green-500 font-bold">Tailwind</span>
          </p>

          <p className="text-green-600 font-mono text-sm md:text-base mt-4 opacity-90">
            &gt; Operator:{" "}
            <span className="text-green-300">Vishal Kanojiya</span>
          </p>

          <p className="text-green-700 font-mono text-xs md:text-sm mt-6 opacity-60">
            © {new Date().getFullYear()} // All systems operational. Access
            restricted.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// src/components/Footer.tsx
export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-dark border-t border-white/5">
      <p className="text-text-dim text-sm font-mono">
        Built with <span className="text-primary">React</span> &{" "}
        <span className="text-accent">Tailwind</span> by Vishal Kanojiya
      </p>
      <div className="text-xs text-text-dim/50 mt-2">
        © 2025 All rights reserved.
      </div>
    </footer>
  );
};

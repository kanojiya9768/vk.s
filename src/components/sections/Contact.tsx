// src/components/Contact.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Terminal } from "lucide-react";
import { contactInfo, socialLinks } from "../../../lib/constants";
import RevealOnScroll from "../ui/RevealOnScroll";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(2, "Name too short").max(50),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kanojiya9768@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: "New Contact Form Message",
            _captcha: false,
            _template: "table",
          }),
        }
      );

      if (!response.ok) throw new Error("Submit failed");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-[5%] bg-black relative overflow-hidden border-t border-green-900/30"
    >
      {/* Scanlines & noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-scanlines"></div>
        <div className="absolute inset-0 bg-noise opacity-30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Terminal header */}
        <div className="mb-8 flex items-center gap-4  font-mono text-sm">
          <Terminal size={20} className="animate-pulse" />
          <span className="tracking-wider">root@portfolio:~/contact</span>
          <span className="animate-pulse">_</span>
        </div>

        <RevealOnScroll>
          <h2
            className="text-4xl md:text-5xl font-bold font-mono mb-16 text-center tracking-wider glitch"
            data-text="> INITIALIZE CONNECTION"
          >
            &gt; INITIALIZE CONNECTION
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Hacker Info Panel */}
          <RevealOnScroll delay={100}>
            <div className="space-y-8">
              <p className="text-green-300 font-mono text-lg leading-relaxed opacity-90">
                // Status: ONLINE
                <br />
                // Available for freelance missions and full-time contracts.
                <br />
                // Transmit coordinates to establish secure channel.
              </p>

              <div className="space-y-6 font-mono">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 border border-green-800 rounded-lg flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-900/20 transition-all">
                      <item.icon size={22} className="" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider">
                        {item.label}
                      </div>
                      <a
                        href={item.link || "#"}
                        className="text-green-100 text-lg hover:text-green-100 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-green-800 rounded-lg text-green-400 hover:border-green-500 hover:bg-green-900/30 hover:text-green-300 hover:-translate-y-1 transition-all"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Terminal Code Editor Form */}
          <RevealOnScroll delay={200}>
            <div className="relative">
              {/* Terminal Window */}
              <div className="border border-green-900 rounded-xl overflow-hidden bg-black/80 backdrop-blur-md shadow-2xl shadow-green-500/20">
                {/* Window Header */}
                <div className="bg-gradient-to-r from-green-950 to-black px-5 py-3 flex items-center justify-between border-b border-green-900">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-green-600 font-mono text-sm tracking-wider">
                    contact.tsx
                  </span>
                  <div className="w-12" /> {/* spacer */}
                </div>

                {/* Code Editor Body */}
                <div className="p-6 font-mono text-sm">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <span className="text-green-700 text-xs">
                        // Your identifier
                      </span>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-cyan-400">name</span>
                        <span className="text-white">=</span>
                        <span className="text-green-400">"</span>
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="Anonymous"
                          disabled={isSubmitting || isSubmitSuccessful}
                          className="bg-transparent border-b border-green-800 focus:border-green-400 outline-none text-green-300 flex-1 px-2 py-1 transition-colors"
                        />
                        <span className="text-green-400">"; </span>
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          → {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <span className="text-green-700 text-xs">
                        // Transmission address
                      </span>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-cyan-400">email</span>
                        <span className="text-white">=</span>
                        <span className="text-green-400">"</span>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="user@domain.net"
                          disabled={isSubmitting || isSubmitSuccessful}
                          className="bg-transparent border-b border-green-800 focus:border-green-400 outline-none text-green-300 flex-1 px-2 py-1 transition-colors"
                        />
                        <span className="text-green-400">"; </span>
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          → {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <span className="text-green-700 text-xs">// Payload</span>
                      <div className="mt-2 flex items-start gap-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-cyan-400">payload</span>
                        <span className="text-white">=</span>
                        <span className="text-green-400">`</span>
                        <textarea
                          {...register("message")}
                          rows={5}
                          placeholder="Transmit message..."
                          disabled={isSubmitting || isSubmitSuccessful}
                          className="bg-transparent border border-green-800 rounded focus:border-green-400 outline-none text-green-300 flex-1 px-3 py-2 resize-none transition-colors"
                        />
                        <span className="text-green-400">`;</span>
                      </div>
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">
                          → {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting || isSubmitSuccessful}
                        className={`
                          px-8 py-3 rounded font-mono font-bold flex items-center gap-3 transition-all
                          ${
                            isSubmitSuccessful
                              ? "bg-green-600/80 text-green-100 border border-green-500"
                              : "bg-green-500/80 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 text-black border border-green-400"
                          }
                          ${isSubmitting ? "opacity-60 cursor-wait" : ""}
                        `}
                      >
                        {isSubmitting ? (
                          <>Transmitting...</>
                        ) : isSubmitSuccessful ? (
                          <>
                            <CheckCircle2 size={20} /> Transmitted
                          </>
                        ) : (
                          <>
                            <Send size={20} /> Transmit
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {isSubmitSuccessful && (
                    <div className="mt-6 text-green-400 font-mono text-sm animate-pulse">
                      ✓ Connection established. Awaiting response...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom terminal line */}
        <div className="mt-20 text-center text-green-600 font-mono text-sm opacity-60">
          <span>&gt; System online. Ready for incoming transmissions.</span>
          <span className="animate-pulse ml-2">_</span>
        </div>
      </div>
    </section>
  );
};

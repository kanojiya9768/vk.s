// src/components/Contact.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { contactInfo, socialLinks } from "../../../lib/constants";
import RevealOnScroll from "../ui/RevealOnScroll";

// Zod schema for validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
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
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
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

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("FormSubmit response:", result);

      reset(); // clear form on success
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-[5%] bg-dark-light relative border-t border-white/5"
    >
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Initialize Connection
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <RevealOnScroll delay={100}>
            <div>
              <p className="text-xl text-text-dim mb-8">
                Currently available for freelance work and full-time positions.
                Drop a message to discuss your next project.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-text-dim uppercase">
                        {item.label}
                      </div>
                      <a
                        href={item.link || "#"}
                        className="text-lg font-medium text-white hover:text-accent transition-colors"
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
                    className="p-3 bg-white/5 rounded-lg text-white hover:bg-primary hover:text-dark transition-all hover:-translate-y-1"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Code Editor Form */}
          <RevealOnScroll delay={200}>
            <div className="terminal-window rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                <div className="text-xs text-text-dim font-mono">
                  contact.tsx
                </div>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
              </div>

              <div className="bg-[#0c0c0c] p-6 font-mono text-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <div className="text-text-dim mb-1 text-xs">
                      // Enter your name
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary mr-2">const</span>
                      <span className="text-accent mr-2">name</span>
                      <span className="text-white mr-2">=</span>
                      <span className="text-green-400 mr-1">"</span>
                      <input
                        {...register("name")}
                        type="text"
                        className="code-input flex-1"
                        placeholder="John Doe"
                        disabled={isSubmitting || isSubmitSuccessful}
                      />
                      <span className="text-green-400">";</span>
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 pl-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="text-text-dim mb-1 text-xs">
                      // Enter your email
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary mr-2">const</span>
                      <span className="text-accent mr-2">email</span>
                      <span className="text-white mr-2">=</span>
                      <span className="text-green-400 mr-1">"</span>
                      <input
                        {...register("email")}
                        type="email"
                        className="code-input flex-1"
                        placeholder="john@example.com"
                        disabled={isSubmitting || isSubmitSuccessful}
                      />
                      <span className="text-green-400">";</span>
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 pl-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="text-text-dim mb-1 text-xs">
                      // Your message
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary mr-2 whitespace-nowrap">
                        const
                      </span>
                      <span className="text-accent mr-2">msg</span>
                      <span className="text-white mr-2">=</span>
                      <span className="text-green-400 mr-1">`</span>
                      <textarea
                        {...register("message")}
                        rows={3}
                        className="code-input flex-1 resize-none"
                        placeholder="Hello, I'd like to hire you..."
                        disabled={isSubmitting || isSubmitSuccessful}
                      />
                      <span className="text-green-400">`;</span>
                    </div>
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 pl-2">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitSuccessful}
                      className={`
                        px-6 py-2 rounded font-sans font-bold text-dark transition-all flex items-center gap-2
                        ${
                          isSubmitSuccessful
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-primary hover:bg-primary/90 hover:scale-105"
                        }
                        ${isSubmitting ? "opacity-70 cursor-wait" : ""}
                      `}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : isSubmitSuccessful ? (
                        <>
                          Sent <CheckCircle2 size={18} />
                        </>
                      ) : (
                        <>
                          Send <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Github, Linkedin, Twitter, Mail,
  Sparkles, Send, MapPin, Clock, Heart, MessageCircle,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",    handle: "@ihoneymoon",           href: "https://github.com",
    icon: Github,   color: "from-gray-200 to-gray-300",  textColor: "text-gray-700",
    glow: "rgba(100,100,100,.3)", desc: "See my code 💻",
  },
  {
    name: "LinkedIn",  handle: "Pinky Dev",            href: "https://linkedin.com",
    icon: Linkedin, color: "from-blue-200 to-blue-300",  textColor: "text-blue-700",
    glow: "rgba(59,130,246,.35)", desc: "Connect with me 🤝",
  },
  {
    name: "Twitter / X", handle: "@ihoneymoon_",         href: "https://twitter.com",
    icon: Twitter,  color: "from-sky-200 to-sky-300",    textColor: "text-sky-700",
    glow: "rgba(14,165,233,.35)", desc: "My tech thoughts 💭",
  },
  {
    name: "Email",     handle: "hello@ihoneymoon.com",   href: "mailto:hello@ihoneymoon.com",
    icon: Mail,     color: "from-pink-200 to-rose-300",  textColor: "text-pink-700",
    glow: "rgba(244,114,182,.35)", desc: "Send me a message 📩",
  },
];

const INPUT_CLASS =
  "w-full px-4 py-3 glass-card rounded-2xl border border-pink-100 text-gray-700 text-sm font-medium placeholder-gray-300 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all";

function ContactForm() {
  const [form, setForm]         = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center py-10 gap-4"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl"
        >
          🎉
        </motion.div>
        <h3 className="text-xl sm:text-2xl font-black text-gray-800">Message sent! 🌸</h3>
        <p className="text-gray-500 font-medium text-sm sm:text-base">
          I&apos;ll get back to you within 24 hours. Thank you!
        </p>
        <motion.button
          onClick={() => { setSubmitted(false); setForm({ name:"", email:"", subject:"", message:"" }); }}
          className="btn-outline-kawaii text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Send another ✉️
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-600">Name 👤</label>
          <input
            type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your cute name"
            className={INPUT_CLASS}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-gray-600">Email 📧</label>
          <input
            type="email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-bold text-gray-600">Subject 💌</label>
        <input
          type="text" required value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="What's it about?"
          className={INPUT_CLASS}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs sm:text-sm font-bold text-gray-600">Message ✍️</label>
        <textarea
          required rows={5} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project, idea, or just say hi! 🌸"
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        className="w-full btn-kawaii py-3 sm:py-3.5 gap-2 disabled:opacity-70"
        whileHover={!loading ? { scale: 1.02 } : {}}
        whileTap={!loading ? { scale: 0.98 } : {}}
      >
        {loading ? (
          <>
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              ✨
            </motion.span>
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message 🌸
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="contact" ref={ref} className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background — capped size so they don't create horizontal scroll */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -bottom-16 -right-16 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-pink-200/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-16 -left-16 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-purple-200/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-pink-200/60 shadow-kawaii mb-4">
            <MessageCircle className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-bold text-pink-500">Get in Touch</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Let&apos;s <span className="text-gradient-kawaii">work together</span> 💌
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            Have a project idea? Want to collaborate? Or just want to say hi? I&apos;d love to hear from you! 🌸
          </p>
        </motion.div>

        {/*
          Layout:
          Mobile:  stacked — social info on top, form below
          lg:      5-col grid — 2 cols info, 3 cols form
        */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left: availability + socials */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="gradient-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-kawaii"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="font-black text-gray-800 text-sm sm:text-base">Open to Work!</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-500 font-semibold">Available for hire</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0" />
                  Response within 24 hours
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                  Remote-friendly worldwide 🌍
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 flex-shrink-0" />
                  Freelance & Full-time welcome
                </div>
              </div>
            </motion.div>

            {/* Social cards */}
            <div className="space-y-2 sm:space-y-3">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ x: 5, boxShadow: `0 8px 24px ${link.glow}` }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card rounded-xl sm:rounded-2xl border border-white/60 shadow-sm transition-all duration-200 group cursor-pointer"
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-black text-xs sm:text-sm ${link.textColor} truncate`}>{link.name}</div>
                    <div className="text-xs text-gray-400 font-medium truncate">{link.handle}</div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block flex-shrink-0">
                    {link.desc}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 gradient-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-kawaii"
          >
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <Mail className="w-5 h-5 text-pink-400" />
              <h3 className="font-black text-gray-800 text-base sm:text-lg">Send me a message 💌</h3>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

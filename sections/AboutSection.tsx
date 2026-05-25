"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Sparkles,
  Code2,
  Palette,
  Zap,
  BookOpen,
  Music,
  Coffee,
  Star,
} from "lucide-react";

const FACTS = [
  { icon: Heart,    text: "Passionate about UI/UX",    color: "text-pink-500"   },
  { icon: Code2,    text: "Clean code advocate",       color: "text-purple-500" },
  { icon: Zap,      text: "Performance obsessed",      color: "text-yellow-500" },
  { icon: Palette,  text: "Design-driven developer",   color: "text-blue-500"   },
  { icon: BookOpen, text: "Forever learning",          color: "text-green-500"  },
  { icon: Music,    text: "lo-fi while coding 🎵",     color: "text-orange-400" },
];

const SKILLS_SOFT = [
  { label: "Problem Solving",    value: 92 },
  { label: "UI Engineering",     value: 88 },
  { label: "Team Collaboration", value: 95 },
  { label: "Communication",      value: 85 },
  { label: "Fast Learner",       value: 98 },
];

const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background orbs — capped size so they never overflow on mobile */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pink-200/25 to-purple-200/15 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-lavender-200/15 to-pink-200/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [5, 0, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-pink-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-bold text-pink-500">About Me</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Get to know{" "}
            <span className="text-gradient-kawaii">the developer</span> 🌸
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            A passionate software engineer who loves creating beautiful,
            functional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4 sm:space-y-6"
          >
            {/* Main bio card */}
            <motion.div
              variants={item}
              className="gradient-border p-6 sm:p-8 rounded-3xl shadow-kawaii hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 flex items-center justify-center text-3xl sm:text-4xl shadow-kawaii">
                    🌸
                  </div>
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full border-2 border-white shadow"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-gray-800">Pinky Dev 🌸</h3>
                  <p className="text-pink-500 font-semibold text-sm">Software Engineer</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium">Available for hire</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                <p>
                  Hi! I&apos;m a passionate{" "}
                  <span className="text-pink-500 font-bold">Software Engineer</span>{" "}
                  who loves building beautiful, intuitive applications that make people&apos;s lives easier. 🌸
                </p>
                <p>
                  My journey started with a simple &quot;Hello, World!&quot; and evolved into a deep passion for{" "}
                  <span className="text-purple-500 font-bold">frontend engineering</span>,{" "}
                  <span className="text-blue-500 font-bold">fullstack development</span>, and{" "}
                  <span className="text-pink-500 font-bold">AI-powered apps</span>.
                </p>
                <p>
                  I believe that great software is both functional <em>and</em> beautiful — and I pour
                  my heart into making that happen. ✨
                </p>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5 pt-5 border-t border-pink-100">
                {[
                  { label: "Projects", value: "20+", emoji: "🚀" },
                  { label: "Commits",  value: "1k+", emoji: "💻" },
                  { label: "Coffee",   value: "∞",   emoji: "☕" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50"
                  >
                    <div className="text-base sm:text-lg">{s.emoji}</div>
                    <div className="text-lg sm:text-xl font-black text-gray-800">{s.value}</div>
                    <div className="text-xs text-gray-400 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick facts grid */}
            <motion.div variants={item} className="grid grid-cols-2 gap-2 sm:gap-3">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={i}
                  className="glass-card rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border border-white/60 card-kawaii"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center flex-shrink-0">
                    <fact.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${fact.color}`} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                    {fact.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4 sm:space-y-6"
          >
            {/* Soft skills progress */}
            <motion.div
              variants={item}
              className="glass-card rounded-3xl p-6 sm:p-8 shadow-kawaii border border-white/60"
            >
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <Star className="w-5 h-5 text-pink-400" />
                <h3 className="text-base sm:text-lg font-black text-gray-800">Core Strengths</h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {SKILLS_SOFT.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-600">{skill.label}</span>
                      <span className="text-sm font-black text-pink-500">{skill.value}%</span>
                    </div>
                    <div className="h-2 sm:h-2.5 bg-pink-50 rounded-full overflow-hidden">
                      <motion.div
                        className="progress-kawaii h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.value}%` } : {}}
                        transition={{ duration: 1.2, delay: i * 0.15 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Love tags */}
            <motion.div
              variants={item}
              className="gradient-border p-5 sm:p-6 rounded-3xl shadow-kawaii"
            >
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-black text-gray-800">What I love 💕</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "⚛️ React", "🌙 Dark Mode", "✨ Animations", "🎨 UI Design",
                  "🤖 AI Tools", "📱 Mobile First", "☕ Lo-fi Music", "🌸 Pixel Art",
                  "🚀 Next.js", "💜 TypeScript", "🎯 Clean Code", "📚 Learning",
                ].map((tag, i) => (
                  <motion.span
                    key={i}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 glass-card rounded-full text-xs sm:text-sm font-semibold text-gray-600 border border-pink-100/60"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.04 + 0.5 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Currently building */}
            <motion.div
              variants={item}
              className="glass-card rounded-3xl p-4 sm:p-5 border border-purple-100/60 shadow-glow-purple"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <motion.div
                    className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center flex-shrink-0"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Zap className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="min-w-0">
                    <div className="text-sm font-black text-gray-800">Currently building</div>
                    <div className="text-xs text-gray-400 truncate">AI-powered code assistant 🤖</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-xs text-purple-400 font-bold">Live</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

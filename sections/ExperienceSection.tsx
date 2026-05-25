"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, MapPin, Calendar } from "lucide-react";

const TIMELINE = [
  {
    year: "2022",
    month: "Jan",
    title: "🌱 Started Coding",
    subtitle: "The Beginning",
    company: "Self-taught",
    location: "Home Studio",
    desc: "Fell in love with programming through HTML & CSS. Built my first webpage — a simple pink aesthetic site — and got completely hooked on creating things for the web.",
    color: "from-emerald-300 to-teal-300",
    emoji: "🌱",
    tags: ["HTML", "CSS", "The Beginning"],
  },
  {
    year: "2022",
    month: "Jun",
    title: "⚡ JavaScript Journey",
    subtitle: "First Language",
    company: "Online Courses",
    location: "Remote",
    desc: "Completed JavaScript courses, built small games and DOM projects. Discovered the magic of making web pages interactive and responsive.",
    color: "from-yellow-300 to-amber-300",
    emoji: "⚡",
    tags: ["JavaScript", "DOM", "ES6"],
  },
  {
    year: "2023",
    month: "Jan",
    title: "⚛️ React & Frameworks",
    subtitle: "Component-Driven Dev",
    company: "Project-Based",
    location: "Remote",
    desc: "Deep-dived into React, Next.js, and the modern frontend ecosystem. Built my first real web apps with authentication, databases, and API integrations.",
    color: "from-cyan-300 to-blue-300",
    emoji: "⚛️",
    tags: ["React", "Next.js", "TailwindCSS"],
  },
  {
    year: "2023",
    month: "Jun",
    title: "🚀 Fullstack Journey",
    subtitle: "Backend + Frontend",
    company: "Personal Projects",
    location: "Remote",
    desc: "Started building complete fullstack applications with Node.js, Express, PostgreSQL, and Prisma. Deployed apps to Vercel and Railway.",
    color: "from-purple-300 to-violet-300",
    emoji: "🚀",
    tags: ["Node.js", "PostgreSQL", "Prisma"],
  },
  {
    year: "2024",
    month: "Jan",
    title: "🐙 Open Source",
    subtitle: "Contributing Back",
    company: "GitHub",
    location: "Open Source",
    desc: "Started contributing to open source projects, creating npm packages, and sharing code with the community. Published first npm package with 500+ weekly downloads!",
    color: "from-gray-300 to-slate-400",
    emoji: "🐙",
    tags: ["Open Source", "npm", "Community"],
  },
  {
    year: "2024",
    month: "Jun",
    title: "🤖 AI & LLMs",
    subtitle: "AI Era",
    company: "AI Projects",
    location: "Remote",
    desc: "Embraced the AI revolution — built apps with OpenAI, Anthropic Claude, and LangChain. Developed AI-powered tools for productivity and developer experience.",
    color: "from-fuchsia-300 to-pink-300",
    emoji: "🤖",
    tags: ["OpenAI", "Claude API", "LangChain"],
  },
  {
    year: "2025",
    month: "Now",
    title: "✨ Keep Growing",
    subtitle: "Always Learning",
    company: "Forever Student",
    location: "Everywhere",
    desc: "Continuously expanding skills in system design, performance optimization, and cutting-edge AI applications. Always learning, always building, always growing. 🌸",
    color: "from-pink-300 to-rose-300",
    emoji: "✨",
    tags: ["System Design", "AI Apps", "UI Engineering"],
  },
];

function TimelineItem({
  event,
  index,
  isLast,
}: {
  event: (typeof TIMELINE)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex gap-4 mb-8">
      {/* Left: Date */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="hidden sm:flex flex-col items-end w-20 flex-shrink-0 pt-2"
      >
        <span className="text-xs font-black text-pink-500 uppercase tracking-wider">
          {event.month}
        </span>
        <span className="text-sm font-black text-gray-400">{event.year}</span>
      </motion.div>

      {/* Center: Timeline line & dot */}
      <div className="flex flex-col items-center">
        {/* Animated dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1, type: "spring" }}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl flex-shrink-0 z-10 border-4 border-white shadow-kawaii`}
        >
          {event.emoji}
        </motion.div>

        {/* Line */}
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 mt-1 min-h-8"
            style={{
              background: "linear-gradient(180deg, #FFB3D1, #D8C0FF)",
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          />
        )}
      </div>

      {/* Right: Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
        className="flex-1 pb-2"
        whileHover={{ x: 4 }}
      >
        <div className="gradient-border rounded-2xl p-5 shadow-kawaii card-kawaii">
          {/* Mobile date */}
          <div className="sm:hidden flex items-center gap-1 mb-2">
            <Calendar className="w-3 h-3 text-pink-400" />
            <span className="text-xs font-bold text-pink-400">
              {event.month} {event.year}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-black text-gray-800 text-base leading-tight">
              {event.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-bold text-pink-500">
              {event.subtitle}
            </span>
            <span className="text-gray-300">·</span>
            <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
              <MapPin className="w-3 h-3" />
              {event.location}
            </div>
          </div>

          <p className="text-sm text-gray-500 font-medium leading-relaxed mb-3">
            {event.desc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-50 text-pink-500 border border-pink-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-purple-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-500">
              Experience
            </span>
          </div>
          <h2 className="section-title text-gray-800 mb-4">
            My <span className="text-gradient-kawaii">story so far</span> 📖
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            The milestones that shaped me as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {TIMELINE.map((event, i) => (
            <TimelineItem
              key={i}
              event={event}
              index={i}
              isLast={i === TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

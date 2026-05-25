"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";

const TECH = [
  {
    name: "JavaScript",
    emoji: "⚡",
    desc: "The language of the web",
    level: 90,
    color: "from-yellow-200 to-amber-300",
    glow: "rgba(251, 191, 36, 0.4)",
    border: "border-yellow-200",
  },
  {
    name: "TypeScript",
    emoji: "🔷",
    desc: "Type-safe development",
    level: 85,
    color: "from-blue-200 to-blue-300",
    glow: "rgba(59, 130, 246, 0.4)",
    border: "border-blue-200",
  },
  {
    name: "React",
    emoji: "⚛️",
    desc: "UI component library",
    level: 92,
    color: "from-cyan-200 to-sky-300",
    glow: "rgba(14, 165, 233, 0.4)",
    border: "border-cyan-200",
  },
  {
    name: "Next.js",
    emoji: "▲",
    desc: "Full-stack React framework",
    level: 88,
    color: "from-gray-200 to-slate-300",
    glow: "rgba(100, 116, 139, 0.4)",
    border: "border-gray-200",
  },
  {
    name: "Node.js",
    emoji: "🟢",
    desc: "Server-side JavaScript",
    level: 80,
    color: "from-green-200 to-emerald-300",
    glow: "rgba(16, 185, 129, 0.4)",
    border: "border-green-200",
  },
  {
    name: "TailwindCSS",
    emoji: "🎨",
    desc: "Utility-first CSS framework",
    level: 95,
    color: "from-teal-200 to-cyan-300",
    glow: "rgba(20, 184, 166, 0.4)",
    border: "border-teal-200",
  },
  {
    name: "Python",
    emoji: "🐍",
    desc: "Data & AI scripting",
    level: 75,
    color: "from-blue-200 to-indigo-300",
    glow: "rgba(99, 102, 241, 0.4)",
    border: "border-indigo-200",
  },
  {
    name: "Git & GitHub",
    emoji: "🐙",
    desc: "Version control & collaboration",
    level: 87,
    color: "from-orange-200 to-red-200",
    glow: "rgba(239, 68, 68, 0.4)",
    border: "border-orange-200",
  },
  {
    name: "PostgreSQL",
    emoji: "🐘",
    desc: "Relational database",
    level: 78,
    color: "from-blue-200 to-sky-300",
    glow: "rgba(14, 165, 233, 0.35)",
    border: "border-sky-200",
  },
  {
    name: "Prisma",
    emoji: "💎",
    desc: "Modern ORM",
    level: 80,
    color: "from-purple-200 to-violet-300",
    glow: "rgba(139, 92, 246, 0.4)",
    border: "border-purple-200",
  },
  {
    name: "API Dev",
    emoji: "🔌",
    desc: "REST & GraphQL APIs",
    level: 85,
    color: "from-pink-200 to-rose-300",
    glow: "rgba(244, 114, 182, 0.4)",
    border: "border-pink-200",
  },
  {
    name: "Framer Motion",
    emoji: "✨",
    desc: "Beautiful animations",
    level: 88,
    color: "from-fuchsia-200 to-purple-300",
    glow: "rgba(192, 132, 252, 0.4)",
    border: "border-fuchsia-200",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function TechCard({
  tech,
  index,
}: {
  tech: (typeof TECH)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: `0 20px 40px ${tech.glow}, 0 0 0 1px rgba(255,255,255,0.6)`,
      }}
      className={`glass-card rounded-3xl p-5 cursor-default flex flex-col gap-4 border ${tech.border} transition-all duration-300`}
    >
      {/* Icon & name */}
      <div className="flex items-center gap-3">
        <motion.div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-md`}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tech.emoji}
        </motion.div>
        <div>
          <div className="font-black text-gray-800 text-sm">{tech.name}</div>
          <div className="text-xs text-gray-400 font-medium">{tech.desc}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <span className="text-xs text-gray-400 font-semibold">
            Proficiency
          </span>
          <span className="text-xs font-black text-pink-500">{tech.level}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${tech.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStackSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="tech"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent" />
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-purple-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-500">Tech Stack</span>
          </div>
          <h2 className="section-title text-gray-800 mb-4">
            Tools I <span className="text-gradient-kawaii">love using</span> 💜
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            My go-to technologies for building modern, scalable, and beautiful
            web applications.
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {TECH.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </motion.div>

        {/* Floating decorative tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {[
            "🌐 Web Performance",
            "📱 Responsive Design",
            "♿ Accessibility",
            "🔒 Security Best Practices",
            "⚡ Fast APIs",
            "🎨 Design Systems",
          ].map((tag, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 glass-card rounded-full text-sm font-semibold text-gray-600 border border-pink-100/60 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

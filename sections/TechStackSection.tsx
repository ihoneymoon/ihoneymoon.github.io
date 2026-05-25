"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";

const TECH = [
  { name: "JavaScript",    emoji: "⚡", desc: "The language of the web",         level: 90, color: "from-yellow-200 to-amber-300",   glow: "rgba(251,191,36,.4)",   border: "border-yellow-200"  },
  { name: "TypeScript",    emoji: "🔷", desc: "Type-safe development",           level: 85, color: "from-blue-200 to-blue-300",      glow: "rgba(59,130,246,.4)",   border: "border-blue-200"    },
  { name: "React",         emoji: "⚛️", desc: "UI component library",            level: 92, color: "from-cyan-200 to-sky-300",       glow: "rgba(14,165,233,.4)",   border: "border-cyan-200"    },
  { name: "Next.js",       emoji: "▲",  desc: "Full-stack React framework",      level: 88, color: "from-gray-200 to-slate-300",     glow: "rgba(100,116,139,.4)",  border: "border-gray-200"    },
  { name: "Node.js",       emoji: "🟢", desc: "Server-side JavaScript",          level: 80, color: "from-green-200 to-emerald-300",  glow: "rgba(16,185,129,.4)",   border: "border-green-200"   },
  { name: "TailwindCSS",   emoji: "🎨", desc: "Utility-first CSS framework",     level: 95, color: "from-teal-200 to-cyan-300",      glow: "rgba(20,184,166,.4)",   border: "border-teal-200"    },
  { name: "Python",        emoji: "🐍", desc: "Data & AI scripting",             level: 75, color: "from-blue-200 to-indigo-300",    glow: "rgba(99,102,241,.4)",   border: "border-indigo-200"  },
  { name: "Git & GitHub",  emoji: "🐙", desc: "Version control & collaboration", level: 87, color: "from-orange-200 to-red-200",     glow: "rgba(239,68,68,.4)",    border: "border-orange-200"  },
  { name: "PostgreSQL",    emoji: "🐘", desc: "Relational database",             level: 78, color: "from-blue-200 to-sky-300",       glow: "rgba(14,165,233,.35)",  border: "border-sky-200"     },
  { name: "Prisma",        emoji: "💎", desc: "Modern ORM",                      level: 80, color: "from-purple-200 to-violet-300",  glow: "rgba(139,92,246,.4)",   border: "border-purple-200"  },
  { name: "API Dev",       emoji: "🔌", desc: "REST & GraphQL APIs",             level: 85, color: "from-pink-200 to-rose-300",      glow: "rgba(244,114,182,.4)",  border: "border-pink-200"    },
  { name: "Framer Motion", emoji: "✨", desc: "Beautiful animations",            level: 88, color: "from-fuchsia-200 to-purple-300", glow: "rgba(192,132,252,.4)",  border: "border-fuchsia-200" },
];

const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.38, ease: "easeOut" } },
};

function TechCard({ tech, index }: { tech: typeof TECH[0]; index: number }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -8,
        scale: 1.04,
        boxShadow: `0 16px 40px ${tech.glow}, 0 0 0 1px rgba(255,255,255,.6)`,
      }}
      className={`glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 cursor-default flex flex-col gap-3 sm:gap-4 border ${tech.border} transition-shadow duration-300`}
    >
      {/* Icon + name */}
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-xl sm:text-2xl shadow-md flex-shrink-0`}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
        >
          {tech.emoji}
        </motion.div>
        <div className="min-w-0">
          <div className="font-black text-gray-800 text-xs sm:text-sm leading-snug truncate">{tech.name}</div>
          <div className="text-xs text-gray-400 font-medium leading-snug truncate hidden sm:block">{tech.desc}</div>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-1 sm:space-y-1.5">
        <div className="flex justify-between">
          <span className="text-xs text-gray-400 font-semibold">Proficiency</span>
          <span className="text-xs font-black text-pink-500">{tech.level}%</span>
        </div>
        <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${tech.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStackSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="tech" ref={ref} className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/25 to-transparent" />
        <motion.div
          className="absolute -top-16 -left-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-purple-200/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 18, 0] }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-purple-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-500">Tech Stack</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Tools I <span className="text-gradient-kawaii">love using</span> 💜
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            My go-to technologies for building modern, scalable, and beautiful web applications.
          </p>
        </motion.div>

        {/* Grid — 2 cols on mobile, 3 on sm, 4 on lg */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {TECH.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </motion.div>

        {/* Extra tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 lg:mt-12"
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
              className="px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-full text-xs sm:text-sm font-semibold text-gray-600 border border-pink-100/60 shadow-sm"
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

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, CheckCircle2, Circle, Loader2 } from "lucide-react";

const ROADMAP = [
  {
    id: 1, title: "HTML & CSS Fundamentals", emoji: "🏗️", status: "done",
    desc: "Mastered the building blocks of the web — semantic HTML, CSS flexbox, grid, animations, and responsive design.",
    color: "from-orange-200 to-amber-300", tags: ["HTML5", "CSS3", "Flexbox", "Grid"],
  },
  {
    id: 2, title: "JavaScript Mastery", emoji: "⚡", status: "done",
    desc: "Deep dived into ES6+, async/await, closures, prototypes, DOM manipulation, and modern JavaScript patterns.",
    color: "from-yellow-200 to-amber-300", tags: ["ES6+", "Async/Await", "DOM", "APIs"],
  },
  {
    id: 3, title: "TypeScript", emoji: "🔷", status: "done",
    desc: "Embraced type safety with TypeScript — generics, utility types, strict mode, and type-driven development.",
    color: "from-blue-200 to-blue-300", tags: ["Types", "Generics", "Interfaces", "Enums"],
  },
  {
    id: 4, title: "React Ecosystem", emoji: "⚛️", status: "done",
    desc: "Mastered React hooks, context, state management, performance optimization, and component architecture.",
    color: "from-cyan-200 to-sky-300", tags: ["Hooks", "Context", "Redux", "React Query"],
  },
  {
    id: 5, title: "Backend Development", emoji: "🖥️", status: "done",
    desc: "Built RESTful APIs with Node.js, Express, authentication, middleware, and server architecture patterns.",
    color: "from-green-200 to-emerald-300", tags: ["Node.js", "Express", "Auth", "Middleware"],
  },
  {
    id: 6, title: "Databases & ORMs", emoji: "🗃️", status: "done",
    desc: "Designed relational schemas with PostgreSQL, worked with Prisma ORM, and explored MongoDB for NoSQL.",
    color: "from-indigo-200 to-blue-300", tags: ["PostgreSQL", "Prisma", "MongoDB", "SQL"],
  },
  {
    id: 7, title: "API Design & Integration", emoji: "🔌", status: "done",
    desc: "Designed RESTful & GraphQL APIs, documented with OpenAPI, worked with 3rd-party services and webhooks.",
    color: "from-pink-200 to-rose-300", tags: ["REST", "GraphQL", "OpenAPI", "Webhooks"],
  },
  {
    id: 8, title: "Fullstack Development", emoji: "🚀", status: "in-progress",
    desc: "Shipping production-ready fullstack apps with Next.js — SSR, SSG, API routes, auth, and deployment.",
    color: "from-purple-200 to-violet-300", tags: ["Next.js", "SSR", "SSG", "Deployment"],
  },
  {
    id: 9, title: "System Design", emoji: "🏛️", status: "in-progress",
    desc: "Learning scalable architecture patterns, microservices, caching strategies, CDN, and distributed systems.",
    color: "from-slate-200 to-gray-300", tags: ["Architecture", "Caching", "Microservices", "CDN"],
  },
  {
    id: 10, title: "AI Applications", emoji: "🤖", status: "in-progress",
    desc: "Building AI-powered apps with LLMs, prompt engineering, RAG systems, and integrating OpenAI & Anthropic APIs.",
    color: "from-fuchsia-200 to-purple-300", tags: ["LLMs", "OpenAI", "RAG", "Agents"],
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "done")
    return (
      <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-600">
        ✅ Done
      </span>
    );
  if (status === "in-progress")
    return (
      <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">
        🔄 Learning
      </span>
    );
  return (
    <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
      📅 Soon
    </span>
  );
}

function RoadmapItem({ item, index, isLast }: { item: typeof ROADMAP[0]; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  const StatusDot = () => {
    if (item.status === "done")        return <CheckCircle2 className="w-4 h-4 text-white" />;
    if (item.status === "in-progress") return <Loader2 className="w-4 h-4 text-white animate-spin" />;
    return <Circle className="w-4 h-4 text-white/60" />;
  };

  return (
    <div ref={ref} className="relative flex gap-3 sm:gap-4">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0 w-10 sm:w-12">
        {/* Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.08, type: "spring" }}
          className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-lg sm:text-xl z-10 border-4 border-white shadow-kawaii flex-shrink-0`}
        >
          {item.emoji}
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white ${
            item.status === "done" ? "bg-green-400" : item.status === "in-progress" ? "bg-purple-400" : "bg-gray-300"
          }`}>
            <StatusDot />
          </div>
        </motion.div>

        {/* Vertical line */}
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 mt-1 min-h-6 rounded-full"
            style={{ background: "linear-gradient(180deg, #FFB3D1, #C09AFF)" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, delay: index * 0.08 + 0.15 }}
        className={`flex-1 pb-6 sm:pb-8 ${isLast ? "pb-0" : ""}`}
        whileHover={{ x: 3 }}
      >
        <div className={`gradient-border rounded-2xl p-4 sm:p-5 shadow-kawaii card-kawaii ${
          item.status === "in-progress" ? "ring-2 ring-purple-200/50" : ""
        }`}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-black text-gray-800 text-sm sm:text-base leading-snug">{item.title}</h3>
            <StatusBadge status={item.status} />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-3">{item.desc}</p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="badge-kawaii">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function RoadmapSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const doneCount = ROADMAP.filter((r) => r.status === "done").length;
  const progress   = Math.round((doneCount / ROADMAP.length) * 100);

  return (
    <section id="roadmap" ref={ref} className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/15 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-rose-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-bold text-rose-500">Learning Roadmap</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            My <span className="text-gradient-kawaii">dev journey</span> 🗺️
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium mb-8">
            The path I&apos;ve walked (and am still walking) as a software engineer.
          </p>

          {/* Progress card */}
          <div className="max-w-sm mx-auto glass-card rounded-2xl p-4 sm:p-5 shadow-kawaii border border-pink-100">
            <div className="flex justify-between items-center mb-3">
              <span className="font-black text-gray-700 text-sm sm:text-base">Overall Progress</span>
              <span className="font-black text-pink-500 text-base sm:text-lg">{progress}%</span>
            </div>
            <div className="h-2.5 sm:h-3 bg-pink-50 rounded-full overflow-hidden">
              <motion.div
                className="progress-kawaii h-full rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${progress}%` } : {}}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
              <span>{doneCount} completed</span>
              <span>{ROADMAP.length - doneCount} remaining</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
          {ROADMAP.map((item, i) => (
            <RoadmapItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === ROADMAP.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

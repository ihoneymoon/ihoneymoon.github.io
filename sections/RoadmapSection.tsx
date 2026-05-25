"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, CheckCircle2, Circle, Loader2 } from "lucide-react";

const ROADMAP = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    desc: "Mastered the building blocks of the web — semantic HTML, CSS flexbox, grid, animations, and responsive design.",
    emoji: "🏗️",
    status: "done",
    color: "from-orange-200 to-amber-300",
    tags: ["HTML5", "CSS3", "Flexbox", "Grid"],
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    desc: "Deep dived into ES6+, async/await, closures, prototypes, DOM manipulation, and modern JavaScript patterns.",
    emoji: "⚡",
    status: "done",
    color: "from-yellow-200 to-amber-300",
    tags: ["ES6+", "Async/Await", "DOM", "APIs"],
  },
  {
    id: 3,
    title: "TypeScript",
    desc: "Embraced type safety with TypeScript — generics, utility types, strict mode, and type-driven development.",
    emoji: "🔷",
    status: "done",
    color: "from-blue-200 to-blue-300",
    tags: ["Types", "Generics", "Interfaces", "Enums"],
  },
  {
    id: 4,
    title: "React Ecosystem",
    desc: "Mastered React hooks, context, state management, performance optimization, and component architecture.",
    emoji: "⚛️",
    status: "done",
    color: "from-cyan-200 to-sky-300",
    tags: ["Hooks", "Context", "Redux", "React Query"],
  },
  {
    id: 5,
    title: "Backend Development",
    desc: "Built RESTful APIs with Node.js, Express, authentication, middleware, and server architecture patterns.",
    emoji: "🖥️",
    status: "done",
    color: "from-green-200 to-emerald-300",
    tags: ["Node.js", "Express", "Auth", "Middleware"],
  },
  {
    id: 6,
    title: "Databases & ORMs",
    desc: "Designed relational schemas with PostgreSQL, worked with Prisma ORM, and explored MongoDB for NoSQL.",
    emoji: "🗃️",
    status: "done",
    color: "from-indigo-200 to-blue-300",
    tags: ["PostgreSQL", "Prisma", "MongoDB", "SQL"],
  },
  {
    id: 7,
    title: "API Design & Integration",
    desc: "Designed RESTful & GraphQL APIs, documented with OpenAPI, worked with 3rd-party services and webhooks.",
    emoji: "🔌",
    status: "done",
    color: "from-pink-200 to-rose-300",
    tags: ["REST", "GraphQL", "OpenAPI", "Webhooks"],
  },
  {
    id: 8,
    title: "Fullstack Development",
    desc: "Shipped production-ready fullstack apps with Next.js — SSR, SSG, API routes, auth, and deployment.",
    emoji: "🚀",
    status: "in-progress",
    color: "from-purple-200 to-violet-300",
    tags: ["Next.js", "SSR", "SSG", "Deployment"],
  },
  {
    id: 9,
    title: "System Design",
    desc: "Learning scalable architecture patterns, microservices, caching strategies, CDN, and distributed systems.",
    emoji: "🏛️",
    status: "in-progress",
    color: "from-slate-200 to-gray-300",
    tags: ["Architecture", "Caching", "Microservices", "CDN"],
  },
  {
    id: 10,
    title: "AI Applications",
    desc: "Building AI-powered apps with LLMs, prompt engineering, RAG systems, and integrating OpenAI & Anthropic APIs.",
    emoji: "🤖",
    status: "in-progress",
    color: "from-fuchsia-200 to-purple-300",
    tags: ["LLMs", "OpenAI", "RAG", "Agents"],
  },
];

function RoadmapItem({
  item,
  index,
  isLast,
}: {
  item: (typeof ROADMAP)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const StatusIcon = () => {
    if (item.status === "done") {
      return <CheckCircle2 className="w-5 h-5 text-white" />;
    } else if (item.status === "in-progress") {
      return (
        <Loader2 className="w-5 h-5 text-white animate-spin" />
      );
    }
    return <Circle className="w-5 h-5 text-white/60" />;
  };

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-0">
      {/* Timeline center */}
      <div className="flex flex-col items-center w-16 flex-shrink-0">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-xl shadow-kawaii flex-shrink-0 z-10 border-4 border-white`}
        >
          {item.emoji}
          {item.status !== "planned" && (
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
              item.status === "done" ? "bg-green-400" : "bg-purple-400"
            } border-2 border-white`}>
              <StatusIcon />
            </div>
          )}
        </motion.div>

        {/* Line */}
        {!isLast && (
          <motion.div
            className="w-0.5 flex-1 mt-1 min-h-8 rounded-full"
            style={{
              background: "linear-gradient(180deg, #FFB3D1, #C09AFF)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="ml-4 mb-8 flex-1"
        whileHover={{ x: 4 }}
      >
        <div className={`gradient-border rounded-2xl p-4 shadow-kawaii card-kawaii ${
          item.status === "in-progress" ? "ring-2 ring-purple-200/60" : ""
        }`}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-black text-gray-800 leading-tight">
              {item.title}
            </h3>
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                item.status === "done"
                  ? "bg-green-100 text-green-600"
                  : item.status === "in-progress"
                  ? "bg-purple-100 text-purple-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {item.status === "done"
                ? "✅ Done"
                : item.status === "in-progress"
                ? "🔄 Learning"
                : "📅 Soon"}
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium leading-relaxed mb-3">
            {item.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="badge-kawaii text-xs"
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

export default function RoadmapSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const doneCount = ROADMAP.filter((r) => r.status === "done").length;
  const progress = Math.round((doneCount / ROADMAP.length) * 100);

  return (
    <section id="roadmap" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-rose-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-bold text-rose-500">
              Learning Roadmap
            </span>
          </div>
          <h2 className="section-title text-gray-800 mb-4">
            My <span className="text-gradient-kawaii">dev journey</span> 🗺️
          </h2>
          <p className="text-gray-500 text-lg font-medium mb-8">
            The path I&apos;ve walked (and am still walking) as a software engineer.
          </p>

          {/* Overall progress */}
          <div className="max-w-md mx-auto glass-card rounded-2xl p-5 shadow-kawaii border border-pink-100">
            <div className="flex justify-between items-center mb-3">
              <span className="font-black text-gray-700">Overall Progress</span>
              <span className="font-black text-pink-500 text-lg">{progress}%</span>
            </div>
            <div className="h-3 bg-pink-50 rounded-full overflow-hidden">
              <motion.div
                className="progress-kawaii h-full rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${progress}%` } : {}}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
              <span>{doneCount} completed</span>
              <span>{ROADMAP.length - doneCount} in progress / upcoming</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
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

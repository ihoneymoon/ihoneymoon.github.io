"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "AI Chat Application",
    emoji: "🤖",
    description:
      "A beautiful real-time chat application powered by AI with smart replies, sentiment analysis, and a cozy kawaii UI. Features markdown support and code highlighting.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Socket.io", "TailwindCSS"],
    color: "from-purple-300 to-pink-300",
    bgColor: "from-purple-50 to-pink-50",
    stars: 128,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Blog Platform",
    emoji: "📝",
    description:
      "A modern content management system with MDX support, SEO optimization, RSS feeds, and a beautiful reading experience with a cozy design.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL", "TailwindCSS"],
    color: "from-sky-300 to-blue-300",
    bgColor: "from-sky-50 to-blue-50",
    stars: 89,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    emoji: "✅",
    description:
      "A Notion-inspired productivity app with drag & drop, subtasks, priority labels, and calendar view. Built with real-time collaboration features.",
    tags: ["React", "TypeScript", "Zustand", "DnD Kit", "Node.js"],
    color: "from-green-300 to-teal-300",
    bgColor: "from-green-50 to-teal-50",
    stars: 203,
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    emoji: "🌤️",
    description:
      "A beautiful weather app with animated backgrounds, 7-day forecasts, hourly charts, and location-based weather. Features cute animated weather icons.",
    tags: ["React", "OpenWeather API", "Chart.js", "TailwindCSS"],
    color: "from-orange-300 to-yellow-300",
    bgColor: "from-orange-50 to-yellow-50",
    stars: 67,
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Generator",
    emoji: "🌸",
    description:
      "A drag-and-drop portfolio builder that generates beautiful, responsive portfolio websites with multiple themes, animations, and GitHub integration.",
    tags: ["Next.js", "React DnD", "TypeScript", "Framer Motion"],
    color: "from-pink-300 to-rose-300",
    bgColor: "from-pink-50 to-rose-50",
    stars: 156,
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "AI Code Assistant",
    emoji: "💻",
    description:
      "VS Code-inspired code editor with AI-powered completions, syntax highlighting for 50+ languages, error detection, and code refactoring suggestions.",
    tags: ["React", "Monaco Editor", "Python", "FastAPI", "OpenAI"],
    color: "from-violet-300 to-purple-300",
    bgColor: "from-violet-50 to-purple-50",
    stars: 312,
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Notes App",
    emoji: "📔",
    description:
      "A minimal, beautiful notes app with rich text editing, tags, search, and local-first sync. Features a kawaii design with soft gradients.",
    tags: ["React", "TipTap", "IndexedDB", "TailwindCSS"],
    color: "from-amber-300 to-orange-300",
    bgColor: "from-amber-50 to-orange-50",
    stars: 78,
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Productivity Dashboard",
    emoji: "📊",
    description:
      "An all-in-one dashboard with Pomodoro timer, habit tracker, goals, mood logger, and weekly analytics. A cozy productivity companion.",
    tags: ["Next.js", "TypeScript", "Chart.js", "Prisma", "NextAuth"],
    color: "from-rose-300 to-pink-300",
    bgColor: "from-rose-50 to-pink-50",
    stars: 194,
    demo: "#",
    github: "#",
    featured: false,
  },
];

const FILTERS = ["All", "Featured", "AI", "Fullstack", "Frontend"];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative gradient-border rounded-3xl overflow-hidden shadow-kawaii card-kawaii"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full text-white text-xs font-bold shadow-kawaii">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Card thumbnail */}
      <div
        className={`h-40 bg-gradient-to-br ${project.bgColor} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Decorative circles */}
        <motion.div
          className={`absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.color} opacity-20`}
          animate={hovered ? { scale: 1.3, opacity: 0.35 } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className={`absolute -left-5 -bottom-5 w-24 h-24 rounded-full bg-gradient-to-br ${project.color} opacity-15`}
          animate={hovered ? { scale: 1.4, opacity: 0.3 } : { scale: 1, opacity: 0.15 }}
          transition={{ duration: 0.4 }}
        />

        {/* Emoji */}
        <motion.div
          className="text-6xl z-10 filter drop-shadow-lg"
          animate={hovered ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          {project.emoji}
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0`}
          animate={hovered ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card content */}
      <div className="p-5 space-y-3 bg-white/60 backdrop-blur-sm">
        {/* Title */}
        <div>
          <h3 className="font-black text-gray-800 text-lg leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-gray-400 font-semibold">
              {project.stars}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-100"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-500 border border-purple-100">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          <motion.a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl glass text-gray-600 text-sm font-bold border border-gray-200/60 hover:border-gray-300 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl btn-kawaii text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="projects" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-pink-200/60 shadow-kawaii mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-bold text-pink-500">
              Featured Projects
            </span>
          </div>
          <h2 className="section-title text-gray-800 mb-4">
            Things I&apos;ve{" "}
            <span className="text-gradient-kawaii">built</span> 🚀
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            A collection of projects showcasing my skills in frontend,
            fullstack, and AI development.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "btn-kawaii shadow-kawaii"
                  : "glass-card text-gray-500 border border-pink-100/60 hover:border-pink-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline-kawaii"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

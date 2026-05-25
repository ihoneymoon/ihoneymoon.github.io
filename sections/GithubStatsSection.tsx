"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star, GitFork, Users, Activity, Sparkles, TrendingUp } from "lucide-react";

const STATS = [
  { label: "Total Commits", value: "1,247", emoji: "💻", color: "from-pink-300 to-rose-300"    },
  { label: "Repositories",  value: "42",    emoji: "📦", color: "from-purple-300 to-violet-300" },
  { label: "GitHub Stars",  value: "1.2k",  emoji: "⭐", color: "from-yellow-300 to-amber-300" },
  { label: "Followers",     value: "320",   emoji: "👥", color: "from-sky-300 to-blue-300"      },
];

/* Contribution grid data (26 weeks × 7 days) */
const CONTRIBUTION_DATA: number[][] = Array.from({ length: 26 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
);

const ACTIVITY_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const ACTIVITY_BARS   = [35, 60, 45, 80, 92, 70, 55, 88, 75, 95, 62, 78];

const LANG_STATS = [
  { name: "TypeScript", percent: 45, color: "from-blue-300 to-blue-400"     },
  { name: "JavaScript", percent: 25, color: "from-yellow-300 to-amber-400"  },
  { name: "CSS/SCSS",   percent: 15, color: "from-pink-300 to-pink-400"     },
  { name: "Python",     percent: 10, color: "from-green-300 to-emerald-400" },
  { name: "Other",      percent: 5,  color: "from-gray-300 to-gray-400"     },
];

const CELL_COLORS = ["bg-pink-50","bg-pink-200","bg-pink-400","bg-purple-400","bg-purple-600"];

export default function GithubStatsSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="stats" ref={ref} className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-pink-200/60 shadow-kawaii mb-4">
            <Github className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-bold text-gray-600">GitHub Stats</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            My <span className="text-gradient-kawaii">coding activity</span> 📊
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium">
            A peek into my GitHub dashboard — always shipping! 🚀
          </p>
        </motion.div>

        {/* Top stat cards — 2-col on mobile, 4-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="gradient-border rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-kawaii cursor-default"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-lg sm:text-xl mb-2 sm:mb-3 shadow-md`}>
                {stat.emoji}
              </div>
              <div className="text-xl sm:text-2xl font-black text-gray-800">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main row: heatmap + language stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {/* Contribution heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 gradient-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-kawaii"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-pink-400" />
              <span className="font-black text-gray-800 text-sm sm:text-base">Contribution Graph</span>
              <span className="ml-auto text-xs text-gray-400 font-semibold">Last 6 months</span>
            </div>
            {/* Scrollable on small screens */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-max">
                {CONTRIBUTION_DATA.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((level, di) => (
                      <motion.div
                        key={di}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${CELL_COLORS[level]} cursor-pointer`}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: (wi * 7 + di) * 0.002 + 0.5 }}
                        whileHover={{ scale: 1.5 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400 font-medium">
              <span>Less</span>
              {CELL_COLORS.map((c, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Language stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="gradient-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-kawaii"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="font-black text-gray-800 text-sm sm:text-base">Top Languages</span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {LANG_STATS.map((lang, i) => (
                <div key={lang.name} className="space-y-1 sm:space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm font-bold text-gray-600">{lang.name}</span>
                    <span className="text-xs sm:text-sm font-black text-pink-500">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-pink-50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percent}%` } : {}}
                      transition={{ duration: 1, delay: i * 0.1 + 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly activity bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="gradient-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-kawaii"
        >
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <TrendingUp className="w-5 h-5 text-pink-400" />
            <span className="font-black text-gray-800 text-sm sm:text-base">Monthly Activity</span>
            <span className="ml-auto text-xs text-gray-400 font-semibold">2024 commits</span>
          </div>
          <div className="flex items-end gap-1.5 sm:gap-2 h-20 sm:h-28">
            {ACTIVITY_BARS.map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5 sm:gap-1 min-w-0">
                <motion.div
                  className="w-full rounded-t-lg sm:rounded-t-xl bg-gradient-to-t from-pink-300 to-purple-300 relative overflow-hidden"
                  style={{ height: `${height}%` }}
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.05 + 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 shimmer-bg" />
                </motion.div>
                <span className="text-[9px] sm:text-xs text-gray-400 font-medium hidden sm:block truncate w-full text-center">
                  {ACTIVITY_MONTHS[i]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

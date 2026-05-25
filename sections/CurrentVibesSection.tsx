"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  Music, Coffee, Heart, Sparkles, BookOpen,
  Zap, Moon, Sun, Headphones, Battery, Wifi,
} from "lucide-react";

const MOODS = ["🔥 In the zone","✨ Creative flow","🌸 Feeling cozy","⚡ Super focused"];
const SONGS = [
  { title: "Lofi Hip Hop Mix",  artist: "ChilledCow",    duration: "2:34:00" },
  { title: "Study Vibes 2024",  artist: "Lofi Girl",     duration: "1:12:34" },
  { title: "Pink Noise Focus",  artist: "Brain.fm",      duration: "∞"       },
  { title: "Cafe Ambiance",     artist: "Nature Sounds", duration: "4:00:00" },
];
const CURRENTLY_LEARNING = [
  { topic: "System Design",  progress: 45, emoji: "🏛️" },
  { topic: "AI/LLM",         progress: 72, emoji: "🤖" },
  { topic: "Rust (baby!)",   progress: 15, emoji: "🦀" },
  { topic: "UI Animation",   progress: 88, emoji: "✨" },
];

/* ── Clock ────────────────────────────────────────────────────────────────── */
function ClockWidget() {
  const [time, setTime] = useState<{ h: string; m: string; s: string; ampm: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const now  = new Date();
      const h    = now.getHours();
      setTime({
        h:    String(h % 12 || 12).padStart(2, "0"),
        m:    String(now.getMinutes()).padStart(2, "0"),
        s:    String(now.getSeconds()).padStart(2, "0"),
        ampm: h >= 12 ? "PM" : "AM",
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return <div className="h-12" />;

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-black text-gray-800 tracking-tight font-mono leading-none">
        {time.h}:{time.m}
        <span className="text-pink-400 text-xl sm:text-2xl">:{time.s}</span>
        <span className="text-gray-400 text-base sm:text-lg ml-1.5">{time.ampm}</span>
      </div>
      <div className="text-xs text-gray-400 font-medium mt-1">
        {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
      </div>
    </div>
  );
}

function StatusBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const up = () => setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    up();
    const id = setInterval(up, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-between px-3 py-1.5 glass rounded-xl text-xs font-bold text-gray-500 mt-3">
      <span className="flex items-center gap-1"><Wifi className="w-3 h-3 text-green-400" />Online</span>
      <span>{time}</span>
      <span className="flex items-center gap-1"><Battery className="w-3.5 h-3.5 text-green-400" />92%</span>
    </div>
  );
}

/* ── Music player ─────────────────────────────────────────────────────────── */
function MusicWidget() {
  const [songIdx, setSongIdx]   = useState(0);
  const [playing, setPlaying]   = useState(true);
  const [progress, setProgress] = useState(34);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.3)), 300);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-2xl sm:text-3xl shadow-kawaii flex-shrink-0"
          animate={playing ? { rotate: [0, 360] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          🎵
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="font-black text-gray-800 text-sm truncate">{SONGS[songIdx].title}</div>
          <div className="text-xs text-gray-400 font-medium truncate">{SONGS[songIdx].artist}</div>
          <div className="flex items-center gap-1 mt-0.5">
            <Headphones className="w-3 h-3 text-pink-400" />
            <span className="text-xs text-pink-400 font-bold">Now Playing</span>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="h-1.5 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 font-medium">
          <span>1:23</span>
          <span>{SONGS[songIdx].duration}</span>
        </div>
      </div>

      <div className="flex justify-center gap-3 sm:gap-4">
        {[
          { label: "⏮", action: () => setSongIdx((i) => (i - 1 + SONGS.length) % SONGS.length), size: "w-8 h-8" },
          { label: playing ? "⏸" : "▶️", action: () => setPlaying((p) => !p), size: "w-10 h-10 btn-kawaii" },
          { label: "⏭", action: () => setSongIdx((i) => (i + 1) % SONGS.length), size: "w-8 h-8" },
        ].map((btn, i) => (
          <motion.button
            key={i}
            onClick={btn.action}
            className={`${btn.size} rounded-full flex items-center justify-center text-sm ${i === 1 ? "" : "glass text-gray-500"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ── Coffee ───────────────────────────────────────────────────────────────── */
function CoffeeWidget() {
  const [count, setCount] = useState(3);
  const MAX = 6;
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl sm:text-3xl font-black text-gray-800">{count}</div>
          <div className="text-xs sm:text-sm text-gray-400 font-semibold">cups today ☕</div>
        </div>
        <motion.button
          onClick={() => setCount((c) => Math.min(c + 1, MAX))}
          className="btn-kawaii text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          + Brew
        </motion.button>
      </div>
      <div className="flex gap-1.5 sm:gap-2 flex-wrap">
        {Array.from({ length: MAX }).map((_, i) => (
          <motion.div
            key={i}
            className="text-xl sm:text-2xl cursor-pointer select-none"
            animate={{ scale: i < count ? 1 : 0.7, opacity: i < count ? 1 : 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            onClick={() => setCount(i + 1)}
          >
            ☕
          </motion.div>
        ))}
      </div>
      {count >= MAX && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-orange-400 font-bold">
          ⚠️ Maybe switch to water? 😅
        </motion.div>
      )}
    </div>
  );
}

/* ── Mood ─────────────────────────────────────────────────────────────────── */
function MoodWidget() {
  const [moodIdx, setMoodIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setMoodIdx((i) => (i + 1) % MOODS.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="text-center">
        <motion.div
          key={moodIdx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-2xl font-black text-gray-800 mb-1"
        >
          {MOODS[moodIdx]}
        </motion.div>
        <div className="text-xs sm:text-sm text-gray-400 font-medium">Coding mood</div>
      </div>
      <div className="flex justify-center gap-2">
        {MOODS.map((_, i) => (
          <button
            key={i}
            onClick={() => setMoodIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === moodIdx ? "bg-pink-400 w-4" : "bg-pink-200 w-1.5"}`}
          />
        ))}
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-gray-500 font-semibold">Productivity</span>
          <span className="text-pink-500 font-black">87%</span>
        </div>
        <div className="h-2 bg-pink-50 rounded-full overflow-hidden">
          <motion.div
            className="progress-kawaii h-full"
            initial={{ width: "60%" }}
            animate={{ width: "87%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────────────────── */
export default function CurrentVibesSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  const WIDGET_PROPS = "gradient-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-kawaii card-kawaii";
  const ICON_BOX     = (from: string, to: string) =>
    `w-8 h-8 rounded-xl bg-gradient-to-br ${from} ${to} flex items-center justify-center flex-shrink-0`;

  return (
    <section id="vibes" ref={ref} className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/25 to-transparent" />
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
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="text-sm font-bold text-pink-500">Current Vibes</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            What I&apos;m up to{" "}
            <span className="text-gradient-kawaii">right now</span> 🎵
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium">
            A live peek into my coding workspace vibes.
          </p>
        </motion.div>

        {/*
          Grid layout:
          Mobile (1 col) → sm (2 col) → lg (3 col)
          The "Currently Learning" card spans 2 cols on sm+
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

          {/* Clock */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={WIDGET_PROPS}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`${ICON_BOX("from-pink-300", "to-purple-300")}`}>
                <Sun className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">My Time</span>
              <motion.div
                className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <ClockWidget />
            <StatusBar />
          </motion.div>

          {/* Music */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={WIDGET_PROPS}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`${ICON_BOX("from-purple-300", "to-pink-300")}`}>
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Now Playing</span>
            </div>
            <MusicWidget />
          </motion.div>

          {/* Coffee */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={WIDGET_PROPS}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`${ICON_BOX("from-amber-300", "to-orange-300")}`}>
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Coffee Counter</span>
            </div>
            <CoffeeWidget />
          </motion.div>

          {/* Mood */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className={WIDGET_PROPS}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`${ICON_BOX("from-pink-300", "to-rose-300")}`}>
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Coding Mood</span>
            </div>
            <MoodWidget />
          </motion.div>

          {/* Learning — 2-col span on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className={`${WIDGET_PROPS} sm:col-span-2 lg:col-span-2`}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className={`${ICON_BOX("from-green-300", "to-teal-300")}`}>
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Currently Learning</span>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {CURRENTLY_LEARNING.map((item, i) => (
                <div key={item.topic} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg flex-shrink-0">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-black text-gray-700 truncate">{item.topic}</div>
                    </div>
                    <span className="text-xs font-black text-pink-500 flex-shrink-0">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-pink-50 rounded-full overflow-hidden">
                    <motion.div
                      className="progress-kawaii h-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.progress}%` } : {}}
                      transition={{ duration: 1, delay: i * 0.12 + 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 glass-card rounded-full border border-pink-100/60 shadow-kawaii">
            <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-gray-500">
              Fun fact: I write best code between{" "}
              <span className="text-pink-500 font-black">10 pm–2 am</span> 🌙
            </span>
            <Moon className="w-4 h-4 text-purple-400 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

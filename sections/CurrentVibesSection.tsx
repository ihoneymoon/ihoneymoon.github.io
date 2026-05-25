"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  Music,
  Coffee,
  Heart,
  Sparkles,
  BookOpen,
  Zap,
  Moon,
  Sun,
  Code2,
  Headphones,
  Battery,
  Wifi,
} from "lucide-react";

const MOODS = ["🔥 In the zone", "✨ Creative flow", "🌸 Feeling cozy", "⚡ Super focused"];
const SONGS = [
  { title: "Lofi Hip Hop Mix", artist: "ChilledCow", duration: "2:34:00" },
  { title: "Study Vibes 2024", artist: "Lofi Girl", duration: "1:12:34" },
  { title: "Pink Noise Focus", artist: "Brain.fm", duration: "∞" },
  { title: "Cafe Ambiance", artist: "Nature Sounds", duration: "4:00:00" },
];
const CURRENTLY_LEARNING = [
  { topic: "System Design", progress: 45, emoji: "🏛️" },
  { topic: "AI/LLM Integration", progress: 72, emoji: "🤖" },
  { topic: "Rust (baby steps)", progress: 15, emoji: "🦀" },
  { topic: "UI Animation", progress: 88, emoji: "✨" },
];

function ClockWidget() {
  const [time, setTime] = useState<{ h: string; m: string; s: string; ampm: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      setTime({
        h: String(h % 12 || 12).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
        ampm: h >= 12 ? "PM" : "AM",
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="text-center">
      <div className="text-4xl font-black text-gray-800 tracking-tight font-mono">
        {time.h}:{time.m}
        <span className="text-pink-400 text-2xl">:{time.s}</span>
        <span className="text-gray-400 text-lg ml-2">{time.ampm}</span>
      </div>
      <div className="text-xs text-gray-400 font-medium mt-1">
        {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
      </div>
    </div>
  );
}

function MusicWidget() {
  const [songIdx, setSongIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(34);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.3));
    }, 300);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="space-y-4">
      {/* Album art placeholder */}
      <div className="flex items-center gap-4">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-3xl shadow-kawaii flex-shrink-0"
          animate={playing ? { rotate: [0, 360] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          🎵
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="font-black text-gray-800 truncate">
            {SONGS[songIdx].title}
          </div>
          <div className="text-sm text-gray-400 font-medium">
            {SONGS[songIdx].artist}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Headphones className="w-3 h-3 text-pink-400" />
            <span className="text-xs text-pink-400 font-bold">Now Playing</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="h-1.5 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 font-medium">
          <span>{SONGS[songIdx].duration === "∞" ? "0:00" : "1:23"}</span>
          <span>{SONGS[songIdx].duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <motion.button
          onClick={() => setSongIdx((i) => (i - 1 + SONGS.length) % SONGS.length)}
          className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ⏮
        </motion.button>
        <motion.button
          onClick={() => setPlaying((p) => !p)}
          className="w-10 h-10 rounded-full btn-kawaii flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {playing ? "⏸" : "▶️"}
        </motion.button>
        <motion.button
          onClick={() => setSongIdx((i) => (i + 1) % SONGS.length)}
          className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ⏭
        </motion.button>
      </div>
    </div>
  );
}

function CoffeeWidget() {
  const [count, setCount] = useState(3);
  const MAX_COFFEE = 6;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-black text-gray-800">{count}</div>
          <div className="text-sm text-gray-400 font-semibold">cups today ☕</div>
        </div>
        <motion.button
          onClick={() => setCount((c) => Math.min(c + 1, MAX_COFFEE))}
          className="btn-kawaii text-sm py-2 px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          + Brew
        </motion.button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: MAX_COFFEE }).map((_, i) => (
          <motion.div
            key={i}
            className={`text-2xl cursor-pointer select-none`}
            animate={{ scale: i < count ? 1 : 0.7, opacity: i < count ? 1 : 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            onClick={() => setCount(i + 1)}
          >
            ☕
          </motion.div>
        ))}
      </div>
      {count >= MAX_COFFEE && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-orange-400 font-bold"
        >
          ⚠️ Maybe switch to water? 😅
        </motion.div>
      )}
    </div>
  );
}

function MoodWidget() {
  const [moodIdx, setMoodIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMoodIdx((i) => (i + 1) % MOODS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <motion.div
          key={moodIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-2xl font-black text-gray-800 mb-2"
        >
          {MOODS[moodIdx]}
        </motion.div>
        <div className="text-sm text-gray-400 font-medium">Current coding mood</div>
      </div>
      <div className="flex justify-center gap-2">
        {MOODS.map((_, i) => (
          <button
            key={i}
            onClick={() => setMoodIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === moodIdx ? "bg-pink-400 w-4" : "bg-pink-200"
            }`}
          />
        ))}
      </div>
      {/* Productivity meter */}
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

function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 glass rounded-2xl text-xs font-bold text-gray-500">
      <span className="flex items-center gap-1">
        <Wifi className="w-3 h-3 text-green-400" />
        Connected
      </span>
      <span>{time}</span>
      <span className="flex items-center gap-1">
        <Battery className="w-3.5 h-3.5 text-green-400" />
        92%
      </span>
    </div>
  );
}

export default function CurrentVibesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="vibes" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent" />
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
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="text-sm font-bold text-pink-500">Current Vibes</span>
          </div>
          <h2 className="section-title text-gray-800 mb-4">
            What I&apos;m up to{" "}
            <span className="text-gradient-kawaii">right now</span> 🎵
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            A live peek into my coding workspace vibes.
          </p>
        </motion.div>

        {/* Widget grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Clock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="gradient-border rounded-3xl p-6 shadow-kawaii card-kawaii col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
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
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="gradient-border rounded-3xl p-6 shadow-kawaii card-kawaii"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Now Playing</span>
            </div>
            <MusicWidget />
          </motion.div>

          {/* Coffee counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="gradient-border rounded-3xl p-6 shadow-kawaii card-kawaii"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-300 to-orange-300 flex items-center justify-center">
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Coffee Counter</span>
            </div>
            <CoffeeWidget />
          </motion.div>

          {/* Mood */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="gradient-border rounded-3xl p-6 shadow-kawaii card-kawaii"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-300 to-rose-300 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Coding Mood</span>
            </div>
            <MoodWidget />
          </motion.div>

          {/* Learning progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="gradient-border rounded-3xl p-6 shadow-kawaii card-kawaii sm:col-span-2"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-300 to-teal-300 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-gray-700 text-sm">Currently Learning</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {CURRENTLY_LEARNING.map((item, i) => (
                <div key={item.topic} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-black text-gray-700 truncate">
                        {item.topic}
                      </div>
                    </div>
                    <span className="text-xs font-black text-pink-500 flex-shrink-0">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-pink-50 rounded-full overflow-hidden">
                    <motion.div
                      className="progress-kawaii h-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.progress}%` } : {}}
                      transition={{ duration: 1, delay: i * 0.15 + 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun footer fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-pink-100/60 shadow-kawaii">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-500">
              Fun fact: I write best code between{" "}
              <span className="text-pink-500 font-black">10pm - 2am</span> 🌙
            </span>
            <Moon className="w-4 h-4 text-purple-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

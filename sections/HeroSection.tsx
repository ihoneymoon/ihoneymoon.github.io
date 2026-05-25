"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  Code2,
  Zap,
  Coffee,
  Cpu,
  Layers,
} from "lucide-react";

/* ─── Typing strings ────────────────────────────────────────────────────── */
const TYPING_STRINGS = [
  "Software Engineer 🌸",
  "Frontend Developer ✨",
  "Fullstack Builder 🚀",
  "AI Enthusiast 🤖",
  "UI Engineer 💅",
  "React Developer ⚛️",
];

/* ─── Floating badges (xl+ only, relative to illustration box) ─────────── */
const FLOATING_BADGES = [
  { icon: Code2,  label: "Clean Code",   color: "from-pink-200 to-pink-300",     side: "left",  top: "22%",  delay: 0   },
  { icon: Zap,    label: "Fast Build",   color: "from-purple-200 to-purple-300", side: "right", top: "12%",  delay: 0.4 },
  { icon: Heart,  label: "Passion",      color: "from-rose-200 to-pink-300",     side: "right", top: "64%",  delay: 0.8 },
  { icon: Coffee, label: "Powered by ☕", color: "from-amber-100 to-orange-200",  side: "left",  top: "66%",  delay: 0.6 },
  { icon: Cpu,    label: "AI Projects",  color: "from-sky-100 to-blue-200",      side: "right", top: "38%",  delay: 1.0 },
  { icon: Layers, label: "Full Stack",   color: "from-green-100 to-emerald-200", side: "left",  top: "44%",  delay: 1.2 },
];

/* ─── Sparkle positions (% of illustration container, sm+ only) ─────────── */
const SPARKLES = [
  { x: "8%",  y: "12%", size: 10, delay: 0,   dur: 2.6 },
  { x: "88%", y: "20%", size: 7,  delay: 0.5, dur: 3.1 },
  { x: "80%", y: "78%", size: 9,  delay: 1.0, dur: 2.2 },
  { x: "12%", y: "82%", size: 6,  delay: 1.5, dur: 3.4 },
  { x: "50%", y: "6%",  size: 12, delay: 0.8, dur: 2.8 },
];

/* ─── Small utility SVG star ────────────────────────────────────────────── */
function SparkleIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
    </svg>
  );
}

/* ─── Typing animation ──────────────────────────────────────────────────── */
function TypingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed]       = useState("");
  const [isDeleting, setIsDeleting]     = useState(false);
  const [charIndex, setCharIndex]       = useState(0);

  useEffect(() => {
    const current = TYPING_STRINGS[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 42);
      } else {
        setIsDeleting(false);
        setCurrentIndex((i) => (i + 1) % TYPING_STRINGS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting]);

  return (
    <span className="text-gradient-kawaii font-black">
      {displayed}
      <span className="animate-pulse text-pink-400">|</span>
    </span>
  );
}

/* ─── Kawaii SVG illustration ───────────────────────────────────────────── */
function KawaiiIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Kawaii coding workspace illustration"
      role="img"
    >
      <circle cx="200" cy="200" r="180" fill="url(#heroGrad)" opacity="0.12" />

      {/* Monitor body */}
      <rect x="90" y="150" width="220" height="150" rx="16" fill="url(#monitorGrad)" />
      <rect x="95" y="155" width="210" height="140" rx="12" fill="#1A1A2E" />

      {/* Code lines on screen */}
      <rect x="105" y="165" width="80"  height="6"  rx="3"   fill="#FF85B3" opacity="0.85" />
      <rect x="115" y="178" width="60"  height="5"  rx="2.5" fill="#C09AFF" opacity="0.85" />
      <rect x="125" y="190" width="100" height="5"  rx="2.5" fill="#93C5FD" opacity="0.75" />
      <rect x="115" y="202" width="70"  height="5"  rx="2.5" fill="#6EE7B7" opacity="0.75" />
      <rect x="105" y="214" width="50"  height="5"  rx="2.5" fill="#FF85B3" opacity="0.85" />
      <rect x="115" y="226" width="90"  height="5"  rx="2.5" fill="#C09AFF" opacity="0.85" />
      <rect x="125" y="238" width="45"  height="5"  rx="2.5" fill="#FCD34D" opacity="0.75" />
      <rect x="105" y="250" width="140" height="5"  rx="2.5" fill="#93C5FD" opacity="0.75" />
      <rect x="105" y="262" width="80"  height="5"  rx="2.5" fill="#FF85B3" opacity="0.65" />
      {/* Cursor blink */}
      <rect x="193" y="262" width="8" height="12" rx="1" fill="#FF85B3" opacity="0.9" />

      {/* Monitor stand */}
      <rect x="185" y="300" width="30" height="20" rx="4" fill="url(#monitorGrad)" />
      <rect x="165" y="318" width="70" height="10" rx="5" fill="url(#monitorGrad)" />

      {/* Keyboard */}
      <rect x="100" y="335" width="200" height="40" rx="10" fill="url(#kbGrad)" />
      <rect x="108" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="130" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="152" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="174" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="196" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="218" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="240" y="342" width="18" height="14" rx="4" fill="white" opacity="0.5" />
      <rect x="130" y="360" width="140" height="10" rx="4" fill="white" opacity="0.3" />

      {/* Coffee cup */}
      <rect x="315" y="300" width="40" height="44" rx="8" fill="url(#coffeeGrad)" />
      <rect x="319" y="304" width="32" height="32" rx="6" fill="#3D1A00" opacity="0.8" />
      <path d="M335 310 C335 310 340 315 335 322" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <rect x="350" y="315" width="12" height="18" rx="6" fill="none" stroke="url(#coffeeGrad)" strokeWidth="3" />
      <path d="M328 296 C328 290 332 290 332 284" stroke="#FFB3D1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M335 294 C335 288 339 288 339 282" stroke="#C09AFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Plant */}
      <rect x="40" y="305" width="50" height="35" rx="8" fill="url(#plantPotGrad)" />
      <ellipse cx="65" cy="308" rx="22" ry="18" fill="#4ADE80" />
      <ellipse cx="55" cy="296" rx="14" ry="12" fill="#22C55E" />
      <ellipse cx="75" cy="296" rx="14" ry="12" fill="#16A34A" />
      <ellipse cx="65" cy="290" rx="12" ry="10" fill="#4ADE80" />
      <circle cx="72" cy="285" r="3" fill="#FCD34D" />
      <path d="M72 281 L72 289 M68 285 L76 285" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floating star decoration */}
      <path
        d="M60 110 L63 118 L72 118 L65 123 L68 132 L60 127 L52 132 L55 123 L48 118 L57 118Z"
        fill="#FCD34D" opacity="0.9"
      />

      {/* Pixel heart */}
      <rect x="350" y="240" width="8" height="8" fill="#FF85B3" opacity="0.7" />
      <rect x="358" y="240" width="8" height="8" fill="#FF85B3" opacity="0.7" />
      <rect x="342" y="248" width="8" height="8" fill="#FF85B3" opacity="0.7" />
      <rect x="350" y="248" width="8" height="16" fill="#FF85B3" opacity="0.7" />
      <rect x="358" y="248" width="8" height="16" fill="#FF85B3" opacity="0.7" />
      <rect x="366" y="248" width="8" height="8" fill="#FF85B3" opacity="0.7" />

      {/* Mouse */}
      <rect x="280" y="330" width="28" height="40" rx="14" fill="url(#mouseGrad)" />
      <rect x="293" y="332" width="1.5" height="16" rx="1" fill="white" opacity="0.4" />

      <defs>
        <radialGradient id="heroGrad" cx="50%" cy="50%">
          <stop offset="0%"   stopColor="#FF85B3" />
          <stop offset="100%" stopColor="#C09AFF" />
        </radialGradient>
        <linearGradient id="monitorGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#FFB3D1" />
          <stop offset="100%" stopColor="#D8C0FF" />
        </linearGradient>
        <linearGradient id="kbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#E8D5FF" />
          <stop offset="100%" stopColor="#FFD6E7" />
        </linearGradient>
        <linearGradient id="coffeeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="plantPotGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#F87171" />
        </linearGradient>
        <linearGradient id="mouseGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#FFD6E7" />
          <stop offset="100%" stopColor="#D8C0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Hero section ──────────────────────────────────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden pt-16"
    >
      {/* ── Background orbs (pointer-events:none, clipped by overflow-hidden) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large pink orb — hidden on tiny mobile, visible from sm */}
        <motion.div
          className="orb orb-pink absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -top-20 -left-16"
          animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="orb orb-purple absolute w-56 h-56 sm:w-72 sm:h-72 top-1/3 -right-12"
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="orb orb-rose hidden sm:block absolute w-60 h-60 lg:w-72 lg:h-72 bottom-16 left-1/4"
          animate={{ x: [0, 18, 0], y: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* ── Main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/*
          ── Responsive grid:
          Mobile:  single column, text first, illustration below
          lg+:     two columns side-by-side, text left, illustration right
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* ─────────────────────────────────────── TEXT COLUMN (always first) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-pink-200/60 shadow-kawaii"
            >
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5 }}
                className="text-lg leading-none"
              >
                👋
              </motion.span>
              <span className="text-sm font-bold text-pink-500">
                Welcome to my portfolio!
              </span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2 w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="font-black leading-tight
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-5xl
                  xl:text-6xl"
              >
                <span className="text-gray-800">Hi, I&apos;m </span>
                <span className="text-gradient-kawaii">Pinky Dev</span>
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                  className="inline-block ml-2 text-3xl sm:text-4xl"
                >
                  🌸
                </motion.span>
              </motion.h1>

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold min-h-[2.2rem] flex items-center justify-center lg:justify-start"
              >
                <TypingText />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-md lg:max-w-none"
            >
              I build{" "}
              <span className="text-pink-500 font-bold">cute things</span> that
              solve real problems. Passionate about{" "}
              <span className="text-purple-500 font-bold">beautiful interfaces</span>,
              clean code, and AI-powered applications. ✨
            </motion.p>

            {/* Mobile inline skill chips (only sm–lg, hides at xl when badges show) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 xl:hidden"
            >
              {[
                { icon: Code2,  label: "Clean Code",   color: "bg-pink-50   text-pink-600   border-pink-100"   },
                { icon: Zap,    label: "Fast Build",   color: "bg-purple-50 text-purple-600 border-purple-100" },
                { icon: Cpu,    label: "AI Projects",  color: "bg-sky-50    text-sky-600    border-sky-100"    },
                { icon: Layers, label: "Full Stack",   color: "bg-green-50  text-green-600  border-green-100"  },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${chip.color}`}
                >
                  <chip.icon className="w-3.5 h-3.5" />
                  {chip.label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-kawaii gap-2 w-full sm:w-auto justify-center py-3 px-6 text-sm sm:text-base cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Star className="w-4 h-4 flex-shrink-0" />
                View My Work
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                className="btn-outline-kawaii gap-2 w-full sm:w-auto justify-center py-3 px-6 text-sm sm:text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest hidden xs:inline">
                Find me on
              </span>
              <div className="flex gap-2">
                {[
                  { Icon: Github,   href: "https://github.com",               label: "GitHub",   hov: "hover:bg-gray-100  hover:text-gray-700"  },
                  { Icon: Linkedin, href: "https://linkedin.com",              label: "LinkedIn", hov: "hover:bg-blue-50   hover:text-blue-600"  },
                  { Icon: Twitter,  href: "https://twitter.com",               label: "Twitter",  hov: "hover:bg-sky-50    hover:text-sky-500"   },
                  { Icon: Mail,     href: "mailto:hello@pinkydev.com",         label: "Email",    hov: "hover:bg-pink-50   hover:text-pink-500"  },
                ].map(({ Icon, href, label, hov }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 ${hov} border border-white/60`}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─────────────────────────────────── ILLUSTRATION COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-start lg:items-center"
          >
            {/*
              Illustration wrapper:
              - On mobile / tablet: constrained to a safe max-width, centred
              - On lg+: fills the column naturally
              - xl: floating badges are rendered here so they're always within bounds
            */}
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-full">

              {/* Glow halo behind SVG */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 blur-2xl sm:blur-3xl scale-75"
                aria-hidden="true"
              />

              {/* ── Sparkles inside illustration box (sm+ only) */}
              <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
                {SPARKLES.map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: s.x, top: s.y }}
                    animate={{ opacity: [1, .3, 1], scale: [1, .6, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
                  >
                    <SparkleIcon size={s.size} color="#FFB3D1" />
                  </motion.div>
                ))}
              </div>

              {/*
                ── Floating badges: ONLY on xl+, positioned relative to THIS box.
                Using inset translate so they never escape the viewport.
              */}
              {FLOATING_BADGES.map((badge, i) => (
                <motion.div
                  key={i}
                  className="hidden xl:flex items-center gap-2 px-3 py-2 glass-card rounded-2xl shadow-kawaii cursor-default absolute z-10 whitespace-nowrap"
                  style={{
                    [badge.side]: badge.side === "left" ? "-7.5rem" : "-7.5rem",
                    top: badge.top,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: 1.2 + badge.delay, duration: 0.4 },
                    scale:   { delay: 1.2 + badge.delay, duration: 0.4 },
                    y: {
                      duration: 3.5 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: badge.delay,
                    },
                  }}
                >
                  <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}>
                    <badge.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-pink-600">{badge.label}</span>
                </motion.div>
              ))}

              {/* The illustration itself — animated float */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-square w-full"
              >
                <KawaiiIllustration />
              </motion.div>

              {/*
                ── Stats: flex row BELOW the illustration — no absolute positioning.
                Hidden on the smallest phones (< xs), visible from xs+.
              */}
              <div className="flex gap-3 mt-3 sm:mt-4 justify-center px-2">
                {[
                  { emoji: "💻", value: "2+ yrs",  label: "Coding",   grad: "from-pink-300   to-pink-400"   },
                  { emoji: "⭐", value: "20+",      label: "Projects", grad: "from-purple-300 to-purple-400" },
                  { emoji: "🚀", value: "1k+",      label: "Commits",  grad: "from-sky-300    to-sky-400"    },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    className="flex-1 glass-card rounded-2xl px-2 py-2.5 sm:px-3 sm:py-3 flex items-center gap-2 border border-white/60 shadow-kawaii min-w-0"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${s.grad} flex items-center justify-center text-sm flex-shrink-0 shadow`}>
                      {s.emoji}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-gray-800 leading-none">{s.value}</div>
                      <div className="text-xs text-gray-400 font-semibold truncate">{s.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-hidden="true"
      >
        <span className="text-[10px] sm:text-xs text-pink-400 font-semibold tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 border-2 border-pink-300 rounded-full flex justify-center pt-1"
          animate={{ borderColor: ["#FFB3D1", "#C09AFF", "#FFB3D1"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-pink-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

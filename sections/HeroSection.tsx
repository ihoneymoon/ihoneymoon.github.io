"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

const TYPING_STRINGS = [
  "Software Engineer 🌸",
  "Frontend Developer ✨",
  "Fullstack Builder 🚀",
  "AI Enthusiast 🤖",
  "UI Engineer 💅",
  "React Developer ⚛️",
];

const FLOATING_BADGES = [
  { icon: Code2, label: "Clean Code", color: "from-pink-200 to-pink-300", x: "-10%", y: "20%", delay: 0 },
  { icon: Zap, label: "Fast Build", color: "from-purple-200 to-purple-300", x: "90%", y: "15%", delay: 0.4 },
  { icon: Heart, label: "Passion", color: "from-rose-200 to-pink-300", x: "85%", y: "65%", delay: 0.8 },
  { icon: Coffee, label: "Powered by ☕", color: "from-amber-100 to-orange-200", x: "-8%", y: "70%", delay: 0.6 },
  { icon: Cpu, label: "AI Projects", color: "from-sky-100 to-blue-200", x: "78%", y: "38%", delay: 1.0 },
  { icon: Layers, label: "Full Stack", color: "from-green-100 to-emerald-200", x: "-5%", y: "44%", delay: 1.2 },
];

const SPARKLE_POSITIONS = [
  { x: "15%", y: "20%", size: 12, delay: 0, duration: 2.5 },
  { x: "85%", y: "30%", size: 8, delay: 0.5, duration: 3 },
  { x: "75%", y: "80%", size: 10, delay: 1, duration: 2 },
  { x: "25%", y: "85%", size: 6, delay: 1.5, duration: 3.5 },
  { x: "50%", y: "10%", size: 14, delay: 0.8, duration: 2.8 },
  { x: "92%", y: "55%", size: 7, delay: 0.3, duration: 3.2 },
  { x: "8%", y: "50%", size: 9, delay: 1.2, duration: 2.2 },
];

function SparkleIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
    </svg>
  );
}

function TypingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

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
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
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

// Kawaii anime-style illustration as SVG
function KawaiiIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background glow circle */}
      <circle cx="200" cy="200" r="180" fill="url(#heroGrad)" opacity="0.15" />

      {/* Monitor */}
      <rect x="90" y="150" width="220" height="150" rx="16" fill="url(#monitorGrad)" />
      <rect x="95" y="155" width="210" height="140" rx="12" fill="#1A1A2E" />

      {/* Monitor screen content - code */}
      <rect x="105" y="165" width="80" height="6" rx="3" fill="#FF85B3" opacity="0.8" />
      <rect x="115" y="178" width="60" height="5" rx="2.5" fill="#C09AFF" opacity="0.8" />
      <rect x="125" y="190" width="100" height="5" rx="2.5" fill="#93C5FD" opacity="0.7" />
      <rect x="115" y="202" width="70" height="5" rx="2.5" fill="#6EE7B7" opacity="0.7" />
      <rect x="105" y="214" width="50" height="5" rx="2.5" fill="#FF85B3" opacity="0.8" />
      <rect x="115" y="226" width="90" height="5" rx="2.5" fill="#C09AFF" opacity="0.8" />
      <rect x="125" y="238" width="45" height="5" rx="2.5" fill="#FCD34D" opacity="0.7" />
      <rect x="105" y="250" width="140" height="5" rx="2.5" fill="#93C5FD" opacity="0.7" />
      <rect x="105" y="262" width="80" height="5" rx="2.5" fill="#FF85B3" opacity="0.6" />

      {/* Cursor blinking */}
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
      {/* Steam */}
      <path d="M328 296 C328 290 332 290 332 284" stroke="#FFB3D1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M335 294 C335 288 339 288 339 282" stroke="#C09AFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Plant / Succulent */}
      <rect x="40" y="305" width="50" height="35" rx="8" fill="url(#plantPotGrad)" />
      <ellipse cx="65" cy="308" rx="22" ry="18" fill="#4ADE80" />
      <ellipse cx="55" cy="296" rx="14" ry="12" fill="#22C55E" />
      <ellipse cx="75" cy="296" rx="14" ry="12" fill="#16A34A" />
      <ellipse cx="65" cy="290" rx="12" ry="10" fill="#4ADE80" />
      {/* Sparkle on plant */}
      <circle cx="72" cy="285" r="3" fill="#FCD34D" />
      <path d="M72 281 L72 289 M68 285 L76 285" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floating heart */}
      <motion.g
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M340 180 C340 180 350 165 360 175 C370 165 380 180 370 192 L360 202 L340 192 C330 182 340 180 340 180Z"
          fill="#FF85B3" opacity="0.8" />
      </motion.g>

      {/* Floating star */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 120px" }}
      >
        <path d="M60 110 L63 118 L72 118 L65 123 L68 132 L60 127 L52 132 L55 123 L48 118 L57 118Z"
          fill="#FCD34D" opacity="0.9" />
      </motion.g>

      {/* Floating pixel heart */}
      <rect x="350" y="240" width="8" height="8" fill="#FF85B3" opacity="0.7" />
      <rect x="358" y="240" width="8" height="8" fill="#FF85B3" opacity="0.7" />
      <rect x="342" y="248" width="8" height="8" fill="#FF85B3" opacity="0.7" />
      <rect x="350" y="248" width="8" height="16" fill="#FF85B3" opacity="0.7" />
      <rect x="358" y="248" width="8" height="16" fill="#FF85B3" opacity="0.7" />
      <rect x="366" y="248" width="8" height="8" fill="#FF85B3" opacity="0.7" />

      {/* Mouse */}
      <rect x="280" y="330" width="28" height="40" rx="14" fill="url(#mouseGrad)" />
      <rect x="293" y="332" width="1.5" height="16" rx="1" fill="white" opacity="0.4" />

      {/* Gradient definitions */}
      <defs>
        <radialGradient id="heroGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FF85B3" />
          <stop offset="100%" stopColor="#C09AFF" />
        </radialGradient>
        <linearGradient id="monitorGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB3D1" />
          <stop offset="100%" stopColor="#D8C0FF" />
        </linearGradient>
        <linearGradient id="kbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D5FF" />
          <stop offset="100%" stopColor="#FFD6E7" />
        </linearGradient>
        <linearGradient id="coffeeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="plantPotGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#F87171" />
        </linearGradient>
        <linearGradient id="mouseGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD6E7" />
          <stop offset="100%" stopColor="#D8C0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="orb orb-pink absolute w-96 h-96 -top-24 -left-24"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="orb orb-purple absolute w-80 h-80 top-1/3 -right-20"
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="orb orb-rose absolute w-72 h-72 bottom-24 left-1/4"
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Sparkles */}
      {SPARKLE_POSITIONS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: s.x, top: s.y }}
          animate={{
            opacity: [1, 0.3, 1],
            scale: [1, 0.6, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        >
          <SparkleIcon size={s.size} color="#FFB3D1" />
        </motion.div>
      ))}

      {/* Floating badges */}
      {FLOATING_BADGES.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 glass-card rounded-2xl shadow-kawaii cursor-default"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: 1 + badge.delay, duration: 0.5 },
            scale: { delay: 1 + badge.delay, duration: 0.5 },
            y: {
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay,
            },
          }}
        >
          <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
            <badge.icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold text-pink-600 whitespace-nowrap">
            {badge.label}
          </span>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-20"
      >
        {/* Left: Text content */}
        <div className="text-center lg:text-left space-y-6">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-pink-200/60 shadow-kawaii"
          >
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-xl"
            >
              👋
            </motion.span>
            <span className="text-sm font-700 text-pink-500">
              Welcome to my portfolio!
            </span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </motion.div>

          {/* Main heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="section-title"
            >
              <span className="text-gray-800">Hi, I&apos;m </span>
              <span className="text-gradient-kawaii">Pinky Dev</span>
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block ml-2"
              >
                🌸
              </motion.span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl font-bold h-10"
            >
              <TypingText />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            I build{" "}
            <span className="text-pink-500 font-bold">cute things</span> that
            solve real problems. Passionate about{" "}
            <span className="text-purple-500 font-bold">
              beautiful interfaces
            </span>
            , clean code, and AI-powered applications. ✨
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-kawaii inline-flex items-center justify-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4" />
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="btn-outline-kawaii inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
              Find me on
            </span>
            <div className="flex gap-2">
              {[
                { Icon: Github, href: "https://github.com", color: "hover:bg-gray-100 hover:text-gray-700" },
                { Icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-50 hover:text-blue-600" },
                { Icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-50 hover:text-sky-500" },
                { Icon: Mail, href: "mailto:hello@pinkydev.com", color: "hover:bg-pink-50 hover:text-pink-500" },
              ].map(({ Icon, href, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 ${color} border border-white/60`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind illustration */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 blur-3xl scale-75" />

          {/* Illustration container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            <KawaiiIllustration />
          </motion.div>

          {/* Stats floating cards */}
          <motion.div
            className="absolute -bottom-4 -left-4 sm:-left-8 glass-card rounded-2xl px-4 py-3 shadow-kawaii border border-pink-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
            transition={{
              opacity: { delay: 1.2 },
              x: { delay: 1.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-black text-gray-800">2+ yrs</div>
                <div className="text-xs text-gray-400 font-semibold">Coding 💻</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 sm:-right-8 glass-card rounded-2xl px-4 py-3 shadow-glow-purple border border-purple-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 1.4 },
              x: { delay: 1.4 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-black text-gray-800">20+</div>
                <div className="text-xs text-gray-400 font-semibold">Projects ✨</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-pink-400 font-semibold tracking-widest uppercase">
          Scroll down
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

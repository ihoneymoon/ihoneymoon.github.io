"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Sparkles, Heart, ArrowUp } from "lucide-react";

const SPARKLE_POS = [
  { x: "5%", delay: 0, size: 10 },
  { x: "15%", delay: 0.3, size: 7 },
  { x: "30%", delay: 0.6, size: 12 },
  { x: "50%", delay: 0.9, size: 8 },
  { x: "70%", delay: 0.4, size: 11 },
  { x: "85%", delay: 0.7, size: 6 },
  { x: "95%", delay: 0.2, size: 9 },
];

function SparkleIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@pinkydev.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Glow line */}
      <div className="relative h-px mx-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Sparkles row */}
      <div className="relative h-8 overflow-visible">
        {SPARKLE_POS.map((s, i) => (
          <motion.div
            key={i}
            className="absolute -top-2"
            style={{ left: s.x }}
            animate={{
              y: [-4, -12, -4],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SparkleIcon
              size={s.size}
              color={i % 2 === 0 ? "#FFB3D1" : "#C09AFF"}
            />
          </motion.div>
        ))}
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center shadow-kawaii">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-2xl text-gradient-kawaii">
                pinky.dev
              </span>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs">
              Building cute things that solve real problems. Passionate about
              beautiful interfaces and clean code. 🌸
            </p>
            <div className="flex items-center gap-1.5 text-sm text-gray-400 font-semibold">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-black text-gray-700 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="block text-sm text-gray-400 font-medium hover:text-pink-500 transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  → {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact & socials */}
          <div>
            <h4 className="font-black text-gray-700 mb-4">Connect</h4>
            <div className="space-y-3 mb-5">
              <a
                href="mailto:hello@pinkydev.com"
                className="block text-sm text-gray-400 font-medium hover:text-pink-500 transition-colors"
              >
                📧 hello@pinkydev.com
              </a>
              <div className="text-sm text-gray-400 font-medium">
                🌍 Remote · Worldwide
              </div>
            </div>
            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 border border-white/60 transition-all"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-pink-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-400 font-medium">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            </motion.span>
            <span>by</span>
            <span className="text-gradient-kawaii font-black">Pinky Dev</span>
            <span>· {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-300 font-medium">
              Built with Next.js · TailwindCSS · Framer Motion ✨
            </span>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full btn-kawaii flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60 blur-sm" />
    </footer>
  );
}

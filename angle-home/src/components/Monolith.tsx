"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface MonolithProps {
  onClick: () => void;
}

export default function Monolith({ onClick }: MonolithProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer select-none"
      style={{
        width: "min(30vw, 400px)",
        minWidth: "280px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative px-8 py-12 flex flex-col items-center justify-center"
        style={{
          backgroundColor: isHovered ? "var(--void)" : "var(--paper)",
          border: `2px solid ${isHovered ? "var(--paper)" : "transparent"}`,
        }}
        initial={false}
        animate={{
          backgroundColor: isHovered ? "var(--void)" : "var(--paper)",
        }}
        transition={{ duration: 0 }}
      >
        {/* Corner markers */}
        <div
          className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
          style={{
            borderColor: isHovered ? "var(--paper)" : "var(--void)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2"
          style={{
            borderColor: isHovered ? "var(--paper)" : "var(--void)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2"
          style={{
            borderColor: isHovered ? "var(--paper)" : "var(--void)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
          style={{
            borderColor: isHovered ? "var(--paper)" : "var(--void)",
          }}
        />

        {/* Main Title */}
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-ultra-tight leading-none"
          style={{
            color: isHovered ? "var(--paper)" : "var(--void)",
            fontFamily: "'Inter Tight', sans-serif",
          }}
        >
          ANGLE
        </h1>

        {/* Divider line */}
        <div
          className="w-full h-px my-4"
          style={{
            backgroundColor: isHovered
              ? "rgba(230, 230, 230, 0.3)"
              : "rgba(8, 8, 8, 0.2)",
          }}
        />

        {/* Status text */}
        <span
          className="mono-data tracking-widest"
          style={{
            color: isHovered
              ? "rgba(230, 230, 230, 0.7)"
              : "rgba(8, 8, 8, 0.6)",
          }}
        >
          SYSTEM STATUS: FINAL
        </span>

        {/* Click indicator */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            y: isHovered ? 0 : 2,
          }}
          transition={{
            duration: 0.3,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        >
          <span
            className="mono-data text-xs"
            style={{
              color: "var(--paper)",
            }}
          >
            [ CLICK TO ACCESS ]
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

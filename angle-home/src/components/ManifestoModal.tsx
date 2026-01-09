"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManifestoModal({
  isOpen,
  onClose,
}: ManifestoModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "var(--void)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container - The Black Box */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              style={{
                backgroundColor: "var(--void)",
                border: "1px solid rgba(230, 230, 230, 0.3)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Technical header */}
              <div
                className="sticky top-0 flex items-center justify-between px-6 py-4"
                style={{
                  backgroundColor: "var(--void)",
                  borderBottom: "1px solid rgba(230, 230, 230, 0.2)",
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="mono-data" style={{ color: "var(--paper)" }}>
                    DOC.MANIFESTO-001
                  </span>
                  <span
                    className="mono-data"
                    style={{ color: "rgba(230, 230, 230, 0.4)" }}
                  >
                    CLASSIFICATION: OPEN
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="mono-data px-4 py-2 transition-all duration-100 hover:bg-paper hover:text-void"
                  style={{
                    color: "var(--paper)",
                    border: "1px solid rgba(230, 230, 230, 0.3)",
                  }}
                >
                  [ CLOSE ]
                </button>
              </div>

              {/* Content */}
              <div className="px-8 py-12 md:px-16 md:py-20">
                {/* Main manifesto text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-ultra-tight leading-tight mb-8"
                    style={{
                      color: "var(--paper)",
                      fontFamily: "'Inter Tight', sans-serif",
                    }}
                  >
                    WE MEASURE
                    <br />
                    THE BOX.
                  </h2>
                </motion.div>

                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Manifesto paragraphs */}
                  <p
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ color: "rgba(230, 230, 230, 0.8)" }}
                  >
                    Strategy isn&apos;t magic. It&apos;s measurement. While others chase
                    inspiration, we chase information. We don&apos;t believe in
                    creative leaps—we believe in calculated steps.
                  </p>

                  <p
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ color: "rgba(230, 230, 230, 0.8)" }}
                  >
                    The box exists. Everyone talks about thinking outside of it.
                    We&apos;d rather understand its exact dimensions, its load-bearing
                    walls, its structural weaknesses. That&apos;s where opportunity
                    hides.
                  </p>

                  <p
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ color: "rgba(230, 230, 230, 0.8)" }}
                  >
                    Every angle tells a story. Every measurement reveals a truth.
                    Every constraint is a canvas.
                  </p>

                  {/* Signature block */}
                  <div
                    className="pt-8 mt-12"
                    style={{
                      borderTop: "1px solid rgba(230, 230, 230, 0.2)",
                    }}
                  >
                    <span
                      className="mono-data"
                      style={{ color: "rgba(230, 230, 230, 0.5)" }}
                    >
                      ANGLE STRATEGY SYSTEMS — EST. 2024
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Technical footer */}
              <div
                className="px-6 py-4"
                style={{
                  borderTop: "1px solid rgba(230, 230, 230, 0.2)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="mono-data"
                    style={{ color: "rgba(230, 230, 230, 0.3)" }}
                  >
                    REV.FINAL
                  </span>
                  <div className="flex items-center gap-4">
                    <span
                      className="mono-data"
                      style={{ color: "rgba(230, 230, 230, 0.3)" }}
                    >
                      A
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "var(--signal-a)" }}
                    >
                      ●
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "rgba(230, 230, 230, 0.3)" }}
                    >
                      N
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "var(--signal-n)" }}
                    >
                      ●
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "rgba(230, 230, 230, 0.3)" }}
                    >
                      G
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "var(--signal-g)" }}
                    >
                      ●
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "rgba(230, 230, 230, 0.3)" }}
                    >
                      L
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "var(--signal-l)" }}
                    >
                      ●
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "rgba(230, 230, 230, 0.3)" }}
                    >
                      E
                    </span>
                    <span
                      className="mono-data"
                      style={{ color: "var(--signal-e)" }}
                    >
                      ●
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner brackets */}
              <div
                className="absolute top-2 left-2 w-6 h-6 border-t border-l"
                style={{ borderColor: "rgba(230, 230, 230, 0.3)" }}
              />
              <div
                className="absolute top-2 right-2 w-6 h-6 border-t border-r"
                style={{ borderColor: "rgba(230, 230, 230, 0.3)" }}
              />
              <div
                className="absolute bottom-2 left-2 w-6 h-6 border-b border-l"
                style={{ borderColor: "rgba(230, 230, 230, 0.3)" }}
              />
              <div
                className="absolute bottom-2 right-2 w-6 h-6 border-b border-r"
                style={{ borderColor: "rgba(230, 230, 230, 0.3)" }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

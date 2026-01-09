'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManifestoModal({ isOpen, onClose }: ManifestoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-void/90 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-8"
          >
            <div 
              className="relative w-full max-w-4xl border border-paper/20 bg-void p-12 md:p-16"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 font-mono text-xs uppercase tracking-wider text-paper/50 transition-colors hover:text-paper"
              >
                [ CLOSE ]
              </button>
              
              {/* Header */}
              <div className="mb-12 border-b border-paper/20 pb-6">
                <p className="font-mono text-xs uppercase tracking-wider text-paper/50">
                  DOCUMENT TYPE: MANIFESTO
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-paper/50">
                  CLASSIFICATION: OPEN
                </p>
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <h2 className="font-sans text-4xl font-black uppercase tracking-[-0.05em] text-paper md:text-6xl">
                  WE MEASURE<br />THE BOX.
                </h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-paper/70">
                      Strategy is not about thinking outside the box. It&apos;s about understanding every dimension of the box itself.
                    </p>
                    <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-paper/70">
                      We calculate angles. We find leverage. We transform constraints into coordinates for action.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-paper/70">
                      Every problem has geometry. Every solution has precision. We don&apos;t guess—we triangulate.
                    </p>
                    <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-paper/70">
                      The future belongs to those who can see the angles others miss.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-12 border-t border-paper/20 pt-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-wider text-paper/30">
                    ANGLE STRATEGY SYSTEMS
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-paper/30">
                    EST. 2024
                  </p>
                </div>
              </div>
              
              {/* Corner markers */}
              <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-paper/50" />
              <div className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-paper/50" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-paper/50" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-paper/50" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

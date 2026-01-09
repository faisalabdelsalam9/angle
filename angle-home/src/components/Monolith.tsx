'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ManifestoModal } from './ManifestoModal';

export function Monolith() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        className="absolute left-1/2 top-1/2 z-50 flex w-[30vw] min-w-[280px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-paper/30 px-8 py-12 transition-none md:py-16"
        style={{
          backgroundColor: isHovered ? '#080808' : '#E6E6E6',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        {/* Main title */}
        <h1
          className="font-sans text-5xl font-black uppercase tracking-[-0.05em] transition-none md:text-7xl lg:text-8xl"
          style={{
            color: isHovered ? '#E6E6E6' : '#080808',
          }}
        >
          ANGLE
        </h1>
        
        {/* Status line */}
        <p
          className="mt-4 font-mono text-[10px] uppercase tracking-wider transition-none md:text-xs"
          style={{
            color: isHovered ? 'rgba(230, 230, 230, 0.7)' : 'rgba(8, 8, 8, 0.7)',
          }}
        >
          SYSTEM STATUS: FINAL
        </p>
        
        {/* Instruction */}
        <p
          className="mt-6 font-mono text-[9px] uppercase tracking-widest transition-none"
          style={{
            color: isHovered ? 'rgba(230, 230, 230, 0.4)' : 'rgba(8, 8, 8, 0.4)',
          }}
        >
          [ CLICK TO ACCESS ]
        </p>
        
        {/* Corner markers */}
        <div 
          className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t transition-none"
          style={{ borderColor: isHovered ? '#E6E6E6' : '#080808' }}
        />
        <div 
          className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t transition-none"
          style={{ borderColor: isHovered ? '#E6E6E6' : '#080808' }}
        />
        <div 
          className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l transition-none"
          style={{ borderColor: isHovered ? '#E6E6E6' : '#080808' }}
        />
        <div 
          className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r transition-none"
          style={{ borderColor: isHovered ? '#E6E6E6' : '#080808' }}
        />
      </motion.button>
      
      <ManifestoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

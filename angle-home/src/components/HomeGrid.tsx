'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

// Column configuration
const COLUMNS = ['A', 'N', 'G', 'L', 'E'] as const;
type ColumnType = typeof COLUMNS[number];

const ROWS = 12;

// Signal colors for each column
const SIGNAL_COLORS: Record<ColumnType, string> = {
  A: '#FF4400', // International Orange
  N: '#00FF41', // Phosphor Green
  G: '#3457D5', // Blueprint Cobalt
  L: '#E3FF00', // Safety Yellow
  E: '#8A0B0B', // Infrared Crimson
};

// Generate random coordinate code
const generateCoordinate = (col: ColumnType, row: number): string => {
  const sector = Math.floor(Math.random() * 99).toString().padStart(2, '0');
  return `SEC.${col}-${(row + 1).toString().padStart(2, '0')}.${sector}`;
};

interface GridCellProps {
  column: ColumnType;
  row: number;
  colIndex: number;
}

function GridCell({ column, row, colIndex }: GridCellProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [coordinate, setCoordinate] = useState('');
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setCoordinate(generateCoordinate(column, row));
  }, [column, row]);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  const signalColor = SIGNAL_COLORS[column];
  
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex cursor-crosshair items-center justify-center border-b border-r border-paper/20"
      style={{
        backgroundColor: isHovered ? signalColor : 'transparent',
      }}
      initial={false}
      animate={{
        backgroundColor: isHovered ? signalColor : 'rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.05 }}
    >
      {/* Cell content - only show on certain cells for visual interest */}
      {(row === 0 || (row % 4 === 0 && colIndex % 2 === 0)) && (
        <span
          className="font-mono text-[8px] uppercase tracking-widest transition-none md:text-[10px]"
          style={{
            color: isHovered ? '#080808' : 'rgba(230, 230, 230, 0.15)',
          }}
        >
          {column}{(row + 1).toString().padStart(2, '0')}
        </span>
      )}
      
      {/* Coordinate reveal on hover */}
      {isHovered && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-1 right-1 font-mono text-[7px] uppercase tracking-wider md:text-[8px]"
          style={{ color: '#080808' }}
        >
          [ {coordinate} ]
        </motion.span>
      )}
      
      {/* Top-left corner indicator on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-1 top-1 h-2 w-2 border-l border-t"
          style={{ borderColor: '#080808' }}
        />
      )}
    </motion.div>
  );
}

export function HomeGrid() {
  // Generate grid cells
  const cells = useMemo(() => {
    const result = [];
    for (let row = 0; row < ROWS; row++) {
      for (let colIndex = 0; colIndex < COLUMNS.length; colIndex++) {
        const column = COLUMNS[colIndex];
        result.push(
          <GridCell
            key={`${column}-${row}`}
            column={column}
            row={row}
            colIndex={colIndex}
          />
        );
      }
    }
    return result;
  }, []);
  
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-void">
      {/* Main Grid */}
      <div 
        className="grid h-full w-full border-l border-t border-paper/20"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
        }}
      >
        {cells}
      </div>
      
      {/* Column Labels - Top */}
      <div className="pointer-events-none absolute left-0 top-0 flex w-full">
        {COLUMNS.map((col) => (
          <div
            key={col}
            className="flex flex-1 items-start justify-center pt-2"
          >
            <span 
              className="font-sans text-xs font-bold uppercase tracking-wider md:text-sm"
              style={{ color: SIGNAL_COLORS[col] }}
            >
              {col}
            </span>
          </div>
        ))}
      </div>
      
      {/* Row indicators - Left side */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-8 flex-col">
        {Array.from({ length: ROWS }, (_, i) => (
          <div
            key={i}
            className="flex flex-1 items-center justify-center"
          >
            <span className="font-mono text-[8px] uppercase tracking-wider text-paper/20">
              {(i + 1).toString().padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
      
      {/* Status bar - Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-paper/20 bg-void/80 px-4 py-2 backdrop-blur-sm">
        <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40">
          ANGLE STRATEGY INTERFACE v1.0
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40">
          GRID: 5×12 | COLS: A-N-G-L-E
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40">
          STATUS: OPERATIONAL
        </span>
      </div>
    </div>
  );
}

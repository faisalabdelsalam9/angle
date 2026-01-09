"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

// Column configuration with signal colors
const COLUMNS = [
  { id: "A", color: "var(--signal-a)", label: "ANGLE" },
  { id: "N", color: "var(--signal-n)", label: "NAVIGATE" },
  { id: "G", color: "var(--signal-g)", label: "GUIDE" },
  { id: "L", color: "var(--signal-l)", label: "LEVERAGE" },
  { id: "E", color: "var(--signal-e)", label: "EXECUTE" },
];

const ROWS = 12;

// Generate random coordinate code
const generateCoordinate = (col: string): string => {
  const section = Math.floor(Math.random() * 99)
    .toString()
    .padStart(2, "0");
  return `[ SEC.${col}-${section} ]`;
};

interface CellProps {
  column: (typeof COLUMNS)[number];
  row: number;
  onHover: (isHovered: boolean, col: string, row: number) => void;
}

const GridCell = ({ column, row, onHover }: CellProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coordinate, setCoordinate] = useState("");

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setCoordinate(generateCoordinate(column.id));
    onHover(true, column.id, row);
  }, [column.id, row, onHover]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    onHover(false, column.id, row);
  }, [column.id, row, onHover]);

  return (
    <motion.div
      className="grid-cell relative flex items-end justify-start p-2 cursor-crosshair overflow-hidden"
      style={{
        backgroundColor: isHovered ? column.color : "transparent",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={false}
      animate={{
        backgroundColor: isHovered ? column.color : "transparent",
      }}
      transition={{ duration: 0 }}
    >
      {/* Cell coordinate (shown on hover) */}
      {isHovered && (
        <motion.span
          className="mono-data absolute top-2 right-2"
          style={{ color: "var(--void)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          {coordinate}
        </motion.span>
      )}

      {/* Column identifier (bottom left) */}
      <span
        className="mono-data text-xs"
        style={{
          color: isHovered ? "var(--void)" : "rgba(230, 230, 230, 0.4)",
        }}
      >
        {column.id}
        {row.toString().padStart(2, "0")}
      </span>
    </motion.div>
  );
};

interface HomeGridProps {
  onCellHover?: (col: string | null, row: number | null) => void;
}

export default function HomeGrid({ onCellHover }: HomeGridProps) {
  const [activeCell, setActiveCell] = useState<{
    col: string;
    row: number;
  } | null>(null);

  const handleCellHover = useCallback(
    (isHovered: boolean, col: string, row: number) => {
      if (isHovered) {
        setActiveCell({ col, row });
        onCellHover?.(col, row);
      } else {
        setActiveCell(null);
        onCellHover?.(null, null);
      }
    },
    [onCellHover]
  );

  return (
    <div
      className="fixed inset-0 w-full h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(12, 1fr)",
      }}
    >
      {/* Render all grid cells */}
      {Array.from({ length: ROWS }).map((_, rowIndex) =>
        COLUMNS.map((column) => (
          <GridCell
            key={`${column.id}-${rowIndex}`}
            column={column}
            row={rowIndex + 1}
            onHover={handleCellHover}
          />
        ))
      )}

      {/* Active column indicator (top) */}
      {activeCell && (
        <motion.div
          className="fixed top-0 left-0 w-full h-1 pointer-events-none"
          style={{
            backgroundColor: COLUMNS.find((c) => c.id === activeCell.col)
              ?.color,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </div>
  );
}

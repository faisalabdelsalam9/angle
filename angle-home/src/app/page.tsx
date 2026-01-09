"use client";

import { useState } from "react";
import HomeGrid from "@/components/HomeGrid";
import Monolith from "@/components/Monolith";
import ManifestoModal from "@/components/ManifestoModal";

export default function Home() {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [activeCell, setActiveCell] = useState<{
    col: string | null;
    row: number | null;
  }>({ col: null, row: null });

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Grid */}
      <HomeGrid
        onCellHover={(col, row) => setActiveCell({ col, row })}
      />

      {/* Centered Monolith */}
      <Monolith onClick={() => setIsManifestoOpen(true)} />

      {/* Active cell indicator (bottom left corner) */}
      <div
        className="fixed bottom-4 left-4 z-40 mono-data"
        style={{ color: "rgba(230, 230, 230, 0.5)" }}
      >
        {activeCell.col ? (
          <span>
            SECTOR: {activeCell.col}-{activeCell.row?.toString().padStart(2, "0")}
          </span>
        ) : (
          <span>AWAITING INPUT</span>
        )}
      </div>

      {/* System status (bottom right corner) */}
      <div
        className="fixed bottom-4 right-4 z-40 mono-data flex items-center gap-2"
        style={{ color: "rgba(230, 230, 230, 0.5)" }}
      >
        <span className="w-2 h-2 rounded-full bg-signal-n animate-pulse" />
        <span>SYSTEM ACTIVE</span>
      </div>

      {/* Column labels (top) */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="grid grid-cols-5 w-full">
          {["A", "N", "G", "L", "E"].map((letter) => (
            <div
              key={letter}
              className="flex items-center justify-center py-3"
            >
              <span
                className="mono-data text-sm"
                style={{
                  color:
                    activeCell.col === letter
                      ? "var(--paper)"
                      : "rgba(230, 230, 230, 0.3)",
                }}
              >
                COL.{letter}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto Modal */}
      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
      />
    </main>
  );
}

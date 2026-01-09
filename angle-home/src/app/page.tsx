'use client';

import { HomeGrid, Monolith, NoiseTexture } from '@/components';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* The Interactive Grid */}
      <HomeGrid />
      
      {/* The Monolith - Centerpiece */}
      <Monolith />
      
      {/* Noise/Grain Texture Overlay */}
      <NoiseTexture />
    </main>
  );
}

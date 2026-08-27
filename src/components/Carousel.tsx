"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[450px] group rounded-xl overflow-hidden shadow-2xl border-4 border-white">
      {/* Images */}
      <div className="w-full h-full relative">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image 
              src={src} 
              alt={`Gallery Image ${idx + 1}`} 
              fill 
              className="object-cover" 
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-brand-blue text-white w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-brand-blue text-white w-12 h-12 flex items-center justify-center rounded-lg border-2 border-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Play/Pause & Dots Container */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-6">
        <div className="flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full border border-white transition-all ${
                idx === currentIndex ? 'bg-white scale-110' : 'bg-transparent hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-md backdrop-blur-sm transition-colors border border-white/20"
        >
          {isPaused ? <Play size={18} /> : <Pause size={18} />}
        </button>
      </div>
    </div>
  );
}

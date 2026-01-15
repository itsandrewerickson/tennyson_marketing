"use client";

import Image from "next/image";
import { property, formatPrice } from "@/lib/propertyData";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/AI-render.png"
          alt={`${property.address} - Point Loma Development Opportunity`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="inline-block bg-zinc-950/80 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10 shadow-xl">
          <p className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">
            Exclusive Development Opportunity
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Opportunity Knocks in Point Loma
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {property.address} • Fully Entitled with 8 Approved ADUs
        </p>

        {/* Swapped Label/Price to be Above Stats */}
        <div className="mb-10">
          <p className="text-zinc-950 text-5xl md:text-6xl font-black drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)] tracking-tight">
            {formatPrice(property.askingPrice)}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-lg md:text-xl">
          <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-xl border border-white/40 shadow-xl">
            <span className="text-zinc-950 font-black">{property.development.totalNewADUs}</span>
            <span className="block text-zinc-900 text-sm font-bold uppercase tracking-wider mt-1">Approved ADUs</span>
          </div>
          <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-xl border border-white/40 shadow-xl">
            <span className="text-zinc-950 font-black">{property.development.totalUnitsPostDev}</span>
            <span className="block text-zinc-900 text-sm font-bold uppercase tracking-wider mt-1">Total Units</span>
          </div>
          <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-xl border border-white/40 shadow-xl">
            <span className="text-zinc-950 font-black">{property.lotSizeSF.toLocaleString()}</span>
            <span className="block text-zinc-900 text-sm font-bold uppercase tracking-wider mt-1">SF Lot</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#email-capture"
            className="bg-zinc-950 hover:bg-black text-white font-bold px-10 py-5 rounded-xl transition-all hover:scale-105 active:scale-95 text-lg shadow-2xl border border-white/10"
          >
            Download Full Plans
          </a>
          <a
            href="#opportunity"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold px-10 py-5 rounded-xl border border-white/30 transition-all hover:scale-105 active:scale-95 text-lg shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

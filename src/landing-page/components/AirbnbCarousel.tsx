"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const airbnbImages = [
    "/images/airbnb/Best 1.jpeg",
    "/images/airbnb/Best 2.jpeg",
    "/images/airbnb/Best 3.jpeg",
    "/images/airbnb/Best 4.jpeg",
    "/images/airbnb/Best 5.jpeg",
    "/images/airbnb/02e12203-3a43-4d38-9e71-3c470365053c.jpeg",
    "/images/airbnb/2d34c126-d7bd-4e50-be7f-485472b3bf43.jpeg",
    "/images/airbnb/4849e647-922e-4c29-82ab-a0c8ee83ff57.jpeg",
    "/images/airbnb/562e6a19-6ba4-4d97-8077-6ad30a728d4c.jpeg",
    "/images/airbnb/57062d4b-c29a-45e3-b157-4b63f97aae15.jpeg",
    "/images/airbnb/6d3e8c5e-644c-465e-9443-64b9309e168c.jpeg",
    "/images/airbnb/7a0664d1-9e54-4324-a756-5392253da34c.png",
    "/images/airbnb/7b3b581d-0c91-476c-8d04-52e006093787.jpeg",
    "/images/airbnb/843364b7-af75-4c58-a8a8-645e203791cf.jpeg",
    "/images/airbnb/9ca0c5ae-b505-40e9-8215-ee4101604345.jpeg",
    "/images/airbnb/a1d1e909-95ce-49b8-9440-6738b7241ce8.jpeg",
    "/images/airbnb/a3acfdfc-fcc1-4649-8353-a5a1a4a3af54.jpeg",
    "/images/airbnb/a4c56a07-f044-4aa0-99ef-c70653adfeda.jpeg",
    "/images/airbnb/b18f2dea-01dc-4ddc-99b3-ea99bfa4cc74.jpeg",
    "/images/airbnb/b1f43a9e-9448-43a2-926d-7bc382f7ddc1.jpeg",
    "/images/airbnb/c0c9ebb7-1bc6-478a-8b2b-eb4b13a512ab.jpeg",
    "/images/airbnb/ca6e5ca1-0da8-4207-ac69-f1f1115c2349.jpeg",
    "/images/airbnb/ce916ad9-b624-406f-8f66-74ccfd0a3af8.jpeg",
    "/images/airbnb/f3a1e0a1-7891-4f81-8221-b0662325ba42.jpeg",
];

export default function AirbnbCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % airbnbImages.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + airbnbImages.length) % airbnbImages.length);

    return (
        <section className="bg-white py-20 px-6 border-y border-zinc-100 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[#C9A227] font-bold tracking-widest uppercase text-sm mb-2 block">
                        Proven Income Generation
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
                        Current Airbnb Performance
                    </h2>
                    <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
                        This property currently operates as a highly successful Airbnb, generating consistent cash flow with a $4,000 monthly gross income.
                    </p>
                </div>

                <div className="relative group max-w-4xl mx-auto">
                    <div className="aspect-[16/9] relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-100">
                        <Image
                            src={airbnbImages[currentIndex]}
                            alt={`Airbnb Photo ${currentIndex + 1}`}
                            fill
                            className="object-cover transition-opacity duration-500"
                            priority={currentIndex === 0}
                        />

                        {/* Overlay for better text visibility if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-zinc-950 p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-zinc-950 p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                        {airbnbImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-[#C9A227]" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                                    }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="text-[#C9A227] text-3xl font-black mb-1">$4,000</p>
                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Monthly Gross</p>
                    </div>
                    <div className="text-center border-l border-zinc-100">
                        <p className="text-[#C9A227] text-3xl font-black mb-1">Active</p>
                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">License Status</p>
                    </div>
                    <div className="text-center border-l border-zinc-100">
                        <p className="text-[#C9A227] text-3xl font-black mb-1">Superhost</p>
                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Rating</p>
                    </div>
                    <div className="text-center border-l border-zinc-100">
                        <p className="text-[#C9A227] text-3xl font-black mb-1">Turnkey</p>
                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Operations</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

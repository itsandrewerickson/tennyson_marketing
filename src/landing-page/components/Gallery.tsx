"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/render-4.png", alt: "Architectural Render View 4", category: "Renders" },
  { src: "/images/render-5.png", alt: "Architectural Render View 5", category: "Renders" },
  { src: "/images/render-6.png", alt: "Architectural Render View 6", category: "Renders" },
  { src: "/images/render-7.png", alt: "Panoramic Property View", category: "Renders" },
  { src: "/images/drone-1.jpg", alt: "Aerial View", category: "Property" },
  { src: "/images/drone-2.jpg", alt: "Drone View", category: "Property" },
  { src: "/images/drone-3.png", alt: "Aerial Property Perspective", category: "Property" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F5F0] section-padding" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D3436] mb-4">
          Property Gallery
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                <p className="text-[#C9A227] text-xs">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#C9A227]"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl hover:text-[#C9A227] p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
            }}
          >
            &#8249;
          </button>

          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white text-4xl hover:text-[#C9A227] p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 text-white text-center">
            <p className="font-medium">{images[selectedImage].alt}</p>
            <p className="text-sm text-gray-400">{selectedImage + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}

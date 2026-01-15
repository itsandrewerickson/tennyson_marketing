"use client";

import Image from "next/image";
import { property } from "@/lib/propertyData";

export default function Footer() {
  return (
    <footer className="bg-[#2D3436] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Image
            src="/images/logo-white.png"
            alt={property.company}
            width={180}
            height={50}
            className="h-10 w-auto"
          />

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#opportunity" className="hover:text-[#C9A227] transition-colors">The Opportunity</a>
            <a href="#development" className="hover:text-[#C9A227] transition-colors">Development</a>
            <a href="#gallery" className="hover:text-[#C9A227] transition-colors">Gallery</a>
            <a href="#location" className="hover:text-[#C9A227] transition-colors">Location</a>
            <a href="#contact" className="hover:text-[#C9A227] transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-gray-400 text-sm space-y-4">
            <p>
              {property.address}, {property.city}, {property.state} {property.zip}
            </p>

            <p className="max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> All information is believed to be accurate but should be independently verified.
              Financial projections are estimates only and do not guarantee future performance.
              Buyer responsible for confirming zoning, permits, and development feasibility.
              Plans subject to final city approval.
            </p>

            <p>
              &copy; {new Date().getFullYear()} {property.company}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

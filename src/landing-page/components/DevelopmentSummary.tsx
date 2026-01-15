"use client";

import Image from "next/image";
import { property } from "@/lib/propertyData";

export default function DevelopmentSummary() {
  return (
    <section className="bg-white section-padding" id="development">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D3436] mb-4">
          Development Summary
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Site Plan / Render */}
          <div
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-white border border-gray-100"
            onClick={() => (document.getElementById('plan-modal') as HTMLDialogElement)?.showModal()}
          >
            <div className="absolute inset-0 p-4 flex items-center justify-center">
              <Image
                src="/images/tennyson-adus-outline.jpg"
                alt="Tennyson ADUs Outline"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-opacity">
                View Fullscreen
              </span>
            </div>
          </div>

          <dialog id="plan-modal" className="modal p-0 rounded-xl backdrop:bg-black/80 w-[90vw] h-[90vh] max-w-7xl max-h-[900px]">
            <div className="relative w-full h-full bg-white p-2">
              <button
                onClick={() => (document.getElementById('plan-modal') as HTMLDialogElement)?.close()}
                className="absolute top-4 right-4 z-50 bg-white/90 p-2 rounded-full hover:bg-[#C9A227] hover:text-white transition-colors shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-full">
                <Image
                  src="/images/tennyson-adus-outline.jpg"
                  alt="Tennyson ADUs Outline"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#2D3436] mb-6">
              From 1 Home to 9 Income-Producing Units
            </h3>

            {/* Existing */}
            <div className="mb-8">
              <h4 className="text-[#C9A227] font-semibold uppercase tracking-wide text-sm mb-3">
                Existing Property
              </h4>
              <div className="bg-[#F5F5F0] rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#666666]">Main House</span>
                  <span className="font-medium text-[#2D3436]">{property.mainHouse.bedrooms}BR / {property.mainHouse.bathrooms}BA • {property.mainHouse.livingSF.toLocaleString()} SF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Condition</span>
                  <span className="font-medium text-[#2D3436]">{property.mainHouse.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Year Built</span>
                  <span className="font-medium text-[#2D3436]">{property.mainHouse.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Proposed */}
            <div className="mb-8">
              <h4 className="text-[#C9A227] font-semibold uppercase tracking-wide text-sm mb-3">
                Approved Development
              </h4>
              <div className="bg-[#F5F5F0] rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#666666]">New ADUs</span>
                  <span className="font-medium text-[#2D3436]">{property.development.totalNewADUs} units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Unit Type</span>
                  <span className="font-medium text-[#2D3436]">{property.development.unitType} • {property.development.unitSize} SF each</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Ceiling Type</span>
                  <span className="font-medium text-[#2D3436]">{property.development.ceilingType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Market Rate</span>
                  <span className="font-medium text-[#2D3436]">{property.development.marketRateUnits} units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Deed Restricted</span>
                  <span className="font-medium text-[#2D3436]">{property.development.deedRestrictedUnits} units</span>
                </div>
              </div>
            </div>

            {/* Post-Development */}
            <div className="bg-[#2D3436] text-white rounded-lg p-6">
              <h4 className="text-[#C9A227] font-semibold uppercase tracking-wide text-sm mb-4">
                Post-Development Totals
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#C9A227]">{property.development.totalUnitsPostDev}</p>
                  <p className="text-gray-400 text-sm">Total Units</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#C9A227]">{property.development.totalLivingSFPostDev.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">Total SF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

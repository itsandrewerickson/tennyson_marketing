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
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/site-plan.jpg"
              alt="Proposed Development Site Plan"
              fill
              className="object-cover"
            />
          </div>

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

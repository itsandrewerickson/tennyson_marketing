"use client";

import { property } from "@/lib/propertyData";

export default function Opportunity() {
  return (
    <section className="bg-[#2D3436] text-white section-padding" id="opportunity">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The Opportunity
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-12" />

        <div className="space-y-8">
          {/* The Hook */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#C9A227]/20">
            <p className="text-xl text-gray-200 leading-relaxed italic text-center">
              &quot;{property.marketingDescription}&quot;
            </p>
          </div>

          {/* Key Point */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-[#C9A227]/30">
            <h3 className="text-2xl font-bold text-[#C9A227] mb-4 text-center">
              Grandfathered Development Rights
            </h3>
            <p className="text-lg text-gray-300 text-center mb-6">
              As of <span className="text-[#C9A227] font-semibold">{property.grandfathered.effectiveDate}</span>,
              San Diego banned ADU construction on cul-de-sac properties.
              These <strong>{property.development.totalNewADUs} approved plans</strong> are grandfathered and ready for construction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#C9A227]">{property.development.totalNewADUs}</p>
                <p className="text-gray-400 mt-1">Approved ADUs</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#C9A227]">{property.development.unitSize}</p>
                <p className="text-gray-400 mt-1">SF per Unit</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#C9A227]">{property.development.totalNewSF.toLocaleString()}</p>
                <p className="text-gray-400 mt-1">Total New SF</p>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 text-center">
              <h4 className="text-[#C9A227] font-semibold mb-3 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What You Get
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>Fully renovated 2BR/1BA main house</li>
                <li>Approved plans for 8 new ADUs</li>
                <li>5 market rate + 3 deed restricted units</li>
                <li>Vaulted ceilings in all new units</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 text-center">
              <h4 className="text-[#C9A227] font-semibold mb-3 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Why It&apos;s Rare
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>Cul-de-sac ADU ban now in effect</li>
                <li>Cannot be replicated on similar lots</li>
                <li>Point Loma has limited development</li>
                <li>Strong rental demand in coastal SD</li>
                <li>Plans locked in and ready to build</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

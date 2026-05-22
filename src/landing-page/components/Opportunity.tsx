"use client";

import { property } from "@/lib/propertyData";

export default function Opportunity() {
  return (
    <section className="bg-[#2D3436] text-white section-padding" id="opportunity">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The Opportunity
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" />

        {/* Price Reduction Banner */}
        <div className="bg-gradient-to-r from-[#C9A227] to-[#D4AC31] rounded-xl p-6 mb-10 shadow-2xl border-2 border-[#C9A227]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-zinc-950 font-black text-xs uppercase tracking-widest mb-1">
                ★ Just Reduced — Slam Dunk Pricing
              </p>
              <p className="text-zinc-950 text-2xl md:text-3xl font-black">
                $1,790,000 <span className="text-zinc-900/70">→</span> $1,599,000
              </p>
            </div>
            <div className="text-zinc-950 text-center md:text-right">
              <p className="text-sm font-bold uppercase tracking-wider">Now seeking</p>
              <p className="text-xl md:text-2xl font-black">A Buyer or Build Partner</p>
            </div>
          </div>
          <p className="text-zinc-950 text-base md:text-lg font-semibold mt-4 text-center md:text-left leading-relaxed">
            At the new number, this pencils as a residential long-term hold on the existing turnkey compound alone.
            That means the 8 entitled, grandfathered ADU plans — the kind of plans the City of San Diego will never
            issue again on a cul-de-sac — come along for free. The risk lives in the existing rents. The reward
            lives in the build.
          </p>
        </div>

        <div className="space-y-8">
          {/* The Hook */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#C9A227]/20">
            <p className="text-xl text-gray-200 leading-relaxed text-center">
              {property.marketingDescription}
            </p>
          </div>

          {/* Slam Dunk Thesis */}
          <div className="bg-gradient-to-br from-[#C9A227]/20 to-transparent rounded-xl p-8 border border-[#C9A227]/40">
            <h3 className="text-2xl md:text-3xl font-bold text-[#C9A227] mb-4 text-center">
              Why This Is a Slam Dunk
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200">
              <div>
                <p className="text-[#C9A227] font-bold text-lg mb-2">1. Downside is real estate.</p>
                <p className="leading-relaxed">
                  Renovated Point Loma compound, licensed STR, coastal rents. Even if you never break ground,
                  the price is supported by what it is today.
                </p>
              </div>
              <div>
                <p className="text-[#C9A227] font-bold text-lg mb-2">2. Upside is entitled.</p>
                <p className="leading-relaxed">
                  Plans for 8 ADUs are approved and ready to pull permits. No rezoning. No CUP. No discretionary
                  review. Just build.
                </p>
              </div>
              <div>
                <p className="text-[#C9A227] font-bold text-lg mb-2">3. Moat is regulatory.</p>
                <p className="leading-relaxed">
                  Cul-de-sac ADUs are now banned. This permission slip cannot be re-issued — anywhere, by anyone,
                  ever again, on this kind of lot.
                </p>
              </div>
            </div>
            <p className="text-center text-white text-lg font-semibold mt-8 italic">
              Build it yourself, partner with us, or hold the residential. Three exits, one entry price.
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

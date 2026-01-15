import { property, formatPrice } from "@/lib/propertyData";

export default function ProForma() {
    const { rentalAnalysis } = property;

    return (
        <section className="bg-white section-padding" id="pro-forma">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
                        Market Analysis & Pro Forma
                    </h2>
                    <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
                    <p className="max-w-2xl mx-auto text-[#666666] text-lg">
                        Strong rental demand in Point Loma supports premium rates for newly constructed units with vaulted ceilings.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Projected Income Card */}
                    <div className="lg:col-span-1 bg-[#F5F5F0] rounded-2xl p-8 border border-black/5 shadow-sm h-full">
                        <div className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Projected Income
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-[#2D3436]">{formatPrice(rentalAnalysis.averageMarketRent)}</span>
                            <span className="text-[#666666] ml-2 font-medium">/mo per unit</span>
                        </div>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center py-2 border-b border-black/5">
                                <span className="text-[#666666]">New ADU Units</span>
                                <span className="font-bold text-[#2D3436]">8</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-black/5">
                                <span className="text-[#666666]">Gross Monthly Income</span>
                                <span className="font-bold text-[#2D3436]">{formatPrice(rentalAnalysis.projectedMonthlyGrossIncome)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-black/5">
                                <span className="text-[#666666]">Annual Potential</span>
                                <span className="font-bold text-[#2D3436]">{formatPrice(rentalAnalysis.projectedMonthlyGrossIncome * 12)}</span>
                            </div>
                        </div>
                        <p className="text-xs text-[#999999] italic">
                            *Projections based on 1BR units with vaulted ceilings and premium finishes.
                        </p>
                    </div>

                    {/* Comparables Table */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                        <div className="px-8 py-6 border-b border-black/5 bg-[#2D3436]/5">
                            <h3 className="font-bold text-[#2D3436] text-xl">Recent Rental Comparables</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#2D3436]/5 text-xs uppercase text-[#666666] font-bold">
                                    <tr>
                                        <th className="px-8 py-4">Address</th>
                                        <th className="px-4 py-4 text-center">Beds</th>
                                        <th className="px-4 py-4 text-center">Sqft</th>
                                        <th className="px-4 py-4 text-right">Rent</th>
                                        <th className="px-8 py-4 text-right">$/SF</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    {rentalAnalysis.comps.map((comp, index) => (
                                        <tr key={index} className="hover:bg-[#F5F5F0]/50 transition-colors">
                                            <td className="px-8 py-4">
                                                <a
                                                    href={comp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium text-[#2D3436] hover:text-[#C9A227] transition-colors underline decoration-[#C9A227]/30 hover:decoration-[#C9A227]"
                                                >
                                                    {comp.address}
                                                </a>
                                                <div className="text-[10px] text-[#C9A227] font-bold uppercase tracking-tight">{comp.status}</div>
                                            </td>
                                            <td className="px-4 py-4 text-center text-[#666666]">{comp.beds}</td>
                                            <td className="px-4 py-4 text-center text-[#666666]">{comp.sqft}</td>
                                            <td className="px-4 py-4 text-right font-bold text-[#2D3436]">{formatPrice(comp.rent)}</td>
                                            <td className="px-8 py-4 text-right text-[#666666]">${comp.rentPerSqft.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="bg-[#2D3436] rounded-2xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Request Detailed Financial Package</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Includes detailed expense analysis, tax projections, and a comprehensive development schedule.
                    </p>
                    <a
                        href="#email-capture"
                        className="inline-block bg-[#C9A227] hover:bg-[#D4AC31] text-white font-bold px-10 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Download Full Pro Forma PDF
                    </a>
                </div>
            </div>
        </section>
    );
}

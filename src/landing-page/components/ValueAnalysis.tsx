'use client';

export default function ValueAnalysis() {
    const metrics = [
        { label: 'Acquisition Price', value: '$1,790,000' },
        { label: 'Total Investment', value: '$3,688,376' },
        { label: 'Projected ARV', value: '$4,264,960' },
        { label: 'Gross Profit', value: '$576,584' },
    ];

    const valueComparison = [
        { metric: 'Price Per Unit', your: '$473,884', range: '$383K - $600K', position: 'Mid-Market' },
        { metric: 'Price Per SF', your: '$660', range: '$556 - $902', position: 'Mid-Market' },
        { metric: 'Exit Cap Rate', your: '4.5%', range: '3.72% - 4.38%', position: 'Prudent' },
        { metric: 'Annual NOI', your: '$191,928', range: '—', position: '5.2x current rent' },
    ];

    const keyDrivers = [
        { title: 'Location Premium', desc: 'Point Loma coastal location with Walk Score 90+' },
        { title: 'Unit Mix', desc: '1 x 2BR ($3,000/mo) + 8 x 1BR ($2,600/mo)' },
        { title: 'Occupancy', desc: '96% assumed (4% vacancy buffer included)' },
        { title: 'Development', desc: 'New ADU construction (4,700 SF @ $340/SF)' },
    ];

    return (
        <section className="bg-gradient-to-b from-[#F5F5F0] to-white section-padding" id="value-analysis">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
                        Post-Development Value Analysis
                    </h2>
                    <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
                    <p className="max-w-2xl mx-auto text-[#666666] text-lg">
                        Comprehensive valuation supported by current market comparables and realistic exit assumptions.
                    </p>
                </div>

                {/* Quick Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-[#999999] text-sm font-medium mb-2">{metric.label}</p>
                            <p className="text-2xl md:text-3xl font-bold text-[#C9A227]">{metric.value}</p>
                        </div>
                    ))}
                </div>

                {/* Value Comparison vs Market */}
                <div className="bg-white rounded-2xl border border-black/5 shadow-sm mb-16 overflow-hidden">
                    <div className="px-8 py-6 border-b border-black/5 bg-[#2D3436]/5">
                        <h3 className="font-bold text-[#2D3436] text-xl">How Your Valuation Compares to Market</h3>
                        <p className="text-[#666666] text-sm mt-2">
                            Benchmarked against recent LoopNet sales of similar San Diego multifamily properties
                        </p>
                    </div>

                    <div className="divide-y divide-black/5">
                        {valueComparison.map((item, index) => (
                            <div key={index} className="px-8 py-6 hover:bg-[#F5F5F0]/50 transition-colors">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#2D3436] text-lg mb-1">{item.metric}</h4>
                                        <p className="text-[#999999] text-sm">Market Range: {item.range}</p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                                        <div className="text-right">
                                            <p className="text-[#999999] text-xs font-medium mb-1">Your Value</p>
                                            <p className="text-2xl font-bold text-[#2D3436]">{item.your}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-xs font-bold">
                                                {item.position}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Value Drivers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {keyDrivers.map((driver, index) => (
                        <div
                            key={index}
                            className="bg-[#2D3436] rounded-2xl p-6 text-white border border-[#C9A227]/20"
                        >
                            <div className="w-10 h-10 bg-[#C9A227]/20 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 border-2 border-[#C9A227] rounded"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">{driver.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{driver.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Investment Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* Unit Economics */}
                    <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
                        <div className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Unit Economics
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[#999999] text-sm mb-1">Price Per Unit</p>
                                <p className="text-3xl font-bold text-[#2D3436]">$473,884</p>
                            </div>
                            <div className="pt-4 border-t border-black/5">
                                <p className="text-[#999999] text-sm mb-1">Monthly Gross Income</p>
                                <p className="text-2xl font-bold text-[#2D3436]">$23,800</p>
                            </div>
                            <div className="pt-4 border-t border-black/5">
                                <p className="text-[#999999] text-sm mb-1">Average Monthly Rent</p>
                                <p className="text-xl font-bold text-[#C9A227]">$2,644/unit</p>
                            </div>
                        </div>
                    </div>

                    {/* Development ROI */}
                    <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
                        <div className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Development Returns
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[#999999] text-sm mb-1">Gross Profit</p>
                                <p className="text-3xl font-bold text-[#2D3436]">$576,584</p>
                            </div>
                            <div className="pt-4 border-t border-black/5">
                                <p className="text-[#999999] text-sm mb-1">Return on Equity</p>
                                <p className="text-2xl font-bold text-[#2D3436]">63%</p>
                            </div>
                            <div className="pt-4 border-t border-black/5">
                                <p className="text-[#999999] text-sm mb-1">Profit Margin</p>
                                <p className="text-xl font-bold text-[#C9A227]">16%</p>
                            </div>
                        </div>
                    </div>

                    {/* Exit Metrics */}
                    <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
                        <div className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Exit Assumptions
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[#999999] text-sm mb-1">Exit Cap Rate</p>
                                <p className="text-3xl font-bold text-[#2D3436]">4.5%</p>
                            </div>
                            <div className="pt-4 border-t border-black/5">
                                <p className="text-[#999999] text-sm mb-1">Annual NOI</p>
                                <p className="text-2xl font-bold text-[#2D3436]">$191,928</p>
                            </div>
                            <div className="pt-4 border-t border-black/5">
                                <p className="text-[#999999] text-sm mb-1">Gross Rent Multiplier</p>
                                <p className="text-xl font-bold text-[#C9A227]">22.2x</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Market Position Statement */}
                <div className="bg-gradient-to-r from-[#2D3436] to-[#2D3436]/80 rounded-2xl p-8 md:p-12 mb-16 border border-[#C9A227]/20">
                    <h3 className="text-white text-2xl font-bold mb-4">Your Competitive Advantage</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Post-development valuation of <span className="font-bold text-[#C9A227]">$4.26M</span> positions this property as a mid-market premium coastal multifamily asset. With a 4.5% cap rate—prudent relative to comparable prime locations (3.72%-3.93%)—this investment offers a strong margin of safety while maintaining competitive returns.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-3">
                            <span className="text-[#C9A227] font-bold text-lg mt-1">✓</span>
                            <span className="text-gray-300">Full occupancy assumptions at 96% support stabilized NOI</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#C9A227] font-bold text-lg mt-1">✓</span>
                            <span className="text-gray-300">Market rents verified through comparable sales analysis</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-[#C9A227] font-bold text-lg mt-1">✓</span>
                            <span className="text-gray-300">Prudent exit cap provides downside protection</span>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                    <div className="px-8 py-12 md:px-12 md:py-16 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#2D3436] mb-4">
                            Download Detailed Financial Analysis
                        </h3>
                        <p className="text-[#666666] mb-8 max-w-2xl mx-auto text-lg">
                            Access the comprehensive pro forma spreadsheet with detailed unit economics, development timeline, financing scenarios, and sensitivity analysis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://docs.google.com/spreadsheets/d/1BjKEae7dBLzZRswKNKO46iUUjzVe9B-lBw1eF0IGRgY/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#D4AC31] text-white font-bold px-10 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg"
                            >
                                <span>📊</span>
                                <span>Download Pro Forma Spreadsheet</span>
                            </a>
                            <a
                                href="#email-capture"
                                className="inline-flex items-center justify-center gap-2 border-2 border-[#2D3436] hover:bg-[#2D3436] text-[#2D3436] hover:text-white font-bold px-10 py-4 rounded-xl transition-all"
                            >
                                <span>📑</span>
                                <span>Request Full OM Package</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

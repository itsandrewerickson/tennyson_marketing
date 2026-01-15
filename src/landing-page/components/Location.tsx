"use client";

import { property } from "@/lib/propertyData";

export default function Location() {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
    `${property.address}, ${property.city}, ${property.state} ${property.zip}`
  )}&zoom=15`;

  return (
    <section className="bg-[#F5F5F0] section-padding" id="location">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D3436] mb-4">
          Prime Point Loma Location
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Location Map"
            />
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-2xl font-bold text-[#2D3436] mb-6">
              Minutes to Everything
            </h3>

            <div className="space-y-4 mb-8">
              {property.location.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-[#2D3436]">{amenity.name}</p>
                    {amenity.description && (
                      <p className="text-sm text-[#666666]">{amenity.description}</p>
                    )}
                  </div>
                  <span className="bg-[#C9A227] text-white text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    {amenity.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Neighborhood Highlights */}
            <div className="bg-[#2D3436] text-white rounded-xl p-6">
              <h4 className="text-[#C9A227] font-semibold mb-4">Why Point Loma?</h4>
              <ul className="space-y-2">
                {property.location.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

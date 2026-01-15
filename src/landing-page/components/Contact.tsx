"use client";

import Image from "next/image";
import { property } from "@/lib/propertyData";

export default function Contact() {
  return (
    <section className="bg-white section-padding" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
          Ready to Learn More?
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" />

        <p className="text-lg text-[#666666] mb-12 max-w-2xl mx-auto">
          Contact our team to schedule a property tour, discuss development potential, or submit an offer.
        </p>

        <div className="flex justify-center mb-12">
          <Image
            src="/images/logo-gold.png"
            alt={property.company}
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {property.contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-[#F5F5F0] rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">{contact.name}</h3>

              <div className="space-y-3">
                <a
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 text-[#2D3436] hover:text-[#C9A227] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contact.phone}
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-center gap-2 text-[#2D3436] hover:text-[#C9A227] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contact.email}
                </a>
              </div>

              <a
                href={`mailto:${contact.email}?subject=Inquiry: ${property.address}`}
                className="inline-block mt-6 bg-[#C9A227] hover:bg-[#B8922A] text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Send Inquiry
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

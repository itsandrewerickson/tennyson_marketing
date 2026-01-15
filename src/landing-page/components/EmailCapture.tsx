"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="bg-[#2D3436] section-padding" id="email-capture">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Check Your Inbox!
            </h2>
            <p className="text-gray-300 mb-6">
              We&apos;ve sent the full architectural plans and property details to your email.
            </p>
            <a
              href="/plans.pdf"
              download
              className="inline-block bg-[#C9A227] hover:bg-[#B8922A] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Download Plans Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#2D3436] section-padding" id="email-capture">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get the Full Plans
        </h2>
        <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
        <p className="text-gray-300 mb-8 text-lg">
          Enter your details to receive the complete architectural plans, floor layouts, and investment analysis.
        </p>

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#C9A227] hover:bg-[#B8922A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            {status === "loading" ? "Sending..." : "Send Me the Plans"}
          </button>

          {status === "error" && (
            <p className="text-red-400 mt-4">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}

          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Your information will only be used to send property details.
          </p>
        </form>
      </div>
    </section>
  );
}

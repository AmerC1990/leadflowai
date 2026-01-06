"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(
        "https://app.kit.com/forms/8821754/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email_address: email,
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-xs font-bold">
              FP
            </div>
            <span className="text-lg font-semibold tracking-tight">
              FlowLeadPro
            </span>
          </div>

          <a
            href="#cta"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-full bg-slate-100 text-slate-900 hover:bg-white transition"
          >
            Request Private Access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-16 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI Treatment Coordinator for Dentists
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Stop Missing Invisalign, Implant, and New Patient Leads.
            </h1>

            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              FlowLeadPro instantly replies to new patient inquiries, qualifies
              cases, and books consultations directly onto your calendar — 24/7.
            </p>

            {/* FORM */}
            <div className="mt-8 max-w-md">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-0"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Practice email"
                    className="px-4 py-3.5 border border-slate-600 bg-slate-900 rounded-lg sm:rounded-r-none w-full text-slate-50 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-3.5 bg-blue-500 text-white font-semibold rounded-lg sm:rounded-l-none hover:bg-blue-600 transition disabled:opacity-60"
                  >
                    {loading ? "Submitting…" : "Request Private Access"}
                  </button>
                </form>
              ) : (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200">
                  ✅ Thanks! We’ll be in touch shortly.
                </div>
              )}

              {error && (
                <p className="mt-3 text-xs text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-3 text-xs text-slate-500">
                No spam. No contracts. Limited onboarding for dental practices.
              </p>
            </div>
          </div>

          {/* MOCKUP */}
          <div className="relative">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
              <p className="text-sm font-semibold">
                New Patient Inquiry — Invisalign
              </p>
              <p className="mt-3 text-sm text-slate-300">
                “Hi, I’m interested in Invisalign. Do you offer consultations?”
              </p>
              <p className="mt-3 text-sm text-blue-400">
                ✔ Automatically replied & booked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-[11px] text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} FlowLeadPro. All Rights Reserved.
      </footer>
    </main>
  );
}

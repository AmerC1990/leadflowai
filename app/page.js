export const metadata = {
  title: "FlowLeadPro — AI Patient Booking & Lead Qualification for Dentists",
  description:
    "FlowLeadPro instantly responds to dental patient inquiries, qualifies Invisalign and implant leads, and books consultations automatically — 24/7.",
};

export default function Home() {
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
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI Treatment Coordinator for Dentists
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Stop Missing Invisalign, Implant, and New Patient Leads.
            </h1>

            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              FlowLeadPro instantly replies to new patient inquiries, answers common
              dental questions, qualifies cases, and books consultations directly onto
              your calendar — automatically, 24/7.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Built specifically for general dentists, cosmetic dentists, implant
              centers, and orthodontic practices.
            </p>

            {/* TRUST */}
            <p className="mt-6 text-sm text-slate-300">
              Designed for high-value dental cases like Invisalign, implants, and
              cosmetic consultations.
            </p>

            {/* FORM */}
            <form
              action="https://app.kit.com/forms/8821754/subscriptions"
              method="post"
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch max-w-md"
            >
              <input
                type="email"
                name="email_address"
                required
                placeholder="Practice email"
                className="px-4 py-3.5 border border-slate-600 bg-slate-900 rounded-lg sm:rounded-r-none w-full text-slate-50 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3.5 bg-blue-500 text-white font-semibold rounded-lg sm:rounded-l-none hover:bg-blue-600 transition whitespace-nowrap"
              >
                Request Private Access
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-500">
              No spam. No contracts. Limited onboarding for dental practices.
            </p>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative">
            <div className="absolute -top-6 -right-8 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-violet-500/30 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Live Example
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    New Patient Inquiry — Invisalign
                  </p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/40">
                  Auto-handled
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="max-w-[80%] rounded-2xl bg-slate-800 px-3 py-2">
                  Hi, I'm interested in Invisalign. Do you offer consultations?
                </div>

                <div className="max-w-[82%] ml-auto rounded-2xl bg-blue-500 px-3 py-2">
                  Absolutely! I can help with that. I just need a couple quick
                  details to get you scheduled.
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
                    BOOKED
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    Thu • 10:00 AM — Invisalign Consult
                  </p>
                </div>
                <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs">
                  Calendar synced ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI OBJECTION HANDLING */}
      <section className="bg-slate-900 border-y border-slate-800 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Sounds Human. Acts Smart. Always On-Brand.
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            FlowLeadPro is trained specifically for dental patient conversations.
            It answers FAQs, qualifies cases, and follows rules you approve —
            without replacing your front desk.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="cta"
        className="px-6 py-20 bg-gradient-to-br from-blue-600 via-violet-600 to-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Turn more patient inquiries into booked consultations.
          </h2>
          <p className="mt-4 text-sm text-slate-100 max-w-xl mx-auto">
            Request private access for your practice. Limited onboarding available.
          </p>

          <form
            action="https://app.kit.com/forms/8821754/subscriptions"
            method="post"
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch max-w-md mx-auto"
          >
            <input
              type="email"
              name="email_address"
              required
              placeholder="Practice email"
              className="px-4 py-3.5 border border-white/30 bg-white/10 rounded-lg sm:rounded-r-none w-full text-slate-50 placeholder-slate-200 focus:ring-2 focus:ring-white outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3.5 bg-black text-white font-semibold rounded-lg sm:rounded-l-none hover:bg-slate-900 transition"
            >
              Request Private Access
            </button>
          </form>

          <p className="mt-3 text-[11px] text-slate-100/80">
            No credit card. No obligation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-[11px] text-slate-500 border-t border-slate-800 bg-slate-950">
        © {new Date().getFullYear()} FlowLeadPro. All Rights Reserved.
      </footer>
    </main>
  );
}


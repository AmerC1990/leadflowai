export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-xs font-bold">
              LF
            </div>
            <span className="text-lg font-semibold tracking-tight">
              LeadFlowAI
            </span>
          </div>

          <a
            href="#cta"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-full bg-slate-100 text-slate-900 hover:bg-white transition"
          >
            Join Early Access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-16 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy + Form */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI Appointment Setter for Service Businesses
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Your 24/7 AI closer for leads from ads, DMs & your website.
            </h1>

            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              LeadFlowAI instantly replies to every new inquiry, asks qualifying
              questions, follows up automatically, and books appointments right
              onto your calendar — even while you sleep.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Perfect for: contractors, med spas, realtors, roofers, cleaners,
              gyms, coaches, and any business that runs on leads.
            </p>

            {/* HERO FORM (ConvertKit) */}
            <form
              action="https://app.kit.com/forms/8821754/subscriptions"
              method="post"
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch max-w-md"
            >
              <input
                type="email"
                name="email_address"
                required
                placeholder="Enter your best email"
                className="px-4 py-3.5 border border-slate-600 bg-slate-900 rounded-lg sm:rounded-r-none w-full text-slate-50 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3.5 bg-blue-500 text-white font-semibold rounded-lg sm:rounded-l-none hover:bg-blue-600 transition whitespace-nowrap"
              >
                Join Early Access
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-500">
              No spam. No pitch deck. Just early access when we launch.
            </p>
          </div>

          {/* Right: Visual / Mock UI */}
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
                    New Lead from Facebook Ad
                  </p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/40">
                  Auto-handled by LeadFlowAI
                </span>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-3 text-sm">
                <div className="max-w-[80%] rounded-2xl bg-slate-800 px-3 py-2">
                  <p className="text-slate-100">
                    Hey, I saw your ad. Do you have availability this week for a
                    roof inspection?
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">Lead • 2:14 PM</p>
                </div>

                <div className="max-w-[82%] ml-auto rounded-2xl bg-blue-500 px-3 py-2 shadow-lg">
                  <p className="text-slate-50">
                    Absolutely! A few quick questions so we can help you faster:
                    🏠 What city are you in and how urgent is the job?
                  </p>
                  <p className="mt-1 text-[11px] text-blue-100">
                    LeadFlowAI • replying in 4 seconds
                  </p>
                </div>

                <div className="max-w-[78%] rounded-2xl bg-slate-800 px-3 py-2">
                  <p className="text-slate-100">
                    Greensboro, not super urgent but this week would be perfect.
                  </p>
                </div>

                <div className="max-w-[84%] ml-auto rounded-2xl bg-blue-500 px-3 py-2 shadow-lg">
                  <p className="text-slate-50">
                    Got it. We can fit you in on{" "}
                    <span className="font-semibold">Wednesday at 3 PM</span> or{" "}
                    <span className="font-semibold">Thursday at 11 AM</span>. Which
                    works better for you?
                  </p>
                </div>
              </div>

              {/* Mini calendar */}
              <div className="mt-6 border-t border-slate-800 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
                    NEXT SLOT BOOKED
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    Thu • 11:00 AM — Roof Inspection
                  </p>
                </div>
                <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200">
                  Synced to calendar ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN / BEFORE-AFTER SECTION */}
      <section className="bg-slate-900 border-y border-slate-800 px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Right now, you&apos;re leaking money every time you miss a lead.
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Most service businesses lose 50–80% of leads simply because:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• You can&apos;t respond in under 5 minutes 24/7.</li>
              <li>• You&apos;re driving, in appointments, or with family.</li>
              <li>• You mean to follow up… but messages get buried.</li>
              <li>• No one owns “lead nurturing” in your business.</li>
            </ul>
          </div>

          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-slate-950 border border-rose-500/40">
              <p className="text-xs font-semibold text-rose-300 uppercase tracking-[0.18em]">
                Before LeadFlowAI
              </p>
              <p className="mt-2 text-sm text-slate-200">
                A lead fills out your form or replies to your ad. You see it an
                hour later. They already booked with someone else.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40">
              <p className="text-xs font-semibold text-emerald-300 uppercase tracking-[0.18em]">
                After LeadFlowAI
              </p>
              <p className="mt-2 text-sm text-slate-200">
                LeadFlowAI replies in seconds, asks the right questions, handles
                basic objections, follows up automatically, and books them into an
                open slot on your calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            How LeadFlowAI Works
          </h2>
          <p className="mt-3 text-sm text-slate-300 text-center max-w-2xl mx-auto">
            No complex setup. No custom scripts. You hook it into your lead
            sources and calendar — LeadFlowAI does the rest.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/40 text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Connect your lead sources
              </h3>
              <p className="text-sm text-slate-300">
                Hook LeadFlowAI into forms, SMS, email, and social DMs where new
                leads come in from ads and your website.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/40 text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Let AI qualify & follow up
              </h3>
              <p className="text-sm text-slate-300">
                Leads get instant responses, smart questions, and automatic follow
                up so no one &quot;forgets to reply&quot; ever again.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Calls & appointments appear on your calendar
              </h3>
              <p className="text-sm text-slate-300">
                When a lead is ready, LeadFlowAI books them directly into your
                available time slots. You just show up and close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* “WHO IT’S FOR” / POSITIONING */}
      <section className="bg-slate-900 border-y border-slate-800 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Built for owners who don&apos;t have time to chase every lead.
          </h2>
          <p className="mt-4 text-sm text-slate-300 text-center max-w-2xl mx-auto">
            If you&apos;re running a service business and you&apos;re tired of
            leads slipping through the cracks, LeadFlowAI is for you.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10 text-sm text-slate-200">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <p className="font-semibold mb-1">Home Services</p>
              <p className="text-slate-300 text-xs">
                Roofers, cleaners, HVAC, plumbers, landscapers, painters, and
                more.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <p className="font-semibold mb-1">Local Clinics & Med Spas</p>
              <p className="text-slate-300 text-xs">
                Med spas, chiropractors, dentists, wellness clinics, etc.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <p className="font-semibold mb-1">Coaches & High-Ticket Offers</p>
              <p className="text-slate-300 text-xs">
                Coaching, agencies, and consultants running paid traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        id="cta"
        className="px-6 py-20 bg-gradient-to-br from-blue-600 via-violet-600 to-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Turn more leads into booked appointments — automatically.
          </h2>
          <p className="mt-4 text-sm text-slate-100 max-w-xl mx-auto">
            Join the early access list and be among the first to use LeadFlowAI
            when it launches. We&apos;re onboarding a small group of{" "}
            <span className="font-semibold">service businesses</span> to start.
          </p>

          {/* CTA FORM (ConvertKit again) */}
          <form
            action="https://app.kit.com/forms/8821754/subscriptions"
            method="post"
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-stretch max-w-md mx-auto"
          >
            <input
              type="email"
              name="email_address"
              required
              placeholder="Enter your email to join"
              className="px-4 py-3.5 border border-white/30 bg-white/10 rounded-lg sm:rounded-r-none w-full text-slate-50 placeholder-slate-200 focus:ring-2 focus:ring-white focus:border-white outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3.5 bg-black text-white font-semibold rounded-lg sm:rounded-l-none hover:bg-slate-900 transition whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>

          <p className="mt-3 text-[11px] text-slate-100/80">
            No credit card. No obligation. Just first access when we&apos;re
            live.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-[11px] text-slate-500 border-t border-slate-800 bg-slate-950">
        © {new Date().getFullYear()} LeadFlowAI. All Rights Reserved.
      </footer>
    </main>
  );
}

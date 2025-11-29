export default function Home() {
  return (
    <main className="bg-white text-gray-900 antialiased">

      {/* HERO SECTION */}
      <section className="px-6 py-28 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          Never Miss Another Hot Lead Again.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          LeadFlowAI instantly replies to new inquiries, qualifies prospects,
          follows up automatically, and books appointments — 24/7.
        </p>

        {/* CTA Form */}
        <form
          action="https://app.kit.com/forms/8821754/subscriptions"
          method="post"
          className="mt-10 flex justify-center"
        >
          <input
            type="email"
            name="email_address"
            required
            placeholder="Enter your best email"
            className="px-5 py-4 border rounded-l-lg w-72 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition"
          >
            Join Early Access
          </button>
        </form>

        {/* Hero Mockup */}
        <div className="mt-16 flex justify-center">
          <div className="bg-gray-200 rounded-2xl w-full max-w-4xl h-72 shadow-inner flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              ✨ Product UI Mockup Placeholder (You can replace this later)
            </span>
          </div>
        </div>
      </section>

      {/* BENEFIT BAR */}
      <section className="bg-gray-50 py-12 border-t border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
          <div>
            <p className="text-4xl font-bold text-blue-600">5–10×</p>
            <p className="mt-1 text-gray-600">More Lead Engagement</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">~60 sec</p>
            <p className="mt-1 text-gray-600">Average Response Time</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">24/7</p>
            <p className="mt-1 text-gray-600">Automated Outreach</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">What LeadFlowAI Does</h2>
        <p className="text-lg text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Everything you need to convert leads into paying customers — automatically.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition bg-white">
            <h3 className="text-2xl font-semibold mb-4">⚡ Instant Lead Response</h3>
            <p className="text-gray-600">
              Respond to every new lead within seconds through SMS, email, or DMs —
              even while you're asleep.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition bg-white">
            <h3 className="text-2xl font-semibold mb-4">🎯 Smart Lead Qualification</h3>
            <p className="text-gray-600">
              Uses AI-driven conversations to filter out low-quality leads and route
              only serious buyers to you.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition bg-white">
            <h3 className="text-2xl font-semibold mb-4">📅 Auto-Booking</h3>
            <p className="text-gray-600">
              LeadFlowAI books appointments directly onto your calendar and follows up
              until they confirm — hands-free.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-20 bg-gray-50 border-t">
        <h2 className="text-3xl font-bold text-center">Trusted by Growth-Focused Businesses</h2>
        <p className="text-gray-600 text-center mt-2">
          (Logo placeholders — replace when you get real users)
        </p>

        <div className="flex justify-center gap-12 mt-10 opacity-70">
          <div className="h-10 w-28 bg-gray-300 rounded"></div>
          <div className="h-10 w-28 bg-gray-300 rounded"></div>
          <div className="h-10 w-28 bg-gray-300 rounded"></div>
          <div className="h-10 w-28 bg-gray-300 rounded"></div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-16">
          <div className="p-6 bg-white border rounded-xl shadow">
            <p className="text-gray-700">
              “LeadFlowAI booked more calls in 3 days than we did in 2 weeks. This thing is a cheat code.”
            </p>
            <p className="font-semibold mt-3">— Testimonial Placeholder</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow">
            <p className="text-gray-700">
              “The automated follow-up alone is worth it — our no-show rate is dropping fast.”
            </p>
            <p className="font-semibold mt-3">— Testimonial Placeholder</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow">
            <p className="text-gray-700">
              “I literally woke up to 3 booked calls. I’m never going back.”
            </p>
            <p className="font-semibold mt-3">— Placeholder User</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center px-6 bg-blue-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">Turn More Leads Into Customers — Automatically</h2>
        <p className="text-lg opacity-95 max-w-2xl mx-auto">
          Join the early access list and get first access when we launch.
        </p>

        <form
          action="https://app.kit.com/forms/8821754/subscriptions"
          method="post"
          className="mt-8 flex justify-center"
        >
          <input
            type="email"
            name="email_address"
            required
            placeholder="Your email"
            className="px-5 py-4 border rounded-l-lg w-72 text-gray-900 border-gray-300 focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-900 transition"
          >
            Join Waitlist
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} LeadFlowAI — All Rights Reserved.
      </footer>

    </main>
  );
}



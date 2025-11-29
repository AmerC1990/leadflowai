export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          Never Miss Another Hot Lead Again.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          LeadFlowAI instantly responds to inquiries, qualifies prospects, 
          follows up automatically, and books appointments — all done for you.
        </p>

        {/* FORM */}
        <form
          action="https://app.kit.com/forms/8821754/subscriptions"
          method="post"
          className="mt-10 flex justify-center"
        >
          <input
            type="email"
            name="email_address"
            required
            placeholder="Enter your email"
            className="px-4 py-3 border rounded-l-lg w-72 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition"
          >
            Join Early Access
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
      </section>


      {/* VALUE PROP BAR */}
      <section className="bg-gray-50 py-10 border-t border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">5–10×</p>
            <p className="mt-1 text-gray-600">More lead engagement</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">60 sec</p>
            <p className="mt-1 text-gray-600">Average response time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="mt-1 text-gray-600">AI follow-up automation</p>
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">What LeadFlowAI Does For You</h2>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">⚡ Instant Lead Response</h3>
            <p className="mt-2 text-gray-600">
              Answers inquiries via SMS, email, or DM in seconds — turning cold leads into warm conversations.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">🎯 Smart Qualification</h3>
            <p className="mt-2 text-gray-600">
              Automatically asks qualifying questions so you only speak with high-intent prospects.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">📅 Auto-Booking</h3>
            <p className="mt-2 text-gray-600">
              Schedules appointments directly onto your calendar and follows up until they show.
            </p>
          </div>
        </div>
      </section>


      {/* CLOSER CTA */}
      <section className="py-24 text-center px-6 bg-blue-600 text-white">
        <h2 className="text-4xl font-extrabold">Get Early Access</h2>
        <p className="mt-4 text-lg opacity-90">
          Join hundreds of businesses turning more leads into customers using AI.
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
            placeholder="Enter your email"
            className="px-4 py-3 border rounded-l-lg w-72 text-gray-900 border-gray-300 focus:ring-2 focus:ring-white focus:outline-none"
          />
          
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-medium rounded-r-lg hover:bg-gray-900 transition"
          >
            Join the Waitlist
          </button>
        </form>
      </section>


      <footer className="py-8 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} LeadFlowAI — All Rights Reserved.
      </footer>
    </main>
  );
}



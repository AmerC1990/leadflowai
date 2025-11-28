export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* Hero */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Never Miss Another Hot Lead Again.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          LeadFlowAI responds instantly to new inquiries, qualifies prospects, 
          follows up automatically, and books appointments — without you lifting a finger.
        </p>

        {/* ConvertKit Form */}
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
            className="px-4 py-3 border rounded-l-lg w-64 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition"
          >
            Join Early Access
          </button>
        </form>
      </section>

      {/* Features */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">What LeadFlowAI Does</h2>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold">⚡ Instant Lead Response</h3>
            <p className="mt-2 text-gray-600">
              Responds to leads via SMS, email, or DM within seconds.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold">🎯 Automatic Qualification</h3>
            <p className="mt-2 text-gray-600">
              Asks smart questions to filter out low-quality leads.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold">📅 Auto-Booking & Follow-Up</h3>
            <p className="mt-2 text-gray-600">
              Books meetings directly into your calendar and follows up automatically.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} LeadFlowAI — All Rights Reserved.
      </footer>
    </main>
  );
}

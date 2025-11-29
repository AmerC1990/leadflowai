export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Never Miss Another Hot Lead Again.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          LeadFlowAI responds instantly to new inquiries, qualifies prospects, 
          follows up automatically, and books appointments — without you lifting a finger.
        </p>

        {/* ConvertKit Form */}
        <div className="mt-10 flex justify-center">
          {/* Load ConvertKit script */}
          <script async src="https://f.convertkit.com/ckjs/ck.5.js"></script>

          {/* Actual ConvertKit embedded form */}
          <form
            action="https://app.kit.com/forms/8821754/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="8821754"
            data-uid="b421ad0ba6"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"You’re in! We’ll email you when we launch.","redirect_url":""}}}'
          >
            <div className="seva-fields formkit-fields flex">
              <input
                name="email_address"
                type="email"
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
            </div>

            {/* Inline success & error message containers */}
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>

            <div
              className="formkit-alert formkit-alert-success hidden"
              data-element="success"
            ></div>
          </form>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} LeadFlowAI — All Rights Reserved.
      </footer>
    </main>
  );
}


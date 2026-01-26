import Link from "next/link";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.bouzek.machinemonitors";

function LogoMark() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-800 text-white shadow-sm">
      <span className="text-xs font-bold">MM</span>
    </div>
  );
}

function PlayButton({ className = "" }) {
  return (
    <Link
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center gap-2 rounded-xl",
        "bg-blue-700 px-5 py-3 text-sm font-semibold text-white",
        "shadow-md ring-1 ring-blue-900/20 transition",
        "hover:bg-blue-800 hover:shadow-lg",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
        className,
      ].join(" ")}
    >
      Get it on Google Play →
    </Link>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="text-sm font-semibold text-blue-900">
                Machine Monitors
              </div>
              <div className="text-xs text-blue-700">
                Equipment incident capture
              </div>
            </div>
          </div>
          <PlayButton className="text-xs px-4 py-2" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Blue overlay similar to your Facebook ad */}
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/95" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
            Android app for industrial & retail environments
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Capture equipment faults instantly
          </h1>

          <p className="mt-4 max-w-2xl text-base text-blue-100">
            Machine Monitors continuously buffers live video from the device
            camera. When a malfunction occurs, tap once to save the moments
            before and during the event — no manual editing required.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <PlayButton />
            <span className="text-sm text-blue-200">
              One-tap video buffer recording
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-blue-900">
            Built for real equipment issues
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "One-tap incident capture",
              "Buffered video before failure",
              "Saved directly to device storage",
              "Easy sharing with maintenance",
            ].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <div className="mt-3 text-sm font-semibold text-blue-900">
                  {title}
                </div>
                <p className="mt-2 text-sm text-blue-700">
                  Designed to document equipment problems quickly and clearly.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-blue-900">
            Common use cases
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Production supervisors",
                text: "Capture jams, misfeeds, and intermittent failures with full context.",
              },
              {
                title: "Facilities & operations",
                text: "Record HVAC, conveyor, and equipment faults as they occur.",
              },
              {
                title: "Retail managers",
                text: "Document freezer, cooler, and backroom equipment issues instantly.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-blue-900">
                  {c.title}
                </div>
                <p className="mt-2 text-sm text-blue-700">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-6xl px-4 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Install Machine Monitors
              </h3>
              <p className="mt-1 text-sm text-blue-200">
                No signup. No onboarding. Use existing Android devices.
              </p>
            </div>
            <PlayButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-blue-700">
          © {new Date().getFullYear()} Machine Monitors
        </div>
      </footer>
    </div>
  );
}

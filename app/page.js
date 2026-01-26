import Link from "next/link";
import Image from "next/image";

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
      Get it on Google Play <span className="opacity-80">→</span>
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
                Buffered incident video capture
              </div>
            </div>
          </div>
          <PlayButton className="text-xs px-4 py-2" />
        </div>
      </header>

      {/* Hero with product image */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/capture-screen.png"
            alt="Machine Monitors capture screen showing buffered recording controls"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Blue overlay to match your brand / ad aesthetic */}
          <div className="absolute inset-0 bg-blue-950/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/80 to-blue-950/95" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Copy */}
            <div className="lg:col-span-7 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                Android • factories • production lines • equipment areas
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Capture equipment faults instantly
              </h1>

              <p className="mt-4 max-w-2xl text-base text-blue-100">
                Machine Monitors continuously buffers live camera video. When a
                malfunction occurs, tap once to save the moments before and during
                the event. Clips are saved to device storage for quick review and
                sharing with maintenance or technical support.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <PlayButton />
                <span className="text-sm text-blue-200">
                  One-tap video buffer recording
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Before + during</div>
                  <div className="mt-1 text-sm text-blue-100">
                    Save context automatically.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Local clips</div>
                  <div className="mt-1 text-sm text-blue-100">
                    Stored in device media.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Fast sharing</div>
                  <div className="mt-1 text-sm text-blue-100">
                    Send to support quickly.
                  </div>
                </div>
              </div>
            </div>

            {/* “Product preview” card on right */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/95 shadow-xl ring-1 ring-black/5 backdrop-blur">
                <div className="border-b border-blue-100 p-5">
                  <div className="text-sm font-semibold text-blue-900">
                    What the operator does
                  </div>
                  <div className="mt-1 text-sm text-blue-700">
                    Buffer → tap → clip saved to device storage
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <div className="text-xs font-semibold text-blue-700">
                      BUFFER
                    </div>
                    <div className="mt-1 text-sm text-blue-900">
                      Camera feed buffers continuously
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <div className="text-xs font-semibold text-blue-700">
                      CAPTURE
                    </div>
                    <div className="mt-1 text-sm text-blue-900">
                      Tap to record the last moments + the incident
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <div className="text-xs font-semibold text-blue-700">
                      SHARE
                    </div>
                    <div className="mt-1 text-sm text-blue-900">
                      Clip appears in gallery for preview/email
                    </div>
                  </div>

                  <PlayButton className="w-full justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-blue-900">
            Built for practical incident documentation
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-blue-700">
            Designed to produce a usable clip quickly with minimal steps.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              {
                t: "One-tap incident capture",
                d: "Save the moments before and during the fault without editing.",
              },
              {
                t: "Continuous video buffer",
                d: "Buffer in the background so you aren’t recording long files.",
              },
              {
                t: "Saved to device storage",
                d: "Clips are stored in media storage for standard workflows.",
              },
              {
                t: "Clear handoff",
                d: "Share a clip with maintenance/support so they can see the failure mode.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <div className="mt-3 text-sm font-semibold text-blue-900">
                  {x.t}
                </div>
                <p className="mt-2 text-sm text-blue-700">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-blue-900">Use cases</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Production supervisors",
                text: "Capture jams, misfeeds, stops, and intermittent faults with context.",
              },
              {
                title: "Operations / facilities",
                text: "Document conveyor, dock equipment, HVAC, and utility issues as they occur.",
              },
              {
                title: "Retail managers",
                text: "Capture cooler/freezer and equipment failures for vendor support calls.",
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
              <h3 className="text-xl font-semibold">Install Machine Monitors</h3>
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

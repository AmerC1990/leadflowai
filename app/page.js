import Link from "next/link";
import Image from "next/image";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.bouzek.machinemonitors";

function PlayButton({ className = "" }) {
  return (
    <Link
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-xl",
        "bg-blue-700 px-5 py-3 text-sm font-semibold text-white",
        "shadow-md ring-1 ring-blue-900/20 transition",
        "hover:bg-blue-800 hover:shadow-lg",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
        className,
      ].join(" ")}
      aria-label="Get Machine Monitors on Google Play"
    >
      Get it on Google Play <span className="ml-1 opacity-80">→</span>
    </Link>
  );
}

function TopBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-800 text-white shadow-sm">
        <span className="text-xs font-bold tracking-tight">MM</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-blue-900">Machine Monitors</div>
        <div className="text-xs text-blue-700">Buffered incident video capture</div>
      </div>
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-blue-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-blue-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* soft glow behind device */}
      <div className="absolute -inset-6 rounded-[40px] bg-blue-500/20 blur-2xl" />

      {/* device frame */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-neutral-950 shadow-2xl ring-1 ring-black/30">
        {/* top “camera notch” area */}
        <div className="relative h-8 bg-neutral-950">
          <div className="absolute left-1/2 top-2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-neutral-800" />
        </div>

        {/* screenshot */}
        <div className="relative aspect-[9/19] bg-black">
          <Image
            src="/app-capture.png"
            alt="Machine Monitors app capture screen"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* bottom bar */}
        <div className="h-6 bg-neutral-950" />
      </div>

      {/* small caption */}
      <p className="mt-3 text-center text-xs text-white/70">
        Capture screen: one-tap buffered recording
      </p>
    </div>
  );
}

export default function Page() {
  const features = [
    {
      title: "One-tap incident capture",
      desc: "Tap once to save a clip that includes the moments before and during a malfunction.",
    },
    {
      title: "Continuous video buffer",
      desc: "Live camera video is buffered so you don’t need to run long recordings.",
    },
    {
      title: "Saved to device storage",
      desc: "Clips are saved directly to the device’s media storage for fast access.",
    },
    {
      title: "Easy sharing",
      desc: "Preview and share clips (email/message) with maintenance or technical support.",
    },
  ];

  const useCases = [
    {
      title: "Production supervisors",
      points: [
        "Capture intermittent jams, misfeeds, and stops with context.",
        "Reduce back-and-forth between shifts by sharing a clip.",
        "Support root-cause investigation with visual evidence.",
      ],
    },
    {
      title: "Operations / facilities managers",
      points: [
        "Record conveyor, dock equipment, HVAC, or utility issues as they occur.",
        "Standardize incident documentation across sites.",
        "Share clips with vendors or internal service teams.",
      ],
    },
    {
      title: "Retail managers",
      points: [
        "Document cooler/freezer and backroom equipment failures quickly.",
        "Send clear evidence to vendor support without manual editing.",
        "Improve service calls with the actual failure captured.",
      ],
    },
  ];

  const faqs = [
    {
      q: "Where are clips stored?",
      a: "Clips are saved to the device’s media storage and appear in the gallery for preview and sharing.",
    },
    {
      q: "Does it record all the time?",
      a: "No. The app buffers live video so you can save the relevant window when an incident happens.",
    },
    {
      q: "Is there an account or onboarding?",
      a: "No. Install from Google Play and use it directly.",
    },
    {
      q: "Who is this for?",
      a: "Production supervisors, operations/facilities managers, and retail managers responsible for equipment uptime.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <TopBrand />
          <PlayButton className="px-4 py-2 text-xs sm:text-sm sm:px-5 sm:py-3" />
        </div>
      </header>

      {/* HERO with big graphic */}
      <section className="relative overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-factory.jpg"
            alt="Industrial equipment area"
            fill
            priority
            className="object-cover object-center"
          />
          {/* blue overlay to match ad aesthetic */}
          <div className="absolute inset-0 bg-blue-950/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/55 via-blue-950/80 to-blue-950/95" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* left copy */}
            <div className="lg:col-span-7 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/10">
                Android • Industrial & retail environments
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Capture equipment faults instantly
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100">
                Machine Monitors continuously buffers live camera video. When an issue
                happens, tap one button to save the moments before and during the
                malfunction. Clips are stored locally and can be shared immediately.
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
                    Context without editing.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Local output</div>
                  <div className="mt-1 text-sm text-blue-100">
                    Saved to device storage.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Fast sharing</div>
                  <div className="mt-1 text-sm text-blue-100">
                    Send to maintenance/support.
                  </div>
                </div>
              </div>
            </div>

            {/* right: big product graphic */}
            <div className="lg:col-span-5">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Built for practical incident documentation"
            description="Focused on capturing a usable clip quickly with minimal steps."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <div className="mt-3 text-sm font-semibold text-blue-900">
                  {f.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-blue-700">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Use cases"
            description="For teams responsible for uptime and issue documentation."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-blue-900">
                  {u.title}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-blue-700">
                  {u.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-blue-100 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="FAQ"
            description="Deployment and usage details."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-blue-900">{f.q}</div>
                <p className="mt-2 text-sm leading-relaxed text-blue-700">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-semibold text-blue-900">
                Install Machine Monitors
              </div>
              <div className="mt-1 text-sm text-blue-700">
                No signup. No onboarding. Use existing Android devices.
              </div>
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

import Link from "next/link";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.bouzek.machinemonitors";

const features = [
  {
    title: "One-tap incident capture",
    description:
      "Tap once to save a clip that includes the moments before and during an equipment issue.",
  },
  {
    title: "Continuous video buffer",
    description:
      "Live camera video is buffered so you don’t need to record continuously.",
  },
  {
    title: "Saved to device storage",
    description:
      "Clips are saved directly to the device’s media storage for fast access and standard sharing.",
  },
  {
    title: "Fast handoff to maintenance",
    description:
      "Send a clip to maintenance or support so they can see the failure mode and context.",
  },
];

const workflows = [
  {
    step: "1",
    title: "Position the device",
    description:
      "Mount or hold an Android device with a clear view of the machine or equipment area.",
  },
  {
    step: "2",
    title: "Buffer continuously",
    description:
      "Machine Monitors buffers live camera video while you continue normal operations.",
  },
  {
    step: "3",
    title: "Tap on malfunction",
    description:
      "When an issue occurs, tap the capture button to save the buffered moments before and during the event.",
  },
  {
    step: "4",
    title: "Review and share",
    description:
      "Open the clip from the gallery and share it by email or messaging to the right team.",
  },
];

const useCases = [
  {
    title: "Production lines",
    points: [
      "Capture intermittent jams, misfeeds, and stops with context.",
      "Reduce time spent recreating or explaining issues across shifts.",
      "Support root-cause analysis with a clear visual record.",
    ],
  },
  {
    title: "Facilities / operations",
    points: [
      "Document conveyor, dock equipment, HVAC, or utility issues as they occur.",
      "Standardize incident documentation across sites and teams.",
      "Send clips to vendors or internal teams to speed service decisions.",
    ],
  },
  {
    title: "Retail equipment",
    points: [
      "Capture cooler/freezer and backroom equipment failures when they happen.",
      "Share clips without manual editing or exporting workflows.",
      "Improve service calls with objective evidence.",
    ],
  },
];

const faqs = [
  {
    q: "Where are clips stored?",
    a: "Clips are saved to the device’s media storage so they appear in the gallery and can be shared using standard Android share options.",
  },
  {
    q: "Does it record all day?",
    a: "No. The app buffers live video so you can save a relevant window when an incident happens without long, continuous recordings.",
  },
  {
    q: "Is there an account or onboarding?",
    a: "No. Install from Google Play and use it directly.",
  },
  {
    q: "Who uses this in practice?",
    a: "Production supervisors, operations/facilities managers, and retail managers responsible for equipment uptime and documentation.",
  },
];

function LogoMark() {
  // Simple “MM” mark that looks like a product logo without being flashy.
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-sm ring-1 ring-black/5">
      <span className="text-xs font-bold tracking-tight">MM</span>
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
        "group inline-flex items-center justify-center gap-2 rounded-xl",
        "bg-neutral-900 px-5 py-3 text-sm font-semibold text-white",
        "shadow-sm ring-1 ring-black/10 transition",
        "hover:bg-neutral-800 hover:shadow-md",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
        className,
      ].join(" ")}
      aria-label="Get Machine Monitors on Google Play"
    >
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-white/90"
            aria-hidden="true"
          >
            <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l10-9.7-10-9.7zm11.2 10.7 2.7-2.6-9.9-5.7 7.2 8.3zm-7.2 8.7 9.9-5.7-2.7-2.6-7.2 8.3zm8-9.7 3.6 4.2 2.2-1.3c.8-.5.8-1.7 0-2.2l-2.2-1.3-3.6 4.2z" />
          </svg>
        </span>
        <span>Get it on Google Play</span>
      </span>
      <span className="ml-1 inline-flex items-center text-white/60 transition group-hover:text-white/80">
        →
      </span>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-wide text-indigo-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-900">
      {/* Background */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10">
          {/* dark base */}
          <div className="absolute inset-0 bg-neutral-950" />
          {/* soft gradient glow */}
          <div className="absolute -top-40 left-1/2 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-cyan-400/15 to-emerald-400/10 blur-3xl" />
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        {/* Shell */}
        <div className="bg-white/95">
          {/* Top Bar */}
          <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <LogoMark />
                <div className="leading-tight">
                  <div className="text-sm font-semibold">Machine Monitors</div>
                  <div className="text-xs text-neutral-600">
                    Buffered incident video capture
                  </div>
                </div>
              </div>

              <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
                <a href="#features" className="hover:text-neutral-900">
                  Features
                </a>
                <a href="#workflow" className="hover:text-neutral-900">
                  Workflow
                </a>
                <a href="#use-cases" className="hover:text-neutral-900">
                  Use cases
                </a>
                <a href="#faq" className="hover:text-neutral-900">
                  FAQ
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <PlayButton className="hidden sm:inline-flex" />
                <PlayButton className="sm:hidden px-4 py-2 text-xs rounded-lg" />
              </div>
            </div>
          </header>

          {/* Hero */}
          <section className="border-b border-neutral-200">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Android • Industrial & retail environments
                  </div>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                    Capture equipment malfunctions with context — without manual editing
                  </h1>

                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                    Machine Monitors continuously buffers live camera video. When an
                    issue happens, tap one button to save the moments before and during
                    the event. Clips are stored locally and can be previewed or shared
                    immediately.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <PlayButton />
                    <div className="text-sm text-neutral-600">
                      No signup. No web onboarding. Local storage output.
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                      <div className="text-sm font-semibold">Before + during</div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Capture the lead-up and failure mode.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                      <div className="text-sm font-semibold">Local clips</div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Saved to device media storage.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                      <div className="text-sm font-semibold">Fast sharing</div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Send to maintenance or support.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right panel */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
                    <div className="border-b border-neutral-200 p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-neutral-900">
                          Incident capture preview
                        </div>
                        <div className="text-xs text-neutral-500">Illustrative</div>
                      </div>
                      <div className="mt-2 text-sm text-neutral-600">
                        Buffer → Tap → Saved clip
                      </div>
                    </div>

                    <div className="space-y-3 p-5">
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                        <div className="text-xs font-semibold text-neutral-500">
                          BUFFERING
                        </div>
                        <div className="mt-1 text-sm text-neutral-700">
                          Live video buffered in the background
                        </div>
                      </div>

                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                        <div className="text-xs font-semibold text-neutral-500">
                          INCIDENT
                        </div>
                        <div className="mt-1 text-sm text-neutral-700">
                          Tap once to save before + during
                        </div>
                      </div>

                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                        <div className="text-xs font-semibold text-neutral-500">
                          OUTPUT
                        </div>
                        <div className="mt-1 text-sm text-neutral-700">
                          Clip stored locally for preview/share
                        </div>
                      </div>

                      <div className="pt-2">
                        <PlayButton className="w-full" />
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-neutral-500">
                    Designed for supervisors, operators, and managers documenting real
                    equipment behavior on-site.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="py-14 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <SectionHeading
                eyebrow="FEATURES"
                title="Built for practical incident documentation"
                description="Focused on capturing a usable clip quickly with minimal steps."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-sm font-semibold text-neutral-900">
                        {f.title}
                      </div>
                      <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-400/10 ring-1 ring-black/5" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section
            id="workflow"
            className="border-y border-neutral-200 bg-neutral-50 py-14 sm:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <SectionHeading
                eyebrow="WORKFLOW"
                title="Simple on-site process"
                description="A consistent flow across shifts and locations."
              />

              <div className="mt-10 grid gap-4 lg:grid-cols-4">
                {workflows.map((w) => (
                  <div
                    key={w.step}
                    className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-900 text-sm font-semibold text-white shadow-sm">
                        {w.step}
                      </div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {w.title}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {w.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    Install and use immediately
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    No email capture. No onboarding flow. Local storage output.
                  </div>
                </div>
                <PlayButton />
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section id="use-cases" className="py-14 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <SectionHeading
                eyebrow="USE CASES"
                title="Typical deployments"
                description="For teams responsible for uptime and issue documentation."
              />

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {useCases.map((u) => (
                  <div
                    key={u.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-neutral-900">
                      {u.title}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                      {u.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">
                      Standardize incident capture on Android
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Install from Google Play and use existing devices on-site.
                    </div>
                  </div>
                  <PlayButton />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="border-t border-neutral-200 py-14 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <SectionHeading
                eyebrow="FAQ"
                title="Operational questions"
                description="Quick answers for deployment and usage."
              />

              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                {faqs.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-neutral-900">
                      {f.q}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    Machine Monitors
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Buffered incident video capture for equipment issues.
                  </div>
                </div>
                <PlayButton />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-neutral-200 py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-neutral-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Machine Monitors</div>
              <div className="flex items-center gap-4">
                <Link
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900"
                >
                  Google Play
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

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
    title: "Clear handoff to maintenance",
    description:
      "Share a clip by email or messaging so support teams see what happened without guesswork.",
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
      "Open the saved clip from the gallery and send it to maintenance, facilities, or technical support.",
  },
];

const useCases = [
  {
    title: "Production supervisors",
    points: [
      "Capture intermittent jams, misfeeds, and stops with context.",
      "Reduce time spent explaining issues across shifts.",
      "Provide evidence for troubleshooting and root-cause review.",
    ],
  },
  {
    title: "Operations / facilities managers",
    points: [
      "Document conveyor, dock equipment, HVAC, or utility problems as they occur.",
      "Standardize incident documentation across sites.",
      "Send clips to vendors or internal teams to speed service decisions.",
    ],
  },
  {
    title: "Retail managers",
    points: [
      "Capture equipment failures (coolers, freezers, backroom systems) when they happen.",
      "Share clips with support teams without manual editing.",
      "Improve service calls with a clear visual record of the problem.",
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
    q: "Who is this for?",
    a: "Production supervisors, operations/facilities managers, and retail managers who need fast documentation of equipment issues.",
  },
  {
    q: "Is there an account or onboarding?",
    a: "No. Install from Google Play and use it directly.",
  },
];

function PlayButton({ className = "" }) {
  return (
    <Link
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-lg",
        "bg-black text-white px-5 py-3 text-sm font-semibold",
        "hover:bg-neutral-800 transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400",
        className,
      ].join(" ")}
      aria-label="Get Machine Monitors on Google Play"
    >
      Get it on Google Play
    </Link>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg border border-neutral-200 bg-neutral-50" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Machine Monitors</div>
              <div className="text-xs text-neutral-600">
                Incident video capture for equipment issues
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
            <PlayButton className="sm:hidden px-4 py-2 text-xs" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
                Android • Industrial & retail environments
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Save the moments before and during equipment malfunctions
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700">
                Machine Monitors continuously buffers live camera video. When an
                issue happens, tap one button to save a clip with context—stored
                directly on the device for fast review and sharing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <PlayButton />
                <p className="text-sm text-neutral-600">
                  Install directly from Google Play. No account required.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="text-sm font-semibold">Context included</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Capture what led up to the fault, not just the aftermath.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="text-sm font-semibold">Local output</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Saved to device media storage for standard workflows.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="text-sm font-semibold">Fast handoff</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Share clips with maintenance or support immediately.
                  </div>
                </div>
              </div>
            </div>

            {/* Visual placeholder panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-800">
                    Example capture flow
                  </div>
                  <div className="text-xs text-neutral-600">Illustrative</div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-medium text-neutral-500">
                      BUFFERING
                    </div>
                    <div className="mt-1 text-sm text-neutral-700">
                      Live camera feed is buffered continuously
                    </div>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-medium text-neutral-500">
                      INCIDENT
                    </div>
                    <div className="mt-1 text-sm text-neutral-700">
                      Tap once to save a clip with context
                    </div>
                  </div>

                  <div className="rounded-xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-medium text-neutral-500">
                      OUTPUT
                    </div>
                    <div className="mt-1 text-sm text-neutral-700">
                      Clip saved to device storage for preview and sharing
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <PlayButton className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Features built for practical documentation
            </h2>
            <p className="mt-3 text-neutral-700">
              Focused on creating a usable clip quickly, with minimal steps.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <div className="text-sm font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
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
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Workflow
            </h2>
            <p className="mt-3 text-neutral-700">
              A consistent process for supervisors, operators, and managers.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {workflows.map((w) => (
              <div
                key={w.step}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-sm font-semibold">
                    {w.step}
                  </div>
                  <div className="text-sm font-semibold">{w.title}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {w.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
            <div>
              <div className="text-sm font-semibold">
                Install and use immediately
              </div>
              <div className="mt-1 text-sm text-neutral-700">
                No email capture, no onboarding flow, no web setup.
              </div>
            </div>
            <PlayButton />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Use cases
            </h2>
            <p className="mt-3 text-neutral-700">
              For environments where equipment issues need quick, accurate documentation.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="text-sm font-semibold">{u.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {u.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-neutral-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">
                  Deploy on existing Android devices
                </div>
                <div className="mt-1 text-sm text-neutral-700">
                  Install from Google Play and standardize incident capture on-site.
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
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
            <p className="mt-3 text-neutral-700">
              Deployment and usage details.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="text-sm font-semibold">{f.q}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-semibold">Machine Monitors</div>
              <div className="mt-1 text-sm text-neutral-700">
                Android app for capturing equipment malfunctions with context.
              </div>
            </div>
            <PlayButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-neutral-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
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
  );
}

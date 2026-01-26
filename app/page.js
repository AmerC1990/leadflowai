"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

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
    >
      Get it on Google Play →
    </Link>
  );
}

function HeaderBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-800 text-white shadow-sm">
        <span className="text-xs font-bold">MM</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-blue-900">Machine Monitors</div>
        <div className="text-xs text-blue-700">
          Buffered equipment incident capture
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const [imgError, setImgError] = useState(false);

  // Cache-buster so deploy/CDN/browser cache can’t keep serving an old/missing file.
  const src = useMemo(() => {
    const v = Date.now(); // changes each load
    return `/app-capture.png?v=${v}`;
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[40px] bg-blue-500/25 blur-2xl" />

      {/* device */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/20 bg-neutral-950 shadow-2xl ring-1 ring-black/40">
        {/* top notch */}
        <div className="relative h-8 bg-neutral-950">
          <div className="absolute left-1/2 top-2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-neutral-800" />
        </div>

        {/* SCREEN */}
        <div className="relative aspect-[9/19] bg-black">
          {/* We use <img> so we can reliably use onError/onLoad */}
          <img
            src={src}
            alt="Machine Monitors app capture screen"
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
            onLoad={() => setImgError(false)}
          />

          {/* If missing, show a loud helpful overlay */}
          {imgError ? (
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="rounded-2xl bg-white/10 p-5 text-center ring-1 ring-white/15 backdrop-blur">
                <div className="text-sm font-semibold text-white">
                  Screenshot not loading
                </div>
                <div className="mt-2 text-xs text-white/80">
                  Expected file at:
                  <br />
                  <span className="font-mono text-white">/public/app-capture.png</span>
                  <br />
                  Accessible URL:
                  <br />
                  <span className="font-mono text-white">/app-capture.png</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* bottom */}
        <div className="h-6 bg-neutral-950" />
      </div>

      <p className="mt-3 text-center text-xs text-white/70">
        One-tap buffered recording interface
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <HeaderBrand />
          <PlayButton className="px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm" />
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-factory.jpg"
            alt="Industrial production line"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-950/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/80 to-blue-950/95" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/10">
                Android • Industrial & retail environments
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Capture equipment faults instantly
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100">
                Machine Monitors continuously buffers live camera video. When an
                equipment issue occurs, tap one button to save the moments before
                and during the malfunction — stored directly on the device.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <PlayButton />
                <span className="text-sm text-blue-200">
                  One-tap video buffer recording
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Before + during", "Capture context automatically"],
                  ["Local storage", "Saved to device media"],
                  ["Fast sharing", "Send to maintenance/support"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-blue-100">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-blue-900">
            Built for real equipment incidents
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["One-tap capture", "Save the incident without manual recording"],
              ["Buffered video", "Includes moments before failure"],
              ["Device storage", "Standard gallery access"],
              ["Clear handoff", "Share clips immediately"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <div className="mt-3 text-sm font-semibold text-blue-900">
                  {t}
                </div>
                <p className="mt-2 text-sm text-blue-700">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-6xl px-4 text-white sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

      {/* FOOTER */}
      <footer className="border-t border-blue-100 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-blue-700 sm:px-6">
          © {new Date().getFullYear()} Machine Monitors
        </div>
      </footer>
    </div>
  );
}

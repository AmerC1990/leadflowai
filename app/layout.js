import "./globals.css";

export const metadata = {
  title: "Machine Monitors - Capture Equipment Faults Instantly",
  description:
    "Machine Monitors is an Android app that buffers live camera video and lets supervisors and managers save the moments before and during equipment malfunctions, stored directly on the device for fast review and sharing.",
  metadataBase: new URL("https://www.flowleadpro.com/"),
  openGraph: {
    title: "Machine Monitors - Capture Equipment Faults Instantly",
    description:
      "Android app for capturing equipment malfunctions with buffered video. Save clips locally and share with maintenance or support.",
    type: "website",
    url: "https://www.flowleadpro.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}

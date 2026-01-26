// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Machine Monitors — Capture Equipment Faults Instantly",
  description:
    "Machine Monitors continuously buffers live video so production teams can record equipment faults with one tap and share clips with maintenance or technical support—no editing required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}

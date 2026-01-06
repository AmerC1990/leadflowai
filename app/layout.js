// app/layout.js
import './globals.css'; // <-- Make sure you import your globals.css here

export const metadata = {
  title: "FlowLeadPro — AI Patient Booking & Lead Qualification for Dentists",
  description:
    "FlowLeadPro instantly responds to dental patient inquiries, qualifies leads, and books consultations automatically — 24/7.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}

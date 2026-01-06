// app/layout.js
export const metadata = {
  title: "FlowLeadPro — AI Patient Booking & Lead Qualification for Dentists",
  description:
    "FlowLeadPro instantly responds to dental patient inquiries, qualifies leads, and books consultations automatically — 24/7.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

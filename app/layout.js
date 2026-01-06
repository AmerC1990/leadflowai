// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          FlowLeadPro — AI Patient Booking & Lead Qualification for Dentists
        </title>
        <meta
          name="description"
          content="FlowLeadPro instantly responds to dental patient inquiries, qualifies leads, and books consultations automatically — 24/7."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

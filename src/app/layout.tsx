import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "design-action — Evidence-grounded design synthesis",
  description:
    "Stop losing design decisions between meetings. design-action synthesizes evidence across your streams, stakeholders, and tools — with full source citations.",
  openGraph: {
    title: "design-action — The design evidence compiler",
    description:
      "Turn scattered design evidence from meetings, tasks, chat, and docs into grounded artifacts with citations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "design-action — Evidence-grounded design synthesis",
    description:
      "Turn scattered design evidence into grounded artifacts with citations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

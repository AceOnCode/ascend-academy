
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascend Academy | JEE, NEET & Foundation Coaching",
  description:
    "Build your future with Ascend Academy. Expert coaching and structured preparation for JEE Advanced, NEET UG, and Foundation courses.",
  applicationName: "Ascend Academy",
  keywords: [
    "Ascend Academy",
    "JEE coaching",
    "NEET coaching",
    "Foundation coaching",
  ],
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANGLE | Strategy Interface",
  description: "ANGLE Strategy Systems - We Measure The Box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

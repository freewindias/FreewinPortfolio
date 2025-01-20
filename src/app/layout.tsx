import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freewin's Portfolio",
  description: "Developer hu meh BC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-stone-200 text-stone-900">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "TimeIsNow",
  description: "Time is now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100svh] flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

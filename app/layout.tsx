import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

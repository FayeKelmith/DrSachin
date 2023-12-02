import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./ui/globals.css";
import Navigation from "@/app/ui/components/nav";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Home | Sidhra",
  description: "Professional personal website for Dr. Sachin Sidhra.",
  keywords:
    "Dr. Sachin Sidhra, Lovely Professional University, LPU, Soft Skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <nav>
          <Navigation />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

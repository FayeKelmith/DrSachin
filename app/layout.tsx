import type { Metadata } from "next";
import { lato } from "./ui/fonts";
import "./ui/globals.css";
import Navigation from "@/app/ui/components/Nav";
import { Provider } from "./providers";
import Footer from "@/app/ui/components/Footer";
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
        <Provider>
          <nav className="top-0 fixed w-full z-20">
            <Navigation />
          </nav>
          <main className="mx-0 h-auto">{children}</main>
          <footer>
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}

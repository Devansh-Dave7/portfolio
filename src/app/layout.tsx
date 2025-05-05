import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ClientBody from "./ClientBody";
import NavLink from "@/components/NavLink";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devansh - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>
          <div className="min-h-screen flex flex-col">
            <header className="py-6">
              <div className="container flex justify-between items-center">
                <Link href="/" className="text-xl font-medium">
                  DD
                </Link>
                <nav className="flex items-center space-x-8">
                  <NavLink href="#experience">
                    WORK
                  </NavLink>
                  <NavLink href="#about">
                    ABOUT
                  </NavLink>
                  <NavLink href="#contact">
                    CONTACT
                  </NavLink>
                  <ThemeToggle />
                </nav>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <ScrollToTop />
          </div>
        </ClientBody>
      </body>
    </html>
  );
}

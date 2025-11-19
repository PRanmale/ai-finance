import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import Index from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
      title: "AI Powered App",
      description: "AI Powered App",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <ClerkProvider>
                  <html lang="en" suppressHydrationWarning>
                        <Analytics />
                        <body className={`${inter.className}`}>
                              <ThemeProvider
                                    attribute="class"
                                    defaultTheme="dark"
                                    forcedTheme="dark"
                              >
                                    <Index />
                                    <main className="min-h-screen">
                                          {children}
                                    </main>
                                    <Toaster richColors />
                                    <Footer />
                              </ThemeProvider>
                        </body>
                  </html>
            </ClerkProvider>
      );
}

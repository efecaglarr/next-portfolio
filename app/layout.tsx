// layout.tsx
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehmet Efe Caglar - Full Stack Software Developer Portfolio",
  description:
    "Mehmet Efe Caglar, Software Engineering student and aspiring Full Stack Developer. Explore projects built with React, Next.js, Node.js, and more. Open to collaborations and always eager to learn and create innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={lexend.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

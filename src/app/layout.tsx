import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Title that appears in the browser tab
  title: "Virat Sirohi | SDE Portfolio",
  // 2. Description for Google Search results
  description: "Portfolio of Virat Sirohi, a 3rd Year BTech Student specializing in Java, DSA (NeetCode 250), and Full-Stack Development (MERN).",
  // 3. Keywords for SEO
  keywords: ["Virat Sirohi", "SDE Portfolio", "Java Developer", "MERN Stack", "React"],
  // 4. OpenGraph (How it looks on LinkedIn/WhatsApp)
  openGraph: {
    title: "Virat Sirohi | SDE Portfolio",
    description: "Building scalable applications with Java & MERN Stack.",
    url: "https://virat-portfolio-six.vercel.app/", 
    type: "website",
    images: [
      {
        url: "/profile1.png", 
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Levin Skye Aligway | Data Engineer Portfolio",
    template: "%s | Levin Skye Aligway"
  },
  description:
    "Portfolio of Levin Skye Aligway — IT Support Engineer transitioning into Data Engineering. Specializing in SQL, PostgreSQL, Oracle, OpenSearch, Grafana, and data pipeline automation.",
  keywords: [
    "Data Engineer portfolio",
    "SQL developer",
    "IT Support to Data Engineer",
    "PostgreSQL",
    "Oracle",
    "OpenSearch",
    "Grafana",
    "data pipeline",
    "Levin Aligway"
  ],
  authors: [{ name: "Levin Skye Aligway" }],
  creator: "Levin Skye Aligway",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://levin-data-engineer.vercel.app",
    title: "Levin Skye Aligway | Data Engineer Portfolio",
    description:
      "IT Support Engineer transitioning into Data Engineering — SQL, monitoring, and automation.",
    siteName: "Levin Skye Aligway Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Levin Skye Aligway | Data Engineer Portfolio",
    description:
      "IT Support Engineer transitioning into Data Engineering — SQL, monitoring, and automation."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

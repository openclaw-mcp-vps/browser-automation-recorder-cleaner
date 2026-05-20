import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoClean – Clean & Optimize Browser Automation Scripts",
  description: "Upload messy Selenium, Playwright, or Puppeteer recordings and get back clean, maintainable scripts powered by AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ee574495-3e5c-47a8-9874-21f92955d30c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

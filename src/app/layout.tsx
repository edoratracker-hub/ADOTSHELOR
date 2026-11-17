import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ADOT SHEL OR — Take Your Business Online",
  description:
    "Custom software, business identity, and ongoing IT support for start-ups moving from offline to online.",
  metadataBase: new URL("https://adotshelor.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ADOT SHEL OR — Take Your Business Online",
    description:
      "Custom software, business identity, and ongoing IT support for start-ups moving from offline to online.",
    url: "https://adotshelor.com",
    siteName: "ADOT SHEL OR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADOT SHEL OR — Take Your Business Online",
    description:
      "Software, business identity, and practical IT support for start-ups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B1020] text-[#F4F6FB] selection:bg-[#3F63E6]/30 selection:text-[#F4F6FB]">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.newleafwindows.uk");
const googleAdsId = "AW-18194635837";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Newleaf Windows & Doors | Northamptonshire Windows and Doors",
    template: "%s | Newleaf Windows & Doors",
  },
  description:
    "Newleaf supplies and installs quality windows and doors across Northamptonshire, including Kettering, Desborough, Northampton, Wellingborough, Corby and nearby villages.",
  keywords: [
    "windows Northamptonshire",
    "doors Northamptonshire",
    "windows and doors Kettering",
    "windows and doors Desborough",
    "front doors Northamptonshire",
    "replacement windows Northamptonshire",
  ],
  openGraph: {
    title: "Newleaf Windows & Doors",
    description:
      "Quality windows and doors installed across Northamptonshire from the Newleaf showroom near Kettering.",
    images: ["/hero.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

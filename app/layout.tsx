import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID!;

const independent = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-independent",
  weight: ["400", "500", "600", "700"],
});

const lausanne = Lato({
  subsets: ["latin"],
  variable: "--font-lausanne",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Time To Stay | Lagos Detty December Survival Guide",
  description:
    "Practical, on-the-ground information for visitors in Lagos during Detty December. Real-world safety, transport, nightlife, and emergency guidance.",
  generator: "timetostay",
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon-light-32x32.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon-dark-32x32.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //     {
  //       url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  //   apple: "/apple-icon.png",
  // },
  authors: [{ name: "Time To Stay" }],
  creator: "Time To Stay",
  publisher: "Time To Stay",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://december-guide.timetostay.com",
    siteName: "December Guide - Lagos",
    title: "Time To Stay — Lagos Detty December Survival Guide",
    description:
      "Practical, on-the-ground information for visitors in Lagos during Detty December",
    images: [
      {
        url: "/overview-image-of-lagos-city.jpg",
        width: 1200,
        height: 1200,
        alt: "The Ultimate Detty December Guide - Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Time To Stay — Lagos Detty December Survival Guide",
    description: "Practical, on-the-ground information for visitors in Lagos during Detty December",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${lausanne.variable} ${independent.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

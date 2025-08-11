import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tarek H - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preload" as="image" href="assets/images/user/Profile.jpeg" />
        <link
          rel="preload"
          as="image"
          href="assets/images/item/small-comet.png"
        />
        <link rel="icon" href="assets/images/logo/th-fav.png" />

        <link rel="stylesheet" href="/styles/old/old1.css" />
        <link rel="stylesheet" href="/styles/old/old2.css" />
        <link rel="stylesheet" href="/styles/old/old3.css" />
        <link rel="stylesheet" href="/styles/old/old4.css" />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/animation.js" strategy="afterInteractive" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

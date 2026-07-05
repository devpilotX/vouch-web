import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

// Everything a link preview or search result needs to make sense at a glance.
export const metadata: Metadata = {
  metadataBase: new URL("https://vouch.family"),
  title: "Vouch. Know it's really them",
  description:
    "Scammers can clone your family's voice from a few seconds of audio. Vouch lets you confirm a call is real in one tap. Free for families.",
  keywords: [
    "voice clone scam",
    "AI scam call",
    "call verification",
    "family safety",
    "elderly scam protection",
  ],
  openGraph: {
    title: "Vouch. Know it's really them",
    description:
      "Confirm a scary call is really your family in one tap. Free for families, forever.",
    type: "website",
    siteName: "Vouch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vouch. Know it's really them",
    description: "Confirm a scary call is really your family in one tap.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Plausible is privacy friendly and only loads if we have set a domain.
  // No cookie banners, no creepy tracking, which fits the brand.
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en">
      <body>
        {children}
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}

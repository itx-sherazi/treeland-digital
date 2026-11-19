import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Treeland Digital | Web Development, Software & Digital Growth Solutions",
  description: site.description,
  keywords: [
    "digital agency Lahore",
    "web development",
    "WordPress development",
    "custom software development",
    "CRM development",
    "mobile app development",
    "SEO services",
    "UI/UX design",
    "e-commerce development",
    "digital marketing",
    "AI automation",
    "SaaS development",
  ],
  openGraph: {
    type: "website",
    title: "Treeland Digital | Web Development, Software & Digital Growth Solutions",
    description: site.description,
    siteName: site.name,
    images: [{ url: "/logo.png", width: 2172, height: 724, alt: "Treeland Digital logo" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treeland Digital",
    description: site.description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b4a3f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  telephone: "+92-42-36287878",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Treeland House, Ground Floor, 25A/1, Davis Road",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+92-42-36287878", contactType: "customer service" },
    { "@type": "ContactPoint", telephone: "+92-328-0200656", contactType: "sales" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-screen">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

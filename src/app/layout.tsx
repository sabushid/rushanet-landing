import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rushanet.com"),
  title: "AI Lead Automation for Real Estate Agents | Rushanet",
  description:
    "Stop losing leads. Our AI automation system responds to every lead in under 60 seconds via email, SMS, and phone — so you book more appointments and close more deals.",
  keywords:
    "real estate lead automation, AI lead follow-up, real estate CRM automation, automated appointment booking, automatisation immobilier, leads immobilier IA",
  authors: [{ name: "Rushanet" }],
  creator: "Rushanet",
  publisher: "Rushanet",
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
  alternates: {
    languages: {
      "en": "/",
      "fr": "/?lang=fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    title: "AI Lead Automation for Real Estate Agents | Rushanet",
    description:
      "Stop losing leads. Our AI automation system responds to every lead in under 60 seconds via email, SMS, and phone — so you book more appointments and close more deals.",
    siteName: "Rushanet",
    images: [
      {
        url: "/brand_logo.png",
        width: 1200,
        height: 630,
        alt: "Rushanet — AI Lead Automation for Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Automation for Real Estate Agents | Rushanet",
    description:
      "Stop losing leads. Respond to every lead in under 60 seconds via email, SMS, and phone.",
    images: ["/brand_logo.png"],
  },
};

function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rushanet",
    description:
      "AI-powered lead automation system for real estate professionals. Respond to every lead in under 60 seconds via email, SMS, and phone.",
    url: "https://rushanet.com",
    logo: "https://rushanet.com/brand_logo.png",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: ["United States", "Canada", "France"],
    },
    serviceType: [
      "AI Lead Automation",
      "Real Estate CRM Automation",
      "Automated Appointment Booking",
      "Multi-Channel Lead Follow-Up",
    ],
    knowsLanguage: ["English", "French"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast does the AI respond to new leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under 60 seconds via email, SMS, or phone call — 24/7, even when you're sleeping or on a showing.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need any technical skills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. The system runs on Google Sheets or Excel. We handle the entire setup — if you can read a spreadsheet, you can use this.",
        },
      },
      {
        "@type": "Question",
        name: "How many more appointments will I get?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most clients see a 30-50% increase in booked appointments within the first month. High-volume agents have seen up to +50%.",
        },
      },
      {
        "@type": "Question",
        name: "How much time will I save?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10-30+ hours per week by eliminating manual follow-ups, scheduling, and lead tracking.",
        },
      },
      {
        "@type": "Question",
        name: "What if I already have a CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our system complements existing tools. We integrate with most CRMs or replace the manual parts entirely.",
        },
      },
      {
        "@type": "Question",
        name: "How long does setup take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3-5 business days. We handle everything — you approve the setup and start receiving booked appointments.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-roboto)]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

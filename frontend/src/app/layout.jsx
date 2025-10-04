import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://gymmerzzgym.com"),
  title: {
    default: "Gymmerzz Gym | Best Gym in Mira Road | Celebrity Trainer",
    template: "%s | Gymmerzz Gym",
  },
  description:
    "Join Gymmerzz Gym in Mira Road. Premium facilities, certified trainers, personal training, cardio, yoga, steam, and more. Claim 3-day free trial and up to 60% off!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gymmerzz Gym | Best Gym in Mira Road",
    description:
      "Premium gym with celebrity trainer Sujeet Kargutkar. Book a free 3-day trial today!",
    url: "https://gymmerzzgym.com",
    siteName: "Gymmerzz Gym",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Gymmerzz Gym - Premium Facilities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gymmerzz Gym | Best Gym in Mira Road",
    description:
      "Premium gym with celebrity trainer Sujeet Kargutkar. Book a free 3-day trial today!",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "https://gymmerzzgym.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white `}>
        <Navbar />
        <main className="max-w-[1440px] mx-auto px-[16px] md:px[32px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "QR Code Hub - Free Client-Side Vector QR Code Generator Studio",
    template: "%s | QR Code Hub",
  },
  description: "Generate high-resolution SVG & PNG QR codes for URLs, WiFi networks, vCards, emails, and WhatsApp. 100% client-side privacy with custom logos and colors.",
  keywords: ["qr code generator", "free qr generator", "wifi qr code", "vcard qr code", "svg qr code", "logo qr code generator", "client-side qr code"],
  authors: [{ name: "Hlele" }],
  metadataBase: new URL("https://qrcode.robloxwikihub.com"),
  openGraph: {
    title: "QR Code Hub - Free Client-Side Vector QR Code Generator",
    description: "Instant SVG & PNG QR Code Generator for URLs, WiFi, vCard, and Custom Logos. No sign-up required.",
    url: "https://qrcode.robloxwikihub.com",
    siteName: "QR Code Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Hub - Free Vector QR Code Studio",
    description: "100% Client-Side Privacy Vector QR Code Studio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

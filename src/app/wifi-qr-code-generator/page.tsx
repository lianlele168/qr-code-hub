import React from 'react';
import type { Metadata } from 'next';
import QrStudio from '@/components/QrStudio';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Wifi, ShieldCheck, CheckCircle2, Lock, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: "https://qrcode.robloxwikihub.com/wifi-qr-code-generator" },
  title: "WiFi QR Code Generator - Share WiFi Password Instantly",
  description: "Create free WiFi QR codes so guests and customers can join WPA/WPA2/WEP WiFi networks without typing passwords. 100% private & client-side.",
};

export default function WifiQrPage() {
  const faqs = [
    {
      question: "How do smartphones connect to WiFi using a QR code?",
      answer: "iOS and Android cameras natively read standard WiFi QR protocols (WIFI:S:SSID;T:WPA;P:password;;). When scanned, a prompt appears asking to join the network with one tap."
    },
    {
      question: "Is it safe to generate a WiFi QR code online?",
      answer: "Yes, because our studio runs 100% client-side in your web browser. Your WiFi SSID and password are never uploaded to any server or logged anywhere."
    }
  ];

  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="WiFi QR Code Generator"
        description="Free online tool to generate instant WiFi connect QR codes for home, Airbnb, and guest networks."
        url="https://qrcode.robloxwikihub.com/wifi-qr-code-generator"
        faqs={faqs}
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <Wifi className="w-3.5 h-3.5" /> WiFi Network Generator
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          WiFi QR Code <span className="text-indigo-600">Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Generate custom WiFi QR codes for homes, offices, cafes, and Airbnb hosts. Guests scan to auto-connect to WPA/WPA2/WEP networks without re-typing passwords.
        </p>
      </section>

      {/* Main Studio Preset to WiFi */}
      <QrStudio initialMode="wifi" headline="WiFi Network QR Generator Studio" />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" /> How WiFi QR Codes Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">1. Select Network Type</h3>
            <p>Choose WPA/WPA2/WPA3 (most common), WEP, or Open network without password encryption.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">2. Enter SSID & Password</h3>
            <p>Type your network name and key. Check the hidden network option if your router SSID is unbroadcasted.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">3. Print or Frame</h3>
            <p>Download as vector SVG or PNG, print, and display near your entryway or desk for instant one-tap access.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

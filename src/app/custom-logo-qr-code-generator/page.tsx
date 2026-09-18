import React from 'react';
import type { Metadata } from 'next';
import QrStudio from '@/components/QrStudio';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Image as ImageIcon, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: "https://qrcode.robloxwikihub.com/custom-logo-qr-code-generator" },
  title: "Custom Logo QR Code Generator - Add Brand Icon Overlay",
  description: "Embed company logos and brand icons into the center of custom QR codes. Uses Level H 30% Error Correction for guaranteed camera scanning.",
};

export default function CustomLogoQrPage() {
  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="Custom Logo QR Code Generator"
        description="Add company logos, brand avatars, and custom icons to high-resolution QR codes."
        url="https://qrcode.robloxwikihub.com/custom-logo-qr-code-generator"
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <ImageIcon className="w-3.5 h-3.5" /> Brand Logo & Custom Icon Overlay
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Custom Logo <span className="text-indigo-600">QR Code Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Upload your company brand logo, app icon, or profile badge and embed it directly into the center of your QR codes with automated Level H 30% error correction protection.
        </p>
      </section>

      {/* Main Studio */}
      <QrStudio initialMode="url" headline="Branded Logo QR Studio" />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" /> How Central Logo Overlays Work safely
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Level H (30%) Error Correction</h3>
            <p>Our generator automatically boosts Reed-Solomon error correction to Level H, creating duplicate parity blocks so cameras read data even when 30% of the center is obscured.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Square Badge Protection</h3>
            <p>We automatically overlay a clean white boundary badge around your uploaded logo icon to prevent central barcode modules from clashing visually.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">High Contrast Matching</h3>
            <p>For optimal results, use transparent PNG logos or solid icons with crisp outer edges so your brand stands out clearly against the QR pattern.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

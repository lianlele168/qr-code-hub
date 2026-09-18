import React from 'react';
import type { Metadata } from 'next';
import QrStudio from '@/components/QrStudio';
import SchemaMarkup from '@/components/SchemaMarkup';
import { UserCheck, ShieldCheck, Download, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: "https://qrcode.robloxwikihub.com/vcard-qr-code-generator" },
  title: "vCard QR Code Generator - Digital Business Card Contact QR",
  description: "Generate instant vCard digital business card QR codes containing your name, phone number, email, company, and website. 100% free vector download.",
};

export default function VCardQrPage() {
  const faqs = [
    {
      question: "What happens when someone scans a vCard QR code?",
      answer: "The mobile operating system (iOS or Android) opens a native 'Add Contact' dialog with all fields automatically populated (Full Name, Phone, Email, Company, Title, Website)."
    },
    {
      question: "Will vCard QR codes work without an internet connection?",
      answer: "Yes! Standard vCard 3.0 specs store all contact fields locally inside the barcode image payload, so contacts can be saved offline."
    }
  ];

  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="vCard Digital Business Card QR Generator"
        description="Create print-ready contact card QR codes for physical business cards, email signatures, and networking badges."
        url="https://qrcode.robloxwikihub.com/vcard-qr-code-generator"
        faqs={faqs}
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <UserCheck className="w-3.5 h-3.5" /> Digital Business Card Tool
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          vCard Contact <span className="text-indigo-600">QR Code Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Turn your contact details into a contact-saving QR code. Perfect for business cards, event name badges, tradeshows, and email footers.
        </p>
      </section>

      {/* Main Studio Preset to vCard */}
      <QrStudio initialMode="vcard" headline="vCard Digital Contact Studio" />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Share2 className="w-5 h-5 text-indigo-600" /> Best Practices for Business Card QR Codes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Use SVG for Printing</h3>
            <p>Always print your business card using vector SVG format to ensure tiny 0.5-inch barcodes remain razor-sharp under print presses.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Keep Fields Essential</h3>
            <p>Only include critical fields (Name, Phone, Email, Org) to keep the QR matrix pattern clean and easy to scan at small print sizes.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">High Contrast Ratio</h3>
            <p>Maintain dark foreground dots on a light background. Avoid dark-on-dark colored business cards that confuse smartphone camera sensors.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

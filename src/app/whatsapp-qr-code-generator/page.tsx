import React from 'react';
import type { Metadata } from 'next';
import QrStudio from '@/components/QrStudio';
import SchemaMarkup from '@/components/SchemaMarkup';
import { PhoneCall, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "WhatsApp QR Code Generator - Click to Chat QR Generator",
  description: "Create direct WhatsApp click-to-chat QR codes pre-filled with phone number and welcome message. Ideal for customer service & sales.",
};

export default function WhatsAppQrPage() {
  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="WhatsApp Chat QR Code Generator"
        description="Free WhatsApp click-to-chat QR generator for customer support, lead generation, and business sales."
        url="https://qrcode.robloxwikihub.com/whatsapp-qr-code-generator"
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <PhoneCall className="w-3.5 h-3.5" /> WhatsApp Click-to-Chat Tool
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          WhatsApp Chat <span className="text-indigo-600">QR Code Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Generate direct WhatsApp click-to-chat QR codes. Customers scan to open WhatsApp instantly with your business phone number and a pre-written inquiry message.
        </p>
      </section>

      {/* Main Studio Preset to WhatsApp */}
      <QrStudio initialMode="whatsapp" headline="WhatsApp Customer Support QR Studio" />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-indigo-600" /> How WhatsApp QR Codes Help Drive Conversion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Zero Contact Saving</h3>
            <p>Customers don't need to manually type or save your phone number into their mobile address book to initiate a conversation.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Pre-Filled Inquiry Text</h3>
            <p>Define pre-written messages like "Hi, I would like to inquire about pricing" to lower friction and kickstart customer chats.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Print & Display Anywhere</h3>
            <p>Add WhatsApp QR codes to storefront windows, product flyers, packaging boxes, and table tents for instant live chat support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

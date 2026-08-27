import React from 'react';
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Lock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy - Client-Side Processing Guarantee",
  description: "Learn how QR Code Hub protects user privacy with 100% client-side browser processing and zero server data storage.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="portal-container max-w-4xl mx-auto space-y-8">
      <SchemaMarkup
        name="Privacy Policy & Trust"
        description="Privacy policy detailing 100% browser client-side execution."
        url="https://qr-code-hub.app/privacy-policy"
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
          <Lock className="w-3.5 h-3.5" /> Client-Side Privacy Guarantee
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy & <span className="text-indigo-600">Data Guarantee</span>
        </h1>
        <p className="text-xs text-slate-500 font-medium">Last updated: August 27, 2026</p>
      </section>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-xs text-slate-700 leading-relaxed shadow-sm">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Zero Server Processing & Storage</h2>
          <p>
            QR Code Hub is built on the core principle of complete data privacy. All QR code generation logic—including URL parsing, text rendering, vCard formatting, WiFi payload assembly, and image canvas drawing—runs strictly within your local device&apos;s web browser via JavaScript.
          </p>
          <p>
            No text strings, WiFi passwords, contact details, or uploaded brand images are ever transmitted to or stored on any external server or database.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Permanent Lifespan Guarantee</h2>
          <p>
            Because generated QR codes directly encode payload data into the static 2D module matrix, your QR codes will function indefinitely. There is no middleman redirect service, eliminating any risk of broken links due to platform service shutdowns or paywalls.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Analytics & Cookies</h2>
          <p>
            QR Code Hub does not track individual user scan behaviors or sell personal advertising profiles. We use standard standard web hosting telemetry purely for site uptime monitoring and DDoS prevention.
          </p>
        </section>
      </div>
    </div>
  );
}

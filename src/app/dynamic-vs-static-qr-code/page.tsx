import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Lock, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: "https://qrcode.robloxwikihub.com/dynamic-vs-static-qr-code" },
  title: "Dynamic vs Static QR Codes - Comprehensive Comparison Guide",
  description: "Learn the differences between Dynamic and Static QR codes. Discover why static QR codes never expire and how error correction levels work.",
};

export default function DynamicVsStaticGuidePage() {
  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="Dynamic vs Static QR Code Comparison Guide"
        description="Comprehensive technical guide comparing static and dynamic QR codes, security, tracking, and error correction."
        url="https://qrcode.robloxwikihub.com/dynamic-vs-static-qr-code"
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5" /> Technical Guide & Specs
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Dynamic vs Static <span className="text-indigo-600">QR Codes</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Everything you need to know about static payload storage vs redirect-server tracking, scan limits, privacy guarantees, and Reed-Solomon error correction.
        </p>
      </section>

      {/* Comparison Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider">
              <th className="p-4">Feature / Property</th>
              <th className="p-4 bg-emerald-50/50 text-emerald-900">Static QR Code (Generated Here)</th>
              <th className="p-4 text-slate-700">Dynamic QR Code (Commercial SaaS)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
            <tr>
              <td className="p-4 font-bold text-slate-900">Data Storage Location</td>
              <td className="p-4 bg-emerald-50/30 text-slate-900">Embedded directly in QR code matrix</td>
              <td className="p-4 text-slate-600">Shortened URL redirecting to SaaS server</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Expiration Risk</td>
              <td className="p-4 bg-emerald-50/30 text-emerald-700 font-bold">Never expires (Permanent)</td>
              <td className="p-4 text-amber-700 font-bold">Expires if SaaS plan is canceled</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Privacy & Security</td>
              <td className="p-4 bg-emerald-50/30 text-slate-900">100% Private, zero third-party tracking</td>
              <td className="p-4 text-slate-600">Scans tracked by redirect server analytics</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Editable After Printing?</td>
              <td className="p-4 bg-emerald-50/30 text-slate-600">No (Payload fixed in matrix)</td>
              <td className="p-4 text-emerald-700 font-bold">Yes (Server redirect can be changed)</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-900">Cost & Fees</td>
              <td className="p-4 bg-emerald-50/30 text-emerald-700 font-bold">100% Free Forever</td>
              <td className="p-4 text-slate-600">Requires $10 - $50/month subscription</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Error Correction Levels Breakdown */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Understanding Error Correction Levels (L, M, Q, H)</h2>
        <p className="text-xs text-slate-600 font-medium">
          QR codes use Reed-Solomon Error Correction algorithms to allow barcodes to be read even if parts are damaged, scuffed, or covered by custom center brand logos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-mono font-bold text-indigo-600 text-sm">Level L (7%)</span>
            <p className="text-slate-600 font-medium">Restores up to 7% of missing data. Smallest matrix size, best for long URLs without logos.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-mono font-bold text-indigo-600 text-sm">Level M (15%)</span>
            <p className="text-slate-600 font-medium">Restores up to 15% missing data. Default balance between code size and scanner reliability.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-mono font-bold text-indigo-600 text-sm">Level Q (25%)</span>
            <p className="text-slate-600 font-medium">Restores up to 25% missing data. Excellent for outdoor signage exposed to weather.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-mono font-bold text-indigo-600 text-sm">Level H (30%)</span>
            <p className="text-slate-600 font-medium">Restores up to 30% missing data. Required when embedding central custom logos & icons.</p>
          </div>
        </div>
      </section>

      <div className="text-center pt-4">
        <Link href="/" className="btn-ui btn-ui-primary text-xs py-3 px-6 inline-flex items-center gap-2">
          <span>Start Generating Free Static Vector QR Codes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

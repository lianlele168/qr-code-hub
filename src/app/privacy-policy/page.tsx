import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, Scale, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy - Client-Side Processing Guarantee | QR Code Hub",
  description: "Learn how QR Code Hub protects your privacy with 100% in-browser generation. No logs, no telemetry, and no data leaves your device.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-200">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-400 font-mono">
          <Link href="/" className="hover:text-indigo-300">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Privacy Policy</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO-SERVER CLIENT-SIDE GUARANTEE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Privacy Policy &amp; Security Disclosures
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Last updated: 2026 • 100% In-Browser QR Code Generation
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <p className="font-bold text-white">100% Client-Side</p>
            <p className="text-slate-400 text-[11px]">No data sent to server</p>
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
          <Lock className="h-5 w-5 shrink-0 text-amber-400" />
          <div>
            <p className="font-bold text-white">Zero Log Storage</p>
            <p className="text-slate-400 text-[11px]">No input saving</p>
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
          <Eye className="h-5 w-5 shrink-0 text-cyan-400" />
          <div>
            <p className="font-bold text-white">No Tracking</p>
            <p className="text-slate-400 text-[11px]">No behavioral cookies</p>
          </div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
          <Mail className="h-5 w-5 shrink-0 text-indigo-400" />
          <div>
            <p className="font-bold text-white">Verified Contact</p>
            <p className="text-slate-400 text-[11px]">48h response SLA</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>1. 100% Client-Side Rendering Guarantee</span>
          </h2>
          <p>
            QR Code Hub renders all QR codes directly in your browser using client-side JavaScript canvas and SVG engines. Your text, URLs, WiFi credentials, and vCards never touch our web servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>2. Zero Account &amp; Zero Data Retention</span>
          </h2>
          <p>
            No registration, login, or subscription is required. We do not store passwords, generated images, or scanned information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>3. Anonymous Hosting Logs</span>
          </h2>
          <p>
            Standard technical request logs (HTTP status codes, browser user-agent) may be processed by CDN providers for security and rate-limiting. No payload contents are logged.
          </p>
        </section>

        <section className="space-y-2 border-t border-slate-800 pt-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>4. Contact &amp; Inquiries</span>
          </h2>
          <p>
            For privacy inquiries or technical questions, contact our developer team at:
          </p>
          <div className="inline-block rounded-xl border border-indigo-500/30 bg-indigo-950/40 p-3 font-mono text-sm font-bold text-indigo-300">
            lianlele168@gmail.com
          </div>
        </section>
      </div>
    </div>
  );
}

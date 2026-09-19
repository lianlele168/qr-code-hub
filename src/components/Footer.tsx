import React from 'react';
import Link from 'next/link';
import { QrCode, ShieldCheck, Zap, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <QrCode className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-slate-900 text-base">QR Code <span className="text-indigo-600">Hub</span></span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Privacy-first, client-side vector QR code generator studio. Create customized QR codes for URLs, WiFi, vCards, and social channels with zero server logging.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full w-fit font-medium">
              <Lock className="w-3 h-3" />
              <span>100% Browser Local Processing</span>
            </div>
          </div>

          {/* Generator Tools */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Popular Generators</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/wifi-qr-code-generator" className="hover:text-indigo-600 transition-colors">WiFi Password QR Code Generator</Link></li>
              <li><Link href="/vcard-qr-code-generator" className="hover:text-indigo-600 transition-colors">vCard Digital Business Card QR</Link></li>
              <li><Link href="/vector-svg-qr-code-generator" className="hover:text-indigo-600 transition-colors">Print-Ready Vector SVG Generator</Link></li>
              <li><Link href="/custom-logo-qr-code-generator" className="hover:text-indigo-600 transition-colors">Custom Logo & Icon Overlay QR</Link></li>
            </ul>
          </div>

          {/* Social & Guides */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Social & Resources</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/whatsapp-qr-code-generator" className="hover:text-indigo-600 transition-colors">WhatsApp Direct Chat QR</Link></li>
              <li><Link href="/bulk-qr-code-generator" className="hover:text-indigo-600 transition-colors">Batch / Bulk CSV QR Generator</Link></li>
              <li><Link href="/dynamic-vs-static-qr-code" className="hover:text-indigo-600 transition-colors">Dynamic vs Static QR Code Guide</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-indigo-600 transition-colors">Privacy Policy & Trust</Link></li>
            </ul>
          </div>

          {/* Value Props */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Why QR Code Hub?</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" /> High resolution vector SVG download</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Never expires, zero tracking scripts</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-indigo-500" /> Free forever for personal & commercial use</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 font-medium">
          <p>© {new Date().getFullYear()} QR Code Hub. All rights reserved.</p>
          <p className="mt-1 text-slate-500">Reviewed by Hlele · Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail.com</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <Link href="/wifi-qr-code-generator" className="hover:text-slate-900">WiFi QR</Link>
            <Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

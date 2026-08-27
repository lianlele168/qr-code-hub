'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QrCode, ChevronDown, Wifi, UserCheck, Image as ImageIcon, Layers, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const tools = [
    { name: 'WiFi QR Generator', href: '/wifi-qr-code-generator', icon: Wifi },
    { name: 'vCard Business Card QR', href: '/vcard-qr-code-generator', icon: UserCheck },
    { name: 'Vector SVG Download', href: '/vector-svg-qr-code-generator', icon: QrCode },
    { name: 'Custom Logo QR Generator', href: '/custom-logo-qr-code-generator', icon: ImageIcon },
    { name: 'Batch / Bulk QR Generator', href: '/bulk-qr-code-generator', icon: Layers },
    { name: 'WhatsApp Chat QR', href: '/whatsapp-qr-code-generator', icon: PhoneCall },
    { name: 'Dynamic vs Static Guide', href: '/dynamic-vs-static-qr-code', icon: ShieldCheck },
  ];

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo & Subtitle */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">QR Code <span className="text-indigo-600">Hub</span></span>
            <span className="block text-[11px] text-slate-500 font-medium">Free Client-Side Vector QR Code Studio</span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">All Generators</Link>
          <Link href="/wifi-qr-code-generator" className="hover:text-indigo-600 transition-colors">WiFi QR</Link>
          <Link href="/vcard-qr-code-generator" className="hover:text-indigo-600 transition-colors">vCard QR</Link>
          <Link href="/custom-logo-qr-code-generator" className="hover:text-indigo-600 transition-colors">Logo QR</Link>
          <Link href="/dynamic-vs-static-qr-code" className="hover:text-indigo-600 transition-colors">QR Guide</Link>
        </nav>

        {/* Right CTA / Dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              onBlur={() => setTimeout(() => setOpen(false), 200)}
              className="btn-ui text-xs bg-slate-50 hover:bg-slate-100"
            >
              <span>More Tools</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl p-2 shadow-xl z-50 space-y-1">
                {tools.map((t) => {
                  const Icon = t.icon;
                  return (
                    <Link
                      key={t.href}
                      href={t.href}
                      className="flex items-center gap-3 px-3 py-2.5 text-xs text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                    >
                      <Icon className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{t.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/" className="btn-ui btn-ui-primary text-xs hidden sm:inline-flex">
            <Sparkles className="w-3.5 h-3.5" /> Studio
          </Link>
        </div>
      </div>
    </header>
  );
}

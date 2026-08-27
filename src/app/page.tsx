import React from 'react';
import Link from 'next/link';
import QrStudio from '@/components/QrStudio';
import SchemaMarkup from '@/components/SchemaMarkup';
import { 
  Wifi, UserCheck, Image as ImageIcon, Layers, PhoneCall, ShieldCheck, 
  Sparkles, Download, CheckCircle2, HelpCircle, ArrowRight, Zap, QrCode, Lock
} from 'lucide-react';

export default function HomePage() {
  const faqs = [
    {
      question: "Are QR codes generated here free for commercial use?",
      answer: "Yes! All QR codes generated on QR Code Hub are 100% free for both personal and commercial projects. They are standard static QR codes that never expire and have no scan limits."
    },
    {
      question: "Do generated QR codes ever expire?",
      answer: "No. The QR codes generated on this website encode your exact data directly into the matrix payload. Because there is no middleman redirect server, your QR code will work permanently."
    },
    {
      question: "Is my input data or contact information sent to any server?",
      answer: "Never. QR Code Hub operates entirely within your web browser using client-side JavaScript canvas rendering. Your URLs, passwords, and contact info never leave your browser."
    },
    {
      question: "What format should I download for high-quality printing?",
      answer: "For professional printing on banners, business cards, packaging, or billboards, download the SVG vector format. SVG files scale infinitely without pixelation or quality loss."
    }
  ];

  return (
    <div className="portal-container space-y-12">
      <SchemaMarkup
        name="QR Code Hub - Free Client-Side Vector QR Code Generator Studio"
        description="Create customized high-resolution SVG & PNG QR codes for URLs, WiFi, vCards, emails, and social chat. 100% client-side privacy."
        url="https://qr-code-hub.app"
        faqs={faqs}
      />

      {/* Hero Header */}
      <section className="hero-banner text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" /> High Resolution Vector & Custom Logo Studio
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Free Client-Side <span className="text-indigo-600">QR Code Studio</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Generate instant, print-ready QR codes for websites, WiFi networks, digital business cards (vCard), and custom logos. Free forever, zero server tracking.
        </p>

        {/* Value Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-emerald-600" /> 100% Browser Local</span>
          <span className="flex items-center gap-1.5"><Download className="w-4 h-4 text-indigo-600" /> SVG & PNG Download</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Never Expires</span>
        </div>
      </section>

      {/* Core Studio Tool */}
      <section id="studio">
        <QrStudio headline="Interactive QR Code Studio" />
      </section>

      {/* Specialized Generators Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Specialized QR Code Tools</h2>
            <p className="text-xs text-slate-500 font-medium">Choose a dedicated template tuned for specific use-cases</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tool 1 */}
          <Link href="/wifi-qr-code-generator" className="tool-tile">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">WiFi QR Code Generator</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Allow guests to connect to WPA/WPA2/WEP WiFi instantly by scanning without typing complex passwords.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Open WiFi Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Tool 2 */}
          <Link href="/vcard-qr-code-generator" className="tool-tile">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">vCard Contact QR Generator</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Share digital business cards with full contact info, phone, email, company, and social links instantly.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Create vCard QR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Tool 3 */}
          <Link href="/custom-logo-qr-code-generator" className="tool-tile">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Custom Logo & Icon Overlay</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Embed company branding, logos, or icons into the center of your QR codes with High error correction (30%).
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Upload Custom Logo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Tool 4 */}
          <Link href="/vector-svg-qr-code-generator" className="tool-tile">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Vector SVG & Print Format</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Export ultra-crisp vector SVG QR codes ideal for print shop press, posters, and physical signage.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Download Vector SVG</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Tool 5 */}
          <Link href="/whatsapp-qr-code-generator" className="tool-tile">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">WhatsApp Chat QR Code</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Generate direct WhatsApp click-to-chat QR codes pre-populated with customer support welcome messages.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Build WhatsApp QR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Tool 6 */}
          <Link href="/bulk-qr-code-generator" className="tool-tile">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Batch / Bulk QR Code Tool</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Generate multiple QR codes simultaneously for bulk URLs or inventory SKUs with clean batch exports.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Generate Bulk Batch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* Guide Section: Dynamic vs Static */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Why Use Static Client-Side QR Codes?</h2>
            <p className="text-xs text-slate-500 font-medium">Understanding safety, privacy, and permanent reliability</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5"><Lock className="w-4 h-4 text-emerald-600" /> Absolute Privacy</h4>
            <p>
              Unlike commercial QR platforms that route scans through external tracking servers, our codes directly store payload data inside the QR pattern. No data is stored or tracked.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-500" /> Infinite Scan Lifespan</h4>
            <p>
              Static QR codes generated here never expire. As long as your website or destination link stays live, your printed QR code will function indefinitely without subscription fees.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5"><Download className="w-4 h-4 text-indigo-600" /> High Error Correction (30%)</h4>
            <p>
              Our studio defaults to Level H Error Correction, allowing up to 30% of the QR matrix to be covered by brand logos or scuffed in print while remaining fully readable by smartphone cameras.
            </p>
          </div>
        </div>

        <div className="pt-2 text-right">
          <Link href="/dynamic-vs-static-qr-code" className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1">
            Read Complete Dynamic vs Static Comparison Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-indigo-600" /> Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs shrink-0 font-mono">Q</span>
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

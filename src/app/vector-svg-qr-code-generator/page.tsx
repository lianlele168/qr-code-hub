import React from 'react';
import type { Metadata } from 'next';
import QrStudio from '@/components/QrStudio';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Download, Sparkles, Printer, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: "Vector SVG QR Code Generator - Print-Ready Resolution",
  description: "Generate scalable vector SVG QR codes for professional print shop press, posters, and billboards. 100% resolution loss-free SVG & PNG export.",
};

export default function VectorSvgQrPage() {
  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="Vector SVG QR Code Generator"
        description="Scalable SVG vector QR code export tool for professional Graphic Designers and Print Shops."
        url="https://qrcode.robloxwikihub.com/vector-svg-qr-code-generator"
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <Printer className="w-3.5 h-3.5" /> Scalable Vector SVG Format
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Print-Ready Vector SVG <span className="text-indigo-600">QR Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Export crisp vector SVG and high-resolution PNG barcodes for Adobe Illustrator, Figma, Photoshop, product packaging, and large physical billboards.
        </p>
      </section>

      {/* Main Studio */}
      <QrStudio initialMode="url" headline="Vector SVG Studio with Scalable Paths" />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" /> Why Graphic Designers Prefer SVG Vector QR Codes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Infinite Scaling</h3>
            <p>Unlike PNG or JPG rasters that become pixelated when enlarged, SVG vector paths scale to billboard sizes without any loss in resolution.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">CMYK & Dye-Sub Safe</h3>
            <p>SVG files import directly into Adobe Illustrator or InDesign, allowing print pre-flight teams to assign precise CMYK color swatches.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <h3 className="font-bold text-slate-900 text-sm">Tiny File Size</h3>
            <p>SVG XML vector code is lightweight (&lt; 2 KB), making it ideal for embedding into web layouts, mobile apps, and email newsletters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

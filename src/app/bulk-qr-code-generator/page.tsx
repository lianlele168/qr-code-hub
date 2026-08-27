'use client';

import React, { useState } from 'react';
import QRCode from 'qrcode';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Layers, Download, RefreshCw, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export default function BulkQrPage() {
  const [bulkInput, setBulkInput] = useState(
    "https://example.com/product-1\nhttps://example.com/product-2\nhttps://example.com/product-3"
  );
  const [generatedItems, setGeneratedItems] = useState<Array<{ text: string; dataUrl: string }>>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGenerateBulk = async () => {
    setIsProcessing(true);
    const lines = bulkInput
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    const items: Array<{ text: string; dataUrl: string }> = [];

    for (const line of lines) {
      try {
        const url = await QRCode.toDataURL(line, {
          width: 300,
          margin: 2,
          color: { dark: '#0F172A', light: '#FFFFFF' },
          errorCorrectionLevel: 'M',
        });
        items.push({ text: line, dataUrl: url });
      } catch (err) {
        console.error('Bulk item error:', err);
      }
    }

    setGeneratedItems(items);
    setIsProcessing(false);
  };

  const handleDownloadSingle = (dataUrl: string, index: number) => {
    const link = document.createElement('a');
    link.download = `bulk-qr-${index + 1}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="portal-container space-y-10">
      <SchemaMarkup
        name="Batch Bulk QR Code Generator"
        description="Generate dozens of QR codes at once for inventory SKUs, batch URLs, and ticket IDs."
        url="https://qrcode.robloxwikihub.com/bulk-qr-code-generator"
      />

      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
          <Layers className="w-3.5 h-3.5" /> Multi-Line & Batch Generator
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Batch Bulk <span className="text-indigo-600">QR Code Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl">
          Enter multiple URLs or text strings (one per line) to generate a batch of QR codes instantly in your browser. Download individually or review generated assets.
        </p>
      </section>

      {/* Input Section */}
      <div className="editor-surface space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
            <span>Enter Payload Items (One Per Line)</span>
            <span className="text-slate-400 font-normal">Max 50 lines per batch</span>
          </label>
          <textarea
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-mono outline-none focus:border-indigo-600 min-h-[160px]"
            placeholder="https://site.com/item1&#10;https://site.com/item2&#10;https://site.com/item3"
            value={bulkInput}
            onChange={(e) => setBulkInput(e.target.value)}
          />
        </div>

        <button
          onClick={handleGenerateBulk}
          disabled={isProcessing}
          className="btn-ui btn-ui-primary text-xs py-3 px-6 w-full sm:w-auto"
        >
          {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          <span>{isProcessing ? 'Processing Batch...' : 'Generate All QR Codes'}</span>
        </button>
      </div>

      {/* Results Grid */}
      {generatedItems.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-lg font-bold text-slate-900">
              Generated Batch ({generatedItems.length} Codes)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {generatedItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center space-y-3 shadow-sm">
                <img src={item.dataUrl} alt={`QR ${idx + 1}`} className="w-36 h-36 border border-slate-100 rounded-lg" />
                <p className="text-[11px] font-mono text-slate-600 truncate w-full text-center" title={item.text}>
                  {item.text}
                </p>
                <button
                  onClick={() => handleDownloadSingle(item.dataUrl, idx)}
                  className="btn-ui text-xs w-full py-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download PNG #{idx + 1}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

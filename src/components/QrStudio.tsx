'use client';

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  QrCode, Download, Copy, Check, RefreshCw, Upload, Image as ImageIcon, 
  Wifi, UserCheck, Mail, MessageSquare, PhoneCall, Globe, FileText, Settings2, Sparkles 
} from 'lucide-react';

interface QrStudioProps {
  initialMode?: 'url' | 'text' | 'wifi' | 'vcard' | 'email' | 'sms' | 'whatsapp';
  headline?: string;
}

export default function QrStudio({ initialMode = 'url', headline }: QrStudioProps) {
  const [mode, setMode] = useState(initialMode);
  
  // Data Inputs
  const [urlInput, setUrlInput] = useState('https://qrcode.robloxwikihub.com');
  const [textInput, setTextInput] = useState('');
  
  // WiFi
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [wifiHidden, setWifiHidden] = useState(false);

  // vCard
  const [vFirstName, setVFirstName] = useState('');
  const [vLastName, setVLastName] = useState('');
  const [vOrg, setVOrg] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vWebsite, setVWebsite] = useState('');

  // Email
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  // SMS / WhatsApp
  const [phoneNum, setPhoneNum] = useState('');
  const [chatMessage, setChatMessage] = useState('');

  // Customization Specs
  const [fgColor, setFgColor] = useState('#0F172A');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [ecl, setEcl] = useState<'L' | 'M' | 'Q' | 'H'>('H');
  const [qrSize, setQrSize] = useState(300);
  const [margin, setMargin] = useState(2);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const [copied, setCopied] = useState(false);
  const [dataString, setDataString] = useState('');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Compute final QR String based on current mode & input fields
  useEffect(() => {
    let payload = '';

    if (mode === 'url') {
      payload = urlInput.trim() || 'https://qr-code-hub.app';
    } else if (mode === 'text') {
      payload = textInput.trim() || 'Welcome to QR Code Hub';
    } else if (mode === 'wifi') {
      // WIFI:S:SSID;T:WPA;P:PASSWORD;H:true;;
      const hiddenStr = wifiHidden ? 'H:true;' : '';
      payload = `WIFI:S:${wifiSsid};T:${wifiEncryption};P:${wifiPassword};${hiddenStr};`;
    } else if (mode === 'vcard') {
      payload = 
        `BEGIN:VCARD\n` +
        `VERSION:3.0\n` +
        `N:${vLastName};${vFirstName};;;\n` +
        `FN:${vFirstName} ${vLastName}\n` +
        `ORG:${vOrg}\n` +
        `TEL:${vPhone}\n` +
        `EMAIL:${vEmail}\n` +
        `URL:${vWebsite}\n` +
        `END:VCARD`;
    } else if (mode === 'email') {
      payload = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    } else if (mode === 'sms') {
      payload = `smsto:${phoneNum}:${chatMessage}`;
    } else if (mode === 'whatsapp') {
      const cleanPhone = phoneNum.replace(/[^\d]/g, '');
      payload = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(chatMessage)}`;
    }

    setDataString(payload);
  }, [
    mode, urlInput, textInput, wifiSsid, wifiPassword, wifiEncryption, wifiHidden,
    vFirstName, vLastName, vOrg, vPhone, vEmail, vWebsite, emailTo, emailSubject, emailBody, phoneNum, chatMessage
  ]);

  // Render QR Code onto Canvas
  useEffect(() => {
    if (!canvasRef.current || !dataString) return;

    QRCode.toCanvas(canvasRef.current, dataString, {
      width: qrSize,
      margin: margin,
      color: {
        dark: fgColor,
        light: bgColor,
      },
      errorCorrectionLevel: ecl,
    }, (error) => {
      if (error) console.error('QR Render Error:', error);
      else if (logoUrl && canvasRef.current) {
        // Draw Center Logo Overlay
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            const logoSize = qrSize * 0.22;
            const x = (qrSize - logoSize) / 2;
            const y = (qrSize - logoSize) / 2;
            
            // Draw background badge behind logo
            ctx.fillStyle = bgColor;
            ctx.fillRect(x - 4, y - 4, logoSize + 8, logoSize + 8);
            
            // Draw logo image
            ctx.drawImage(img, x, y, logoSize, logoSize);
          };
          img.src = logoUrl;
        }
      }
    });
  }, [dataString, fgColor, bgColor, ecl, qrSize, margin, logoUrl]);

  // Handle PNG Download
  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `qrcode-hub-${mode}-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  // Handle SVG Download
  const handleDownloadSvg = () => {
    QRCode.toString(dataString, {
      type: 'svg',
      margin: margin,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: ecl,
    }, (err, svgString) => {
      if (err) return;
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `qrcode-hub-${mode}-${Date.now()}.svg`;
      link.href = url;
      link.click();
    });
  };

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(dataString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="editor-surface space-y-6">
      {headline && (
        <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-indigo-600" /> {headline}
          </h2>
          <span className="bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
            100% Client-Side Privacy
          </span>
        </div>
      )}

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
        {[
          { id: 'url', label: 'URL / Link', icon: Globe },
          { id: 'text', label: 'Plain Text', icon: FileText },
          { id: 'wifi', label: 'WiFi Network', icon: Wifi },
          { id: 'vcard', label: 'vCard Contact', icon: UserCheck },
          { id: 'email', label: 'Email', icon: Mail },
          { id: 'sms', label: 'SMS Message', icon: MessageSquare },
          { id: 'whatsapp', label: 'WhatsApp Chat', icon: PhoneCall },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = mode === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setMode(item.id as typeof mode)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {mode === 'url' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Website URL</label>
              <input
                type="url"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600 text-slate-900 font-medium"
                placeholder="https://example.com"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
              />
            </div>
          )}

          {mode === 'text' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Text Content</label>
              <textarea
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm outline-none focus:border-indigo-600 text-slate-900 font-medium min-h-[140px]"
                placeholder="Enter plain text, promo codes, or custom notes..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>
          )}

          {mode === 'wifi' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">Network Name (SSID)</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-600 text-slate-900 font-medium"
                  placeholder="MyHomeWiFi"
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">Password</label>
                  <input
                    type="password"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-600 text-slate-900 font-medium"
                    placeholder="WiFi Password"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">Encryption</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-600 text-slate-900 font-medium cursor-pointer"
                    value={wifiEncryption}
                    onChange={(e) => setWifiEncryption(e.target.value as 'WPA' | 'WEP' | 'nopass')}
                  >
                    <option value="WPA">WPA / WPA2 / WPA3</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">Open (No Password)</option>
                  </select>
                </div>
              </div>
              <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={wifiHidden}
                  onChange={(e) => setWifiHidden(e.target.checked)}
                  className="accent-indigo-600"
                />
                <span>Hidden Network</span>
              </label>
            </div>
          )}

          {mode === 'vcard' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                    placeholder="Jane"
                    value={vFirstName}
                    onChange={(e) => setVFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                    placeholder="Doe"
                    value={vLastName}
                    onChange={(e) => setVLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Organization / Company</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                    placeholder="Acme Inc."
                    value={vOrg}
                    onChange={(e) => setVOrg(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                    placeholder="+1 555 123 4567"
                    value={vPhone}
                    onChange={(e) => setVPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                    placeholder="jane@example.com"
                    value={vEmail}
                    onChange={(e) => setVEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Website</label>
                  <input
                    type="url"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                    placeholder="https://example.com"
                    value={vWebsite}
                    onChange={(e) => setVWebsite(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {mode === 'email' && (
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Target Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                  placeholder="contact@company.com"
                  value={emailTo}
                  onChange={(e) => setEmailTo(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Subject</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                  placeholder="Inquiry regarding services"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Message Body</label>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm outline-none focus:border-indigo-600 min-h-[90px]"
                  placeholder="Hello team..."
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                />
              </div>
            </div>
          )}

          {(mode === 'sms' || mode === 'whatsapp') && (
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Phone Number (with Country Code)</label>
                <input
                  type="tel"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm outline-none focus:border-indigo-600"
                  placeholder="+14155552671"
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Pre-filled Message</label>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm outline-none focus:border-indigo-600 min-h-[90px]"
                  placeholder="Hi there! I saw your QR code..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Style Customization Accordion */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Settings2 className="w-4 h-4 text-indigo-600" /> Style & Logo Options</span>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-slate-600">Foreground Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0"
                  />
                  <input
                    type="text"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-600">Background Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Sliders & ECL */}
            <div className="grid grid-cols-3 gap-4 text-xs font-semibold">
              <div>
                <label className="text-slate-600 block mb-1">Size ({qrSize}px)</label>
                <input
                  type="range"
                  min="200"
                  max="600"
                  step="20"
                  value={qrSize}
                  onChange={(e) => setQrSize(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div>
                <label className="text-slate-600 block mb-1">Margin ({margin})</label>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div>
                <label className="text-slate-600 block mb-1">Error Correction</label>
                <select
                  value={ecl}
                  onChange={(e) => setEcl(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                  className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs cursor-pointer font-bold"
                >
                  <option value="L">L (7% Recovery)</option>
                  <option value="M">M (15% Recovery)</option>
                  <option value="Q">Q (25% Recovery)</option>
                  <option value="H">H (30% Best Logo)</option>
                </select>
              </div>
            </div>

            {/* Logo Image Upload */}
            <div className="space-y-1.5 text-xs">
              <label className="text-slate-700 font-semibold flex items-center justify-between">
                <span>Center Logo Image</span>
                {logoUrl && (
                  <button onClick={() => setLogoUrl(null)} className="text-red-600 hover:underline">Remove Logo</button>
                )}
              </label>
              <div className="flex items-center gap-2">
                <label className="btn-ui text-xs cursor-pointer py-1.5 px-3">
                  <Upload className="w-3.5 h-3.5" /> Upload Image
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                </label>
                <span className="text-[11px] text-slate-400 font-medium">PNG/SVG/JPG recommended</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Canvas Preview (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-between gap-6 shadow-inner">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600" /> Live Vector Preview
          </div>

          {/* Main Canvas Render */}
          <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center max-w-full overflow-hidden">
            <canvas ref={canvasRef} className="max-w-full h-auto block rounded-lg" />
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <button onClick={handleDownloadPng} className="btn-ui btn-ui-primary text-xs py-2.5">
                <Download className="w-4 h-4" /> Download PNG
              </button>
              <button onClick={handleDownloadSvg} className="btn-ui text-xs py-2.5 font-bold">
                <Download className="w-4 h-4 text-indigo-600" /> Download SVG
              </button>
            </div>

            <button onClick={handleCopyPayload} className="btn-ui w-full text-xs py-2 text-slate-600">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Encoded Payload!' : 'Copy Raw Code String'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

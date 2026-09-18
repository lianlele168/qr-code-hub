import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://qrcode.robloxwikihub.com/bulk-qr-code-generator" },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

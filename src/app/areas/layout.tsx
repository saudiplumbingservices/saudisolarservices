import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas in Saudi Arabia | Miyar Technical Services",
  description: "Miyar Technical Services provides certified AC, plumbing, and solar services across all major Saudi cities — Riyadh, Jeddah, Dammam, Mecca, Medina, and Al Khobar.",
};

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

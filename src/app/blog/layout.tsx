import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert AC, Plumbing & Solar Guides for Saudi Arabia | Miyar Technical Services Blog",
  description: "Professional advice on HVAC maintenance, plumbing repairs, and solar energy installation for Saudi homeowners. Written by certified engineers in KSA.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServicesByCategory, getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export function generateStaticParams() {
  return getServicesByCategory("solar").map((s) => ({ service: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ service: string }> }
): Promise<Metadata> {
  const { service: slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data || data.category !== "solar") return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function SolarServiceDetailPage(
  { params }: { params: Promise<{ service: string }> }
) {
  const { service: slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data || data.category !== "solar") notFound();
  return <ServiceDetailPage service={data} />;
}

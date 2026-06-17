import { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { cities } from "@/data/cities";
import { allServices } from "@/data/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://miyartechnicalservices.com";

  // Base routes
  const routes = [
    "",
    "/services/ac",
    "/services/plumbing",
    "/services/solar",
    "/blog",
    "/areas",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogs.map((blog) => {
    // Parse the date (e.g. "June 10, 2026") or use current date if invalid
    let lastMod = new Date();
    try {
      const parsed = Date.parse(blog.date);
      if (!isNaN(parsed)) {
        lastMod = new Date(parsed);
      }
    } catch (e) {
      // Fallback
    }

    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  // City area routes
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/areas/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Individual service detail pages
  const serviceRoutes = allServices.map((s) => ({
    url: `${baseUrl}/services/${s.category}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes, ...cityRoutes, ...serviceRoutes];
}

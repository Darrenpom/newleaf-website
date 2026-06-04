import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.newleafwindows.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/windows-and-doors-northamptonshire",
    "/double-glazing-kettering",
    "/replacement-windows-kettering",
    "/composite-doors-kettering",
    "/windows-and-doors-kettering",
    "/windows-and-doors-market-harborough",
    "/windows-and-doors-leicester",
    "/gallery",
    "/showroom",
    "/showroom-open-times",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/windows-and-doors-northamptonshire" ? 0.9 : 0.7,
  }));
}

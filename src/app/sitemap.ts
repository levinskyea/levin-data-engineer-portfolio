import type { MetadataRoute } from "next";

const BASE_URL = "https://levin-data-engineer.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/projects/salmon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects/scallop`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }
  ];
}

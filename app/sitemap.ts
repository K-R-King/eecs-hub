import type { MetadataRoute } from "next";
import { HOME_URL } from "@/lib/suite";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: HOME_URL, changeFrequency: "monthly", priority: 1 }];
}

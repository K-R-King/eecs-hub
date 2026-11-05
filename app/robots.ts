import type { MetadataRoute } from "next";
import { HOME_URL } from "@/lib/suite";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${HOME_URL}/sitemap.xml` };
}

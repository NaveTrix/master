import fs from "fs";
import path from "path";

const baseUrl = "https://navetrix.com";
const staticRoutes = [
  "",
  "overview",
  "services",
  "team",
  "testimonials",
  "contact",
  "privacy-policy",
  "cookie-policy",
  "verify"
];

const urls = staticRoutes.map(route =>
  `<url><loc>${baseUrl}/${route}</loc></url>`
).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap);

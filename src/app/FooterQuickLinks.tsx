"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { openContactModal } from "./components/utils";

export default function FooterQuickLinks() {
  const pathname = usePathname();
  // Helper to force reload to homepage with hash if not already there
  const sectionLink = (hash: string, label: string) =>
    pathname === "/" ? (
      <a href={hash} className="hover:text-[#00C9A7] transition-colors font-medium drop-shadow">{label}</a>
    ) : (
      <Link href={`/${hash}`} prefetch={false} className="hover:text-[#00C9A7] transition-colors font-medium drop-shadow">{label}</Link>
    );
  return (
    <ul className="flex flex-col gap-3 text-base">
      <li>{sectionLink("#overview", "Overview")}</li>
      <li>{sectionLink("#services", "Services")}</li>
      {/* <li>{sectionLink("#team", "Team")}</li> */} {/* HIDDEN */}
      <li>{sectionLink("#testimonials", "Testimonials")}</li>
      <li><button type="button" onClick={openContactModal} className="hover:text-[#00C9A7] transition-colors font-medium drop-shadow text-left">Contact</button></li>
      <li><Link href="/privacy-policy" className="hover:text-[#00C9A7] transition-colors font-medium drop-shadow">Privacy Policy</Link></li>
      <li><Link href="/cookie-policy" className="hover:text-[#00C9A7] transition-colors font-medium drop-shadow">Cookie Policy</Link></li>
    </ul>
  );
}

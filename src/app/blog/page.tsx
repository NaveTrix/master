import { redirect } from "next/navigation";
import menu from "../../techContent/menu.json";

export default function BlogHome() {
  // Get the first category key
  const firstCategory = Object.keys(menu)[0];
  redirect(`/blog/${firstCategory}`);
  return null;
}

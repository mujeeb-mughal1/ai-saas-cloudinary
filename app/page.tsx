import { redirect } from "next/navigation";

export default function RootPage() {
  // Instantly redirects '/' to '/home'
  redirect("/home");
}
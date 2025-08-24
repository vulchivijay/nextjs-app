import SignUpForm from "@/app/components/auth/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp Page | Next.js",
  description: "This is Next.js SignUp Page",
  // other metadata
};

export default function SignUp() {
  return (
    <SignUpForm />
  )
}
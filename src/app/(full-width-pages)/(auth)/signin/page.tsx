import SignInForm from "@/app/components/auth/signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn Page | Next.js",
  description: "This is Next.js Signin Page",
};

export default function SignIn() {
  return (
    <SignInForm />
  )
}
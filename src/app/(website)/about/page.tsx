'use client'

import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import { useAuth } from "@/app/hooks/auth";
import { redirect } from "next/navigation";

export default function About() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <> {redirect('/dashboard')} </>
      ) : (
        <>
          <Header />
          <div>About Page</div>
          <Footer />
        </>
      )}
    </div>
  );
}
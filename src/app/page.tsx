'use client'

import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import { useAuth } from "@/app/hooks/auth";
import { redirect } from "next/navigation";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>{redirect('/dashboard')}</>
      ) : (
        <>
          <Header />
          <div>Home page {isAuthenticated} </div>
          <Footer />
        </>
      )}
    </div>
  );
}
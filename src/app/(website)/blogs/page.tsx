'use client'

import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import { useEffect, useState } from "react"
import { useAuth } from "@/app/hooks/auth";
import { redirect } from "next/navigation";

export default function Blogs() {
  const { isAuthenticated } = useAuth();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function BlogsList() {
      const response = await fetch('/api/posts', { method: 'GET' })
        .then(response => response.json())
        .then(data => setBlogs(data));
    }
    BlogsList();
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <> {redirect('/dashboard')} </>
      ) : (
        <>
          <Header />
          <div>{blogs.map((blog, index) => {
            return (
              <div key={index}>
                <h4>{blog.title}</h4>
                <p>{blog.body}</p>
                <small>{blog.author}</small>
              </div>
            )
          })}</div>
          <Footer />
        </>
      )}
    </div>
  );
}
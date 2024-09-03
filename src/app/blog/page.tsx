import React from "react";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import BlogPost from "@/components/Blog/BlogPost";

export default function Blog() {
  return (
    <>
      <PageHeader title="Latest Blog Posts" currentPage="Blog" description="" />
      <BlogPost />
    </>
  );
}

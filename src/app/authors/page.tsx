import React from "react";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import AuthorCards from "@/components/Author/AuthorCards";

export default function Authors() {
  return (
    <main>
      <PageHeader title="Authors" currentPage="Authors" description="" />
      <AuthorCards/>
    </main>
  );
}

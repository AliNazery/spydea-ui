import React from "react";
import PageHeader from "@/components/Common/PageHeader/PageHeader";
import ContactForm from "@/components/Contact/ContactForm";

export default function page() {
  return (
    <>
      <PageHeader title="Contact" currentPage="Contact" description="" />
      <ContactForm/>
    </>
  );
}

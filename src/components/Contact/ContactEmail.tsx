import React from 'react'
import ContactSection from './ContactSection';

export default function ContactEmail() {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-wrap pt-12 text-center dark:text-[#e5dede] md:justify-between md:pt-24 lg:justify-around sm:flex-col sm:justify-between">
        <ContactSection
          title="Contact Support"
          email="support@company.com"
          tel="+1 234 567 8999"
        />
        <ContactSection
          title="Contact Careers"
          email="careers@company.com"
          tel="+1 234 567 8999"
        />
        <ContactSection
          title="Contact Press"
          email="press@company.com"
          tel="+1 234 567 8999"
        />
      </div>
    </>
  );
}

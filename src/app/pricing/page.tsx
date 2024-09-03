import React from 'react'
import PageHeader from '@/components/Common/PageHeader/PageHeader';
import Price from '@/components/price/Price';
import Inquiries from '@/components/price/Inquiries';


export default function Pricing() {
    
  return (
    <main>
      <PageHeader
        title="Choose the Plan That's Right for You"
        currentPage="Pricing"
        description=""
      />
      <Price/>
      <Inquiries/>
    </main>
  );
}

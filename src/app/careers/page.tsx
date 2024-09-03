import React from 'react'
import PageHeader from '@/components/Common/PageHeader/PageHeader';
import CareerImage from '@/components/Career/CareerImage';
import Testemonials from '@/components/Home/Testemonials';
import JoinOurTeam from '@/components/Section/joinOurTeam';
import Benefits from '@/components/Career/Benefits';

export default function Careers() {
  return (
    <main>
      <PageHeader
        title="Career At Spydea"
        currentPage="Careers"
        description="Nulla quis lorem ut libero male suada feugiat. Prae sent massa,
                convallis a pellent esque nec, egestas non nisi. Vivamus
                magna justo, lacinia eget consectetur sed, convallis at
                tellus. Proin eget tortor risus. Quisque velit nisi"
      />

      <CareerImage />
      <Benefits/>
      <Testemonials />
      <JoinOurTeam />
    </main>
  );
}

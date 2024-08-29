
type ContactSectionProps = {
  title: string;
  email: string;
  tel: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  email,
  tel,
}) => (
  <div data-aos="fade-up-sm" className="md:w-auto">
    <h2 className="sm:3xl mb-5 text-2xl font-semibold text-dark dark:text-[#e5dede] md:text-4xl">
      {title}
    </h2>
    <p className="mb-2 text-lg sm:text-xl">
      <a
        className="hover:underline hover:underline-offset-2"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </p>
    <p className="text-lg sm:text-xl">
      <a
        className="hover:underline hover:underline-offset-2"
        href={`tel:${tel}`}
      >
        {tel}
      </a>
    </p>
  </div>
);
export default ContactSection;
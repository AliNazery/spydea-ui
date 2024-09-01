import React from "react";

interface SectionTitleTwoProps {
  subtitle: string;
  className: string;
  title: string;
  description: string;
}

const SectionTitleTwo: React.FC<SectionTitleTwoProps> = ({
  className,
  subtitle,
  title,
  description,
}) => {
  return (
    <div className={className}>
      <span
        className="mb-6 inline-block font-medium uppercase text-red-400"
        data-aos="fade-right-sm"
      >
        {subtitle}
      </span>
      <div
        data-aos="fade-right-sm"
        className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
      >
        <h2
          className="font-semibold text-h2 md:text-mdh2"
          data-aos="fade-right-sm"
          data-aos-delay="100"
        >
          {title}
        </h2>
      </div>
      <p className="pl-6 text-lg" data-aos="fade-right-sm" data-aos-delay="150">
        {description}
      </p>
    </div>
  );
};

export default SectionTitleTwo;

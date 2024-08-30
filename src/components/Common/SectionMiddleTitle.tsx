import React from "react";

interface SectionMiddleTitleProps {
  subtitle: string;
  title: string;
  description: string;
}

const SectionMiddleTitle: React.FC<SectionMiddleTitleProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="flex flex-wrap pb-12 text-center">
      <div className="mx-auto px-3 md:mx-0 lg:w-7/12 lg:mx-auto">
        <span
          className="mb-6 inline-block font-medium uppercase text-red-400"
          data-aos="fade-up-sm"
          data-aos-delay="50"
        >
          {subtitle}
        </span>
        <h2
          className="mb-6 font-semibold text-h2 md:text-mdh2"
          data-aos="fade-up-sm"
          data-aos-delay="100"
        >
          {title}
        </h2>
        <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionMiddleTitle;

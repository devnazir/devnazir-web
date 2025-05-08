import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = 'my-20',
  titleClassName = 'text-4xl font-light',
  descriptionClassName = 'text-lg text-gray-700 mt-6',
}) => (
  <section className={className}>
    <h2 className={titleClassName}>{title}</h2>
    <div className={descriptionClassName}>{children}</div>
  </section>
);

export default Section; 
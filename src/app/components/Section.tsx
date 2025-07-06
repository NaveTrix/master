import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto py-8 px-4 md:px-8 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

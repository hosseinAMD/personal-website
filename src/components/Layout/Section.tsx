import { FunctionComponent, ReactNode } from 'react';

export interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FunctionComponent<SectionProps> = ({ title, children }) => (
  <section className="mb-4">
    <h3 className="text-lg font-medium mb-3 pb-2 border-b-2">{title}</h3>
    {children}
  </section>
);

export default Section;

interface SectionSkeltionProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const SectionSkeltion = ({ children, title }: SectionSkeltionProps) => {
  return (
    <section className="mb-4 px-6 sm:px-12 flex flex-col items-center">
      <h2 className="pb-3 w-full text-center text-3xl font-normal border-b-2 border-gray-400 border-dashed">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionSkeltion;

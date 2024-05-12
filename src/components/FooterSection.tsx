import Link from "next/link";

type FooterSectionProps = {
  title: string;
  options: Array<string>;
};

export function FooterSection({ title, options }: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-5 min-w-[174px] items-center md:items-start">
      <p className="heading-7 uppercase text-text">{title}</p>

      {options.map((option) => (
        <Link key={option} className="body-4 text-text" href="#">
          {option}
        </Link>
      ))}
    </div>
  );
}

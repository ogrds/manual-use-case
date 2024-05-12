type DemoProps = {
  tag: string;
  bgIndex: number;
  title: string;
  description: string;
  image: string;
};

export function Demo({ bgIndex, title, description, image, tag }: DemoProps) {
  return (
    <div
      data-reverse={bgIndex % 2 === 0}
      className="w-full relative flex items-center justify-evenly gap-6 flex-col md:flex-row max-w-screen-lg p-4 my-0 mx-auto group md:data-[reverse=true]:flex-row-reverse"
    >
      <img
        src={image}
        alt="Image01"
        className="w-[370px] h-[445px] object-cover"
      />

      <div className="relative max-w-[372px]">
        <p className="-z-10 hidden md:block absolute max-w-[480px] md:max-w-max top-1/2 -translate-y-1/2 text-[28.125rem] leading-[28.125rem] tracking-[-0.03em] text-[#f3f7f4] -left-1/2 md:group-data-[reverse=false]:-left-1/2 md:group-data-[reverse=true]:-right-1/2 md:group-data-[reverse=true]:left-auto">
          {bgIndex.toString().padStart(2, "0")}
        </p>

        <p className="heading-7 uppercase text-text-muted">{tag}</p>
        <h4 className="mt-[0.625rem] text-text">{title}</h4>
        <p className="body-3 mt-[1.375rem] text-text">{description}</p>
      </div>
    </div>
  );
}

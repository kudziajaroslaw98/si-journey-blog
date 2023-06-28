import Quote from '@/public/images/quote.svg';

type TestimonialCardComponentProps = {
  className?: string;
  name: string;
  text: string;
};
function TestimonialCardComponent({
  className,
  name,
  text,
}: TestimonialCardComponentProps) {
  return (
    <div>
      <div
        className={`p-6 rounded-lg w-[16.625rem] h-[27.75rem] flex flex-col items-center relative bg-[#101010] ${className}`}
      >
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emperor-100" />
          <h4 className="-tracking-[0.03125rem] text-center">{name}</h4>
        </div>
        <p className="mt-[4.5rem] font-open-sans">
          <span className="absolute left-[1.3125rem] top-[10.0625rem]">
            <Quote />
          </span>
          {text}
          <span className="absolute right-[1.3125rem] bottom-[4.11544rem] rotate-180">
            <Quote />
          </span>
        </p>
      </div>
    </div>
  );
}

export default TestimonialCardComponent;

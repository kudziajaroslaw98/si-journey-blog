import Arrow from '@/public/images/arrow.svg';

type ButtonComponentProps = {
  text: string;
  outline?: boolean;
  arrow?: boolean;
  className?: string;
};

function ButtonComponent({
  text,
  outline,
  arrow,
  className,
}: ButtonComponentProps) {
  return (
    <button
      type="button"
      className={`${
        className || ''
      } group inline-flex py-2 px-6 items-start gap-2.5 rounded-lg hover:bg-picton-blue-900 transition-colors ${
        outline ? 'border border-picton-blue-500' : ''
      }`}
    >
      <span className="flex items-center group-hover:text-emperor-100 text-picton-blue-500 font-bold after:hidden transition-colors">
        {text}{' '}
        {arrow && (
          <Arrow className="arrow-fill ml-3 animate-bounce-horizontal" />
        )}
      </span>
    </button>
  );
}

export default ButtonComponent;
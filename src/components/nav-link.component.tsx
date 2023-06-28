'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  label: string;
  button: boolean;
  scroll?: boolean;
  className?: string;
};

export function NavLinkComponent({
  href,
  label,
  button = false,
  scroll = true,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  // const linkHref = pathname.startsWith('/blog') ? href : href.replace('/', '');
  const classStyles = {
    activeLink: `${
      !button ? 'hover:after:!w-6 after:!w-3 after:!bg-picton-blue-500' : ''
    }`,
    buttonLink:
      'group inline-flex py-2 px-6 items-start gap-2.5 rounded-lg border border-picton-blue-500 hover:bg-picton-blue-900 transition-colors',
    buttonSpan:
      'group-hover:text-emperor-100 text-picton-blue-500 font-bold after:hidden transition-colors',
  };

  function isActiveRoute(route: string) {
    if (route === '/') return pathname === route;
    return pathname.startsWith(route);
  }
  const active = isActiveRoute(href);
  return (
    <Link
      href={href}
      target={button ? '_blank' : undefined}
      className={`${className || ''} ${button ? classStyles.buttonLink : ''}`}
      scroll={scroll}
    >
      <span
        className={`font-open-sans text-center text-sm relative after:transition-all hover:after:w-6 after:inline-flex after:h-[2px] after:w-0 after:-bottom-1 after:bg-emperor-100 after:absolute after:left-0 after:rounded-md
                    ${button ? classStyles.buttonSpan : ''}
                    ${active ? classStyles.activeLink : ''}`}
      >
        {label}
      </span>
    </Link>
  );
}

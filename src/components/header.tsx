import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Logo from '@/public/images/logo.svg';
import { NavLinkComponent } from '@/components/nav-link.component.tsx';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-emperor-950 space-x-2 px-5 py-2 drop-shadow-2xl md:px-10 md:py-5">
      <div className="w-full flex items-center justify-between xl:max-w-6xl xl:mx-auto">
        <Link className="flex items-center gap-2 sm:gap-6" href="/">
          <Logo className="object-fit w-8 h-8" />

          <h1 className="text-xl md:text-3xl uppercase leading-6 text-emperor-100">
            Journey
          </h1>
        </Link>

        <div className="flex justify-end items-center gap-6 md:gap-12 flex-1">
          <Bars3Icon className="w-8 h-8 text-emperor-100 md:hidden cursor-pointer" />

          <div className="hidden md:flex justify-end items-center gap-6 md:gap-12 ">
            <NavLinkComponent
              href="https://www.patreon.com/JourneySI"
              label="Become Patreon"
              button
            />

            <NavLinkComponent
              href="/"
              label="Home"
              button={false}
              scroll={false}
              className="hidden sm:block"
            />

            <NavLinkComponent href="/blog" label="Blog" button={false} />
          </div>
        </div>
      </div>
    </header>
  );
}

//         <NavLinkComponent
//           href="/#about-us"
//           label="About Us"
//           button={false}
//           scroll={false}
//           className="hidden sm:block"
//         />
//
//         <NavLinkComponent
//           href="/#pricing"
//           label="Pricing"
//           button={false}
//           scroll={false}
//           className="hidden lg:block"
//         />
//
//         <NavLinkComponent
//           href="/#contact-us"
//           label="Contact Us"
//           button={false}
//           scroll={false}
//           className="hidden lg:block"
//         />

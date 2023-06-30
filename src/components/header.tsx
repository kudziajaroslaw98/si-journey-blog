import Logo from '@/public/images/logo.svg';
import { NavLinkComponent } from '@/components/nav-link.component.tsx';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-emperor-950 space-x-2 px-5 py-2 drop-shadow-2xl md:px-10 md:py-5">
      <div className="w-full flex items-center justify-between xl:max-w-6xl xl:mx-auto">
        <div className="flex items-center gap-2 sm:gap-6">
          <Logo className="object-fit w-8 h-8" />
          <h1 className="text-xl md:text-3xl uppercase leading-6 text-emperor-100">
            Journey
          </h1>
        </div>
        <div className="flex justify-end items-center gap-6 md:gap-12 flex-1">
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

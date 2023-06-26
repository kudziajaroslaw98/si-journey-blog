import Logo from '@/public/images/logo.svg';
import { NavLinkComponent } from '@/components/nav-link.component.tsx';

export default function Header() {
  return (
    <header className="sticky flex items-center justify-between space-x-2 px-10 py-5">
      <div className="flex items-center gap-6">
        <Logo width={44} height={44} />
        <h1 className="text-3xl uppercase leading-6 text-emperor-100">
          Journey
        </h1>
      </div>
      <div className="flex justify-end items-center gap-12 flex-1">
        <NavLinkComponent
          href="https://www.patreon.com/JourneySI"
          label="Become Patreon"
          button
        />

        <NavLinkComponent href="/" label="Home" button={false} scroll={false} />

        <NavLinkComponent href="/blog" label="Blog" button={false} />

        <NavLinkComponent
          href="/#about-us"
          label="About Us"
          button={false}
          scroll={false}
        />

        <NavLinkComponent
          href="/#pricing"
          label="Pricing"
          button={false}
          scroll={false}
        />

        <NavLinkComponent
          href="/#contact-us"
          label="Contact Us"
          button={false}
          scroll={false}
        />
      </div>
    </header>
  );
}

'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Logo from '@/public/images/svg/logo.svg';
import Instagram from '@/public/images/svg/instagram.svg';
import Patreon from '@/public/images/svg/patreon.svg';
import Twitter from '@/public/images/svg/twitter.svg';

function Footer() {
  const pathname = usePathname();
  const isStudioMode = pathname.includes('studio');
  return (
    <div
      className={`${
        isStudioMode ? 'hidden' : ''
      } w-full text-emperor-100 pt-36 space-y-4 pb-16`}
    >
      <div className="max-w-6xl xl:mx-auto space-y-8 px-12 sm:px-24 xl:px-0">
        <div className="flex justify-center items-center lg:justify-between ">
          <Link className="flex items-center gap-2 sm:gap-6" href="/">
            <Logo className="object-fit w-8 h-8" />

            <h1 className="text-xl md:text-3xl uppercase leading-6 text-emperor-100">
              Journey
            </h1>
          </Link>
        </div>

        <div className="flex justify-center items-center text-center lg:text-left lg:justify-between ">
          <span>Your journey with self improvement starts here</span>

          <div className="space-x-12 hidden lg:flex">
            <Link href="/#home">Home</Link>

            <Link href="/#benefits">Benefits</Link>

            <Link href="/#aboutUs">About Us</Link>

            <Link href="/#pricing">Pricing</Link>

            <Link href="/#contactUs">Contact Us</Link>
          </div>
        </div>
      </div>

      <hr className="max-w-6xl xl:mx-auto" />

      <div className="max-w-6xl xl:mx-auto space-y-24 px-12 sm:px-24 xl:px-0">
        <div className="flex flex-col space-y-8 justify-center items-center text-center lg:text-left lg:flex-row lg:justify-between ">
          <span>© 2023 Journey. All Rights reserved.</span>

          <div className="flex space-x-8">
            <Link href="https://www.instagram.com/embrace.journey.si/">
              <Instagram />
            </Link>

            <Link href="https://www.patreon.com/JourneySI">
              <Patreon />
            </Link>

            <Link href="https://twitter.com/JarekJorney">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

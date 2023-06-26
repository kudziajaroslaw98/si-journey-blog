import Image from 'next/image';
import ButtonComponent from '@/components/button.component.tsx';

import Image1 from '@/public/images/image-1.jpg';
import Image2 from '@/public/images/image-2.jpg';
import Image3 from '@/public/images/image-3.jpg';
import Image4 from '@/public/images/image-4.jpg';
import Image5 from '@/public/images/image-5.jpg';

function Page() {
  return (
    <div>
      <div className="relative w-full h-[46.5625rem] flex flex-col justify-center">
        <div className="w-[39.3125rem] space-y-6">
          <h1 className="text-[6rem] h-[19.125rem] font-bold tracking-[-0.18rem] leading-[6rem] text-emperor-100">
            Pure self improvement content
          </h1>

          <p className="text-emperor-100 text-2xl font-open-sans">
            No ads, no distractions.
          </p>
        </div>
        <ButtonComponent
          text="Start Reading"
          arrow
          outline
          className="mt-16 w-fit"
        />

        <div className="absolute translate-x-1/4 right-0 top-0 w-full h-full flex flex-row-reverse gap-8 -z-10">
          <Image
            src={Image1}
            alt="Background tile"
            className="background-image-common brightness-[.4]"
            priority
          />
          <Image
            src={Image2}
            alt="Background tile"
            className="background-image-common blur-[2px] brightness-[.6] object-left"
            priority
          />
          <Image
            src={Image3}
            alt="Background tile"
            className="background-image-common blur-[4px] brightness-[.5]"
            priority
          />
          <Image
            src={Image4}
            alt="Background tile"
            className="background-image-common blur-[6px] brightness-[.4]"
            priority
          />
          <Image
            src={Image5}
            alt="Background tile"
            className="background-image-common blur-[8px] brightness-[.3]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Page;

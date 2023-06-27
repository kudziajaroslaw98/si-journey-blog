import Image from 'next/image';
import ButtonComponent from '@/components/button.component.tsx';

import Image1 from '@/public/images/image-1.jpg';
import Image2 from '@/public/images/image-2.jpg';
import Image3 from '@/public/images/image-3.jpg';
import Image4 from '@/public/images/image-4.jpg';
import Image5 from '@/public/images/image-5.jpg';

function Page() {
  return (
    <div className="space-y-36  overflow-x-clip">
      <div className="xl:max-w-6xl xl:mx-auto relative w-full h-[46.5625rem] flex flex-col justify-center px-12 sm:px-24 xl:px-0">
        <div className="w-[39.3125rem] space-y-6">
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] h-fit font-bold tracking-[-0.18rem] leading-[4rem] md:leading-[6rem] text-emperor-100">
            Pure self <br />
            improvement
            <br />
            content
          </h1>

          <p className="text-emperor-100 text-lg sm:text-xl md:text-2xl font-open-sans">
            No ads, no distractions.
          </p>
        </div>
        <ButtonComponent
          text="Start Reading"
          arrow
          outline
          className="mt-16 w-fit"
        />

        <div className="absolute sm:translate-x-[35%] right-0 top-0 w-full h-full flex flex-row-reverse gap-8 -z-10">
          <Image
            src={Image1}
            alt="Background tile"
            className="background-image-common brightness-[.2] sm:brightness-[.4]"
            priority
          />
          <Image
            src={Image2}
            alt="Background tile"
            className="background-image-common blur-[2px] brightness-[.2] xl:brightness-[.6] object-left hidden sm:block"
            priority
          />
          <Image
            src={Image3}
            alt="Background tile"
            className="background-image-common blur-[4px] brightness-[.2] xl:brightness-[.5] hidden sm:block"
            priority
          />
          <Image
            src={Image4}
            alt="Background tile"
            className="background-image-common blur-[6px] brightness-[.4] hidden md:block"
            priority
          />
          <Image
            src={Image5}
            alt="Background tile"
            className="background-image-common blur-[8px] brightness-[.3] hidden xl:block"
            priority
          />
        </div>
      </div>
      <div className="w-full bg-emperor-100 text-emperor-900">
        <div className="xl:max-w-6xl xl:mx-auto py-36 space-y-36 px-12 sm:px-24 xl:px-0">
          <h1 className="text-5xl font-medium -tracking-[0.09rem] max-w-[35rem]">
            Stay <span className="gradient-text">curious</span> yet{' '}
            <span className="gradient-text">focused</span>
          </h1>
          <div className="flex justify-between flex-wrap">
            <div className="w-[15.875rem] m-4">
              <h3 className="flex relative text-2xl -tracking-wide font-bold leading-[1.875rem]">
                Continuous <br /> Growth
                <span className="circle1 absolute w-[6.6875rem] h-[6.6875rem] z-20 right-[3.9375rem] -top-[1.9375rem] rounded-full" />
              </h3>
              <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                As you evolve, so does our content. Stay engaged with fresh
                insights, ideas, and techniques to support your continuous
                growth journey.
              </span>
            </div>
            <div className="w-[15.875rem] m-4">
              <h3 className="flex relative text-2xl -tracking-wide font-bold">
                Mindful <br /> Consumption
                <span className="circle2 absolute w-[6.6875rem] h-[6.6875rem] z-20 right-[3.9375rem] -top-[1.9375rem] rounded-full" />
              </h3>
              <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                We promote mindful consumption of content, helping you stay
                focused and absorb information more effectively.
              </span>
            </div>
            <div className="w-[15.875rem] m-4">
              <h3 className="flex relative text-2xl -tracking-wide font-bold">
                Ad-Free <br /> Experience
                <span className="circle3 absolute w-[6.6875rem] h-[6.6875rem] z-20 right-[3.9375rem] -top-[1.9375rem] rounded-full" />
              </h3>
              <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                Say goodbye to disruptive ads. Our platform is
                advertisement-free, meaning no interruptions in your
                self-improvement journey.
              </span>
            </div>
            <div className="w-[15.875rem] m-4">
              <h3 className="flex relative text-2xl -tracking-wide font-bold">
                Focused <br /> Content
                <span className="circle4 absolute w-[6.6875rem] h-[6.6875rem] z-20 right-[3.9375rem] -top-[1.9375rem] rounded-full" />
              </h3>
              <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                Our blog provides streamlined and targeted information, reducing
                the amount of superfluous content you need to sift through.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

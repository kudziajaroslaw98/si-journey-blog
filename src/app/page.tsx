import Image from 'next/image';
import Link from 'next/link';

import ButtonComponent from '@/components/button.component.tsx';
import TestimonialCardComponent from '@/components/testimonial-card.component.tsx';

import Image1 from '@/public/images/image-1.webp';
import Image2 from '@/public/images/image-2.webp';
import Image3 from '@/public/images/image-3.webp';
import Image4 from '@/public/images/image-4.webp';
import Image5 from '@/public/images/image-5.webp';
import jarekPhoto from '@/public/images/jarek-photo-phone.jpg';

import Arrow from '@/public/images/svg/arrow.svg';
import Email from '@/public/images/svg/email.svg';
import Phone from '@/public/images/svg/phone.svg';
import Location from '@/public/images/svg/location.svg';

import John from '@/public/images/people/john.png';
import Alex from '@/public/images/people/alex.png';
import Samantha from '@/public/images/people/samantha.png';
import Lisa from '@/public/images/people/lisa.png';
import Michelle from '@/public/images/people/michelle.png';
import Peter from '@/public/images/people/peter.png';

function Page() {
  return (
    <div className="overflow-x-clip">
      <div className="xl:max-w-6xl xl:mx-auto relative w-full h-screen flex flex-col justify-center px-12 sm:px-24 xl:px-0">
        <div className="w-full sm:w-[29.3125rem] md:w-[39.3125rem] flex flex-col text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-[2.5rem] sm:text-[5rem] md:text-[6rem] h-fit font-bold tracking-[-0.18rem] leading-[3rem] sm:leading-[6rem] text-emperor-100">
              Pure self <br />
              improvement
              <br />
              content
            </h1>

            <p className="text-emperor-100 text-lg sm:text-xl md:text-2xl font-open-sans">
              No ads, no distractions.
            </p>
          </div>

          <Link href="/blog">
            <ButtonComponent
              text="Start Reading"
              arrow
              outline
              className="mt-16 w-fit"
            />
          </Link>
        </div>

        <div className="absolute sm:translate-x-[35%] right-0 sm:top-[8rem] w-full h-full flex flex-row-reverse gap-8 -z-20 ">
          <Image
            src={Image1}
            alt="Background tile"
            className="background-image-common brightness-[.2] sm:brightness-[.4] !h-screen sm:!h-[46.5625rem]"
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
      <div className="space-y-36">
        <div className="w-full bg-emperor-100 text-emperor-900">
          <div className="xl:max-w-6xl xl:mx-auto py-36 space-y-36 px-12 sm:px-24 xl:px-0">
            <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] leading-[1.05] font-medium -tracking-[0.09rem] max-w-[35rem] text-center md:text-left">
              Stay <span className="gradient-text">curious</span> yet{' '}
              <span className="gradient-text">focused</span>
            </h1>

            <div className="flex justify-center space-y-16 md:space-y-0  md:justify-between flex-wrap">
              <div className="md:w-[15.875rem] m-4">
                <h3 className="flex relative text-2xl -tracking-wide font-bold leading-[1.875rem]">
                  Continuous <br /> Growth
                  <span className="circle1 absolute w-[6.6875rem] h-[6.6875rem] z-20 left-[6rem] -top-[1.9375rem] rounded-full" />
                </h3>

                <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                  As you evolve, so does our content. Stay engaged with fresh
                  insights, ideas, and techniques to support your continuous
                  growth journey.
                </span>
              </div>

              <div className="md:w-[15.875rem] m-4">
                <h3 className="flex relative text-2xl -tracking-wide font-bold">
                  Mindful <br /> Consumption
                  <span className="circle2 absolute w-[6.6875rem] h-[6.6875rem] z-20 left-[6rem] -top-[1.9375rem] rounded-full" />
                </h3>

                <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                  We promote mindful consumption of content, helping you stay
                  focused and absorb information more effectively.
                </span>
              </div>

              <div className="md:w-[15.875rem] m-4">
                <h3 className="flex relative text-2xl -tracking-wide font-bold">
                  Ad-Free <br /> Experience
                  <span className="circle3 absolute w-[6.6875rem] h-[6.6875rem] z-20 left-[6rem] -top-[1.9375rem] rounded-full" />
                </h3>

                <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                  Say goodbye to disruptive ads. Our platform is
                  advertisement-free, meaning no interruptions in your
                  self-improvement journey.
                </span>
              </div>

              <div className="md:w-[15.875rem] m-4">
                <h3 className="flex relative text-2xl -tracking-wide font-bold">
                  Focused <br /> Content
                  <span className="circle4 absolute w-[6.6875rem] h-[6.6875rem] z-20 left-[6rem] -top-[1.9375rem] rounded-full" />
                </h3>

                <span className="flex mt-12 text-xl leading-[1.875rem] font-open-sans">
                  Our blog provides streamlined and targeted information,
                  reducing the amount of superfluous content you need to sift
                  through.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-emperor-100">
          <div className="max-w-6xl xl:mx-auto h-[49.3125rem] space-y-24 relative px-12 sm:px-24 xl:px-0">
            <div className="space-y-8">
              <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1]  font-semibold -tracking-[0.09rem] max-w-[50rem] mx-auto text-center">
                Don’t take our word for it.
              </h2>

              <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1]  gradient-text font-extrabold -tracking-[0.09rem] max-w-[50rem] mx-auto text-center">
                Trust our readers
              </h1>
            </div>

            <div className="flex overflow-x-visible space-x-8 absolute -left-[13.5rem] xl:-left-[18.5rem]">
              <TestimonialCardComponent
                className="xl:-bottom-8 xl:blur-[1px]"
                name="John"
                image={John}
                text="This blog has genuinely changed my life. The self-improvement strategies are practical, and I can apply them to my daily life seamlessly. Can't recommend it enough!"
              />

              <TestimonialCardComponent
                className="xl:-bottom-4"
                name="Samantha"
                image={Samantha}
                text="The blog posts on this site are incredibly insightful and inspiring. I've learned so much and have seen noticeable changes in my life since I started reading regularly"
              />

              <TestimonialCardComponent
                name="Peter"
                image={Peter}
                text="Every article is like a mini life lesson. It's wonderful how much knowledge and inspiration I can gather from each post. Truly an amazing blog!"
              />

              <TestimonialCardComponent
                name="Lisa"
                image={Lisa}
                text="I always look forward to new blog posts. The content is always fresh, relevant, and full of practical tips. It's been a great tool for my personal growth journey."
              />

              <TestimonialCardComponent
                className="xl:-bottom-4"
                name="Alex"
                image={Alex}
                text="I love the depth of the articles, and they're always presented in such a clear and concise manner. Reading this blog has become a staple part of my morning routine."
              />

              <TestimonialCardComponent
                className="xl:-bottom-8 xl:blur-[1px]"
                name="Michelle"
                image={Michelle}
                text="The articles here truly stimulate thought and self-reflection. I love the fresh perspectives and in-depth analysis. This blog has become a part of my self-improvement journey!"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-emperor-100 text-emperor-900">
          <div className="xl:max-w-6xl xl:mx-auto py-36 space-y-36 px-12 sm:px-24 xl:px-0">
            <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] leading-[1.05] font-medium -tracking-[0.09rem] max-w-[35rem] text-center lg:text-left">
              About <span className="gradient-text">Us</span>
            </h1>

            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="w-[26.5rem] h-[25.5625rem] relative">
                <Image
                  className="object-cover object-center shadow-xl rounded-lg"
                  src={jarekPhoto}
                  unoptimized
                  fill
                  alt="Jarek picture"
                />
              </div>

              <div className="flex flex-col w-full h-fit pt-24 lg:pt-0 lg:pl-24 justify-between">
                <div className="space-y-12">
                  <div className="flex flex-col text-center lg:text-left">
                    <h2 className="font-bold text-4xl">Jarek Kudzia</h2>

                    <h5 className="font-bold text-picton-blue-600 text-xl">
                      Founder of Journey
                    </h5>
                  </div>

                  <p className="font-open-sans leading-normal">
                    As a seasoned programmer and an avid self-improvement
                    advocate, I blend my analytical mindset with a passion for
                    personal growth. I believe in fostering physical prowess
                    through calisthenics and martial arts, while also nurturing
                    the mind and social skills.
                    <br />
                    <br />
                    I strive to make the world a better place by simplifying the
                    journey of self-improvement. I aim to make it less
                    overwhelming for those starting out, just as I once was, by
                    providing structured, easily digestible content.
                    <br />
                    <br />
                    Embark on this journey with me, as we navigate the sea of
                    self-improvement <b>together</b>.
                  </p>
                </div>

                <div className="flex items-center pt-12">
                  <span className="w-3 h-3 bg-emperor-200 rounded-full mr-4" />

                  <span className="w-3 h-3 bg-emperor-200 rounded-full mr-4" />

                  <span className="w-3 h-3 bg-emperor-200 rounded-full mr-4" />

                  <button
                    className="ml-4 flex space-x-2 justify-center items-center"
                    type="button"
                    disabled
                  >
                    <span className="text-emperor-200">More staff soon</span>

                    <span className="scale-75 hidden">
                      <Arrow />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-emperor-100 ">
          <div className="relative max-w-6xl xl:mx-auto h-[49.3125rem] space-y-24 px-12 sm:px-24 xl:px-0">
            <div className="absolute pricing-background-image right-[-20rem] xl:right-[-34rem] bottom-[-5.875rem] w-[90rem] h-[58.375rem] blur-[2px] -z-10" />
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.5] gradient-text -tracking-[0.09rem] max-w-[50rem] mx-auto text-center">
              Pricing
            </h1>

            <div className="space-y-16 text-center flex flex-col items-center font-normal">
              <p className="text-2xl sm:text-3xl md:text-4xl font-open-sans">
                We believe that everyone should have <br /> the same
                possibilities to change their lives. <br />
                That’s why this blog is entirely
                <span className="gradient-text !font-bold"> free.</span>
              </p>

              <p className="text-lg sm:text-xl md:text-2xl  font-open-sans">
                However, if u still would like to help us consider becoming our
                <br />
                <span className="gradient-text !font-bold"> Patreon</span>
              </p>

              <Link href="https://www.patreon.com/JourneySI">
                <ButtonComponent
                  text="Become Patreon"
                  arrow
                  outline
                  className="w-fit"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full text-emperor-100 ">
          <div className="relative max-w-6xl xl:mx-auto space-y-24 px-12 sm:px-24 xl:px-0">
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.5] -tracking-[0.09rem] mx-auto  md:text-left text-center">
              Have questions?
            </h1>

            <div className="flex w-full justify-center sm:justify-center md:justify-between flex-col space-y-8 md:space-y-0 md:flex-row items-center">
              <div className="space-y-8 text-center flex flex-col items-center font-normal p-4">
                <div className="flex w-24 h-24 items-center justify-center p-6 bg-emperor-900 shadow-xl rounded-lg">
                  <Email />
                </div>

                <span className="text-emperor-300">Feel free to write</span>

                <span>jarek.journey@gmail.com</span>
              </div>

              <span className="text-emperor-500 hidden md:block">OR</span>

              <div className="space-y-8 text-center flex flex-col items-center font-normal p-4">
                <div className="flex w-24 h-24 items-center justify-center p-6 bg-emperor-900 shadow-xl rounded-lg">
                  <Phone />
                </div>

                <span className="text-emperor-300">Feel free to call</span>

                <span>Not available yet</span>
              </div>

              <span className="text-emperor-500 hidden md:block">OR</span>

              <div className="space-y-8 text-center flex flex-col items-center font-normal p-4">
                <div className="flex w-24 h-24 items-center justify-center p-6 bg-emperor-900 shadow-xl rounded-lg">
                  <Location />
                </div>

                <span className="text-emperor-300">Feel free to come</span>

                <span>Not available yet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

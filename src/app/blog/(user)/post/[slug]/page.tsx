import {Metadata} from 'next';
import {ArrowUturnLeftIcon, ChatBubbleLeftIcon, HeartIcon, ShareIcon} from "@heroicons/react/24/solid";
import React, {cache} from 'react';
import {groq} from 'next-sanity';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from "next/link";


import {draftMode} from 'next/headers';
import {getClient} from '@/sanity/lib/client.ts';
import urlFor from '@/lib/urlFor.ts';
import {Post} from '../../../../../../typings.ts';
import GoBackWithChildrenComponent from "@/components/blog-list/go-back-with-children.component.tsx";
import getAbsolutePath from "@/utils/absolute-path.ts";

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 10;
const client = getClient();
const clientFetch = cache(client.fetch.bind(client));

// *[_type == "post" && categories[]->slug.current match $categorySlug] | order(_createdAt desc) [5...10] - searching posts by category

export const generateMetadata = async ({
                                           params: {slug},
                                       }: Props): Promise<Metadata> => {
    const query = groq`
       *[_type == "post" && slug.current == $slug][0]{...,author->, categories[]->}  | order(_createdAt desc)`;

    const post: Post = await clientFetch(query, {slug});
    return {
        title: `Journey Blog: ${post?.title}` ?? 'Journey - blog',
        description: post?.description ?? "Explore Journey's blog - your go-to guide for self-improvement and personal growth.",
        openGraph: {
            title: `Journey Blog: ${post?.title}` ?? 'Journey - blog',
            description: post?.description ?? "Explore Journey's blog - your go-to guide for self-improvement and personal growth.",
        },
    };
};

export async function generateStaticParams() {
    const query = groq`
        *[_type == "post"]
        {
            slug
        }
    `;
    const slugs: Post[] = await clientFetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,
    }));
}

const Page = async ({params: {slug}}: Props) => {
    const query = groq`
       *[_type == "post" && slug.current == $slug][0]{
              ...,
              author->, 
              categories[]->
         }
       `;
    const post: Post = await clientFetch(query, {slug});

    return (<article className='mx-auto flex max-w-6xl flex-col justify-center px-6 pt-6 md:px-10 md:pt-14'>
        <h1 className='text-5xl'>{draftMode().isEnabled ? 'preview mode' : ''}</h1>

        <section className='relative my-8 flex w-full h-[25rem]'>
            {post?.mainImage && (<Image
                className='rounded-lg object-cover shadow-lg'
                alt={post?.title}
                src={urlFor(post?.mainImage, 888).url()}
                priority
                fill
            />)}
        </section>

        <div className='mx-auto flex w-full max-w-3xl py-8 text-gray-100'>


            <article>
                <section className='w-full py-8 text-gray-100'>
                    <div className='flex flex-col justify-between space-y-10'>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-4xl font-extrabold'>{post?.title}</h1>

                            <p className='text-sm text-gray-400'>
                                {new Date(post?._createdAt).toLocaleDateString('en-US', {
                                    day: 'numeric', month: 'long', year: 'numeric',
                                })}
                            </p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-5'>
                                {post?.author?.image && (<Image
                                    className='rounded-full'
                                    src={urlFor(post.author.image, 40).url()}
                                    alt={post?.author?.name}
                                    height={64}
                                    width={64}
                                />)}

                                <div className='w-64'>
                                    <h3 className='flex text-2xl font-normal font-inter text-emperor-100'>
                                        {post?.author?.name}
                                    </h3>

                                    <span className='text-emperor-500'>{post?.timeToRead}</span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <div className='flex justify-end gap-x-2'>
                                    {post?.categories?.map((category) => <Link key={category._id}
                                                                               href={`${getAbsolutePath()}/blog/category/${category.slug.current}`}>
											<span key={category._id}
                                                  className='rounded-lg px-2 text-sm transition-colors bg-emperor-900 py-0.5 hover:bg-emperor-700 hover:cursor-pointer'>
												{category.title}
											</span>
                                    </Link>)}
                                </div>

                                <div className='flex items-center justify-end space-x-6 text-emperor-500'>
                                    <div className='flex items-center justify-center space-x-2'>
										<span className='flex space-x-2'>
											<HeartIcon title='Likes' className='w-6'/>
										</span>

                                        <span>20</span>
                                    </div>

                                    <div className='flex items-center justify-center space-x-2'>
										<span className='flex space-x-2'>
											<ChatBubbleLeftIcon title='Comments' className='w-6'/>
										</span>

                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className='py-10 text-xl font-extralight leading-relaxed markdown font-open-sans text-emperor-100 whitespace-break-spaces'>
                    <ReactMarkdown>{post?.markdown}</ReactMarkdown>
                </section>
            </article>
            <span>test</span>
            {/* <aside className='fixed right-0 bottom-2 flex w-fit flex-row gap-x-2 gap-y-2 rounded-md bg-emperor-1000 xl:top-[19rem] xl:sticky xl:-mr-16 xl:h-full xl:flex-col xl:bg-transparent xl:pt-12 xl:pl-16'> */}
            {/* <aside className='fixed right-0 bottom-0 flex w-fit flex-row justify-center gap-x-2 gap-y-2 rounded-md bg-emperor-1000 xl:bottom-none xl:justify-normal xl:-mr-[8rem] xl:top-[19rem] xl:sticky xl:h-full xl:flex-col xl:bg-transparent xl:pt-8 xl:pl-12'> */}
            <aside
                className='fixed right-0 xl:justify-normal bottom-0 flex w-full flex-row justify-center gap-x-2 gap-y-2 rounded-md z bg-emperor-1000 xl:bottom-nonexl:-mr-[8rem] xl:top-[19rem] xl:sticky xl:h-full xl:w-fit xl:flex-col xl:bg-transparent xl:pt-8 xl:pl-12'>
                <GoBackWithChildrenComponent>
                    <span
                        className='flex h-12 w-12 items-center justify-center rounded-md transition-colors bg-emperor-1000 text-emperor-100 hover:bg-emperor-900 hover:cursor-pointer xl:rounded-full'>
							<ArrowUturnLeftIcon title='Go Back' className='w-5'/>
						</span>
                </GoBackWithChildrenComponent>

                <span
                    className='flex h-12 w-12 items-center justify-center rounded-md transition-colors bg-emperor-1000 text-emperor-100 hover:bg-emperor-900 hover:cursor-pointer xl:rounded-full'>
						<ShareIcon title='Share' className='w-5'/>
					</span>

                <span
                    className='flex h-12 w-12 items-center justify-center rounded-md transition-colors bg-emperor-1000 text-emperor-100 hover:bg-emperor-900 hover:cursor-pointer xl:rounded-full'>
						<HeartIcon title='Likes' className='w-5'/>
					</span>

                <span
                    className='flex h-12 w-12 items-center justify-center rounded-md transition-colors bg-emperor-1000 text-emperor-100 hover:bg-emperor-900 hover:cursor-pointer xl:rounded-full'>
						<ChatBubbleLeftIcon title='Comments' className='w-5'/>
					</span>
            </aside>
        </div>
    </article>);
};

export default Page;

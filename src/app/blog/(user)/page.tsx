import { draftMode } from 'next/headers';
import { groq } from 'next-sanity';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { getClient } from '@/sanity/lib/client.ts';

import BlogBanner from '@/public/images/blog-banner.webp';
import { Category } from '../../../../typings.ts';
import PaginationComponent from '@/components/pagination.component.tsx';

const BlogList = dynamic(() => import('@/components/blog-list.tsx'));
const PreviewBlogList = dynamic(
	() => import('@/components/preview-blog-list.tsx')
);
const PreviewProvider = dynamic(
	() => import('@/components/preview-provider.tsx')
);

export const revalidate = 60;
const fetchPostsQuery = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

const fetchCategoriesQuery = groq`
*[_type == "category"]{
  ...
}`;

const Page = async () => {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN! }
		: undefined;
	const client = getClient(preview);
	const posts = await client.fetch(fetchPostsQuery);
	const categories = await client.fetch(fetchCategoriesQuery);

	return (
		<div className='no-scrollbar relative px-4 sm:px-6 '>
			<div className='relative mx-auto max-w-6xl space-y-16 pt-16'>
				<div className='relative w-full h-[18.25rem] shadow-lg'>
					<Image
						className='object-cover object-center rounded-lg shadow-lg'
						src={BlogBanner}
						alt='Joruney blog banner'
						priority
						fetchPriority='high'
						fill
					/>
				</div>

				<div className='flex flex-col space-y-8'>
					<h1>Feed</h1>

					<hr className='w-full border-emperor-700' />

					<div className='flex gap-x-4 gap-y-4 text-emperor-500 flex-wrap'>
						{categories.map((category: Category) => (
							<div
								key={category._id}
								className='category first-of-type:text-emperor-100 hover:text-picton-blue-500 transition-colors cursor-pointer'
							>
								<span>{category.title}</span>
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-wrap justify-center '>
					{preview ? (
						<PreviewProvider token={preview?.token}>
							<PreviewBlogList posts={posts} query={fetchPostsQuery} />
						</PreviewProvider>
					) : (
						<BlogList posts={posts} />
					)}
				</div>

				<div className='w-full flex justify-center'>
					<PaginationComponent />
				</div>
			</div>
		</div>
	);
};

export default Page;

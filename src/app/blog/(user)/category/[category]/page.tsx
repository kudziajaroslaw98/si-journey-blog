import { groq } from 'next-sanity';
import Image from 'next/image';
import { cache } from 'react';
import BlogBanner from '@/public/images/blog-banner.webp';
import { getClient } from '@/sanity/lib/client.ts';
import BlogList from '@/components/blog-list.tsx';
import { QueryUtils } from '@/utils/query-utils.ts';
import CategoryNavComponent from '@/components/blog-posts/category-nav/category-nav.component.tsx';
import { Category } from '../../../../../../typings.ts';

const client = getClient();
const clientFetch = cache(client.fetch.bind(client));
export const revalidate = 600;

export async function generateStaticParams() {
	const query = groq`
        *[_type == "category"]
        {
            slug
        }
    `;
	const slugs: Category[] = await clientFetch(query);
	const slugRoutes = slugs.map((slug) => slug.slug.current);

	return slugRoutes.map((slug) => ({
		slug,
	}));
}

type Props = {
	params: {
		category: string;
	};
};

const Page = async ({ params: { category } }: Props) => {
	let posts = [];
	const from = 0;
	const PAGE_SIZE = 18;
	if (category === 'all') {
		posts = await clientFetch(QueryUtils().fetchPaginatedPostsQuery, {
			from,
			to: PAGE_SIZE,
		});
	} else {
		posts = await clientFetch(QueryUtils().fetchPaginatedCategoryPostsQuery, {
			category,
			from,
			to: PAGE_SIZE,
		});
	}

	const categories = await clientFetch(QueryUtils().fetchCategoriesQuery);
	// const preview = draftMode().isEnabled
	// 	? { token: process.env.SANITY_API_READ_TOKEN! }
	// 	: undefined;

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
						placeholder='blur'
						fill
					/>
				</div>

				<div className='flex flex-col space-y-8'>
					<h1>Feed</h1>

					<hr className='w-full border-emperor-700' />

					<CategoryNavComponent categories={categories} />
				</div>

				<div>
					<BlogList category={category} initialPosts={posts} />
				</div>
			</div>
		</div>
	);
};

export default Page;

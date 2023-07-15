import { groq } from 'next-sanity';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import BlogBanner from '@/public/images/blog-banner.webp';
import BlogList from '@/components/blog-list/blog-list.tsx';
import { clientFetch } from '@/sanity/lib/client.ts';
import { QueryUtils } from '@/utils/query-utils.ts';
import { Category } from '../../../../../../typings.ts';

const CategoryNavComponent = dynamic(
	() => import('@/components/blog-posts/category-nav/category-nav.component.tsx')
);

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
	let posts;
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
		<div className='no-scrollbar relative px-4 sm:px-6'>
			<div className='relative mx-auto max-w-6xl space-y-16 pt-6'>
				<div className='relative h-[18.25rem] w-full shadow-lg'>
					<Image
						className='rounded-lg bg-emperor-400 object-cover object-center shadow-lg'
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

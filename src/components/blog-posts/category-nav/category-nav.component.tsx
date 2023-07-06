'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '../../../../typings.ts';

type Props = {
	categories: Category[];
};
function CategoryNavComponent({ categories }: Props) {
	const pathname = usePathname();
	const isCategoryActive = (category: string) => {
		if (pathname === `/blog/${category}`) {
			return true;
		}
		return false;
	};
	return (
		<div className='flex gap-x-4 gap-y-4 text-emperor-500 flex-wrap'>
			<Link href='/blog/all'>
				<div
					className={`category hover:text-picton-blue-600 transition-colors cursor-pointer ${
						isCategoryActive('all') ? 'text-picton-blue-500' : ''
					}`}
				>
					<span>All</span>
				</div>
			</Link>
			{categories.map((categoryPill: Category) => (
				<Link href={`/blog/${categoryPill.slug.current}`}>
					<div
						key={categoryPill._id}
						className={`category hover:text-picton-blue-600 transition-colors cursor-pointer ${
							isCategoryActive(categoryPill.slug.current) ? 'text-picton-blue-500' : ''
						}`}
					>
						<span>{categoryPill.title}</span>
					</div>
				</Link>
			))}
		</div>
	);
}
export default CategoryNavComponent;

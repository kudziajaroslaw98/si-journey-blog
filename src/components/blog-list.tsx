'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import PostCardComponent from '@/components/post-card.component.tsx';
import { Post } from '../../typings.ts';
import { clientFetch } from '@/sanity/lib/client.ts';
import { QueryUtils } from '@/utils/query-utils.ts';

export interface Props {
	category: string;
}

function BlogList({ category }: Props) {
	const [postList, setPostList] = useState<Post[]>([]);
	const [reachedEnd, setReachedEnd] = useState<boolean>(false);

	const loadingRef = useRef<HTMLDivElement>(null);

	const [isPending, startTransition] = useTransition();

	const PAGE_SIZE = 6;

	let observer: IntersectionObserver | null = null;
	useEffect(() => {
		if (!isPending) {
			observer = new IntersectionObserver(async ([entry]) => {
				if (entry.isIntersecting && !reachedEnd && !isPending) {
					let fetchedPosts: Post[] = [];
					if (category === 'all') {
						fetchedPosts = await clientFetch(QueryUtils().fetchPaginatedPostsQuery, {
							from: postList.length,
							to: postList.length + PAGE_SIZE,
						});
						if (fetchedPosts.length === 0) {
							setReachedEnd(true);
						}
						const mergedPosts = [...postList, ...fetchedPosts];
						startTransition(() => setPostList(mergedPosts));
					} else {
						fetchedPosts = await clientFetch(
							QueryUtils().fetchPaginatedCategoryPostsQuery,
							{
								category,
								from: postList.length,
								to: postList.length + PAGE_SIZE,
							}
						);
						if (fetchedPosts.length === 0) {
							setReachedEnd(true);
						}
						const mergedPosts = [...postList, ...fetchedPosts];
						startTransition(() => setPostList(mergedPosts));
					}
				}
				if (reachedEnd) {
					observer?.unobserve(entry.target);
				}
			});
		}
		if (loadingRef.current && !reachedEnd) {
			observer?.observe(loadingRef.current!);
		}
	}, [postList]);
	return (
		<div className='flex flex-wrap w-full justify-center gap-x-4 gap-y-16'>
			{postList?.map((post, index) => (
				<PostCardComponent key={post._id} post={post} index={index} />
			))}
			{!reachedEnd && (
				<span className='w-full' ref={loadingRef}>
					Loading...
				</span>
			)}
		</div>
	);
}

export default BlogList;

'use client';

import {useEffect, useRef, useState, useTransition} from 'react';
import PostCardComponent from '@/components/post-card.component.tsx';
import {Post} from '../../typings.ts';
import getAbsolutePath from '@/utils/absolute-path.ts';

export interface Props {
	category: string;
	initialPosts?: Post[];
}

function BlogList({ category, initialPosts }: Props) {
	const PAGE_SIZE = 18;

	const [postList, setPostList] = useState<Post[]>(initialPosts ?? []);
	const [reachedEnd, setReachedEnd] = useState<boolean>(
		postList.length < PAGE_SIZE
	);
	const [isPending, startTransition] = useTransition();

	const loadingRef = useRef<HTMLDivElement>(null);
	let observer: IntersectionObserver | null = null;

	const fetchMoreApi = `${getAbsolutePath()}/blog/category/${category}/api?from=${
		postList.length
	}&to=${postList.length + PAGE_SIZE}`;

	useEffect(() => {
		if (!isPending) {
			observer = new IntersectionObserver(async ([entry]) => {
				if (entry.isIntersecting && !reachedEnd && !isPending) {
					const posts = await fetch(fetchMoreApi).then((res) => res.json());

					if (posts.length === 0 || posts.length < PAGE_SIZE) {
						setReachedEnd(true);
					}

					startTransition(() => setPostList([...postList, ...posts]));
				}
				if (reachedEnd) {
					observer?.unobserve(entry.target);
				}
			});
		}
		if (observer && !reachedEnd && loadingRef.current) {
			observer?.observe(loadingRef.current);
		}
	}, [postList]);

	return (
		<div className='flex w-full flex-wrap justify-evenly gap-x-4 gap-y-16'>
			{postList?.map((post, index) => (
				<PostCardComponent key={post._id} post={post} index={index} />
			))}
			{(!reachedEnd || postList.length === PAGE_SIZE) && (
				<span className='w-full' ref={loadingRef}>
					Loading...
				</span>
			)}
		</div>
	);
}

export default BlogList;

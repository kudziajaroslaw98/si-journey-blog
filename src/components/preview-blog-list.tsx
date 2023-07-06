'use client';

import { useLiveQuery } from '@sanity/preview-kit';
import BlogList from './blog-list.tsx';
import { Post } from '../../typings.ts';
import { QueryUtils } from '@/utils/query-utils.ts';

type Props = {
	posts: Post[];
};

export default function PreviewBlogList({ posts }: Props) {
	const [data, loading] = useLiveQuery(posts, QueryUtils().fetchPostsQuery);

	if (loading) {
		return <>Loading...</>;
	}
	return (
		<div>
			<BlogList posts={data} />
		</div>
	);
}

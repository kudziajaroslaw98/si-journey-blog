// 'use client';
//
// import { Post } from '../../typings.ts';
//
// type Props = {
// 	posts: Post[];
// };

// export default function PreviewBlogList({ posts }: Props) {
// 	const [data, loading] = useLiveQuery(posts, QueryUtils().fetchPostsQuery);
//
// 	if (loading) {
// 		return <>Loading...</>;
// 	}
// 	return (
// 		<div>
// 			<BlogList />
// 		</div>
// 	);
// }

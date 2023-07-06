import { groq } from 'next-sanity';

type QueryUtilsReturnType = {
	fetchPostsQuery: string;
	fetchCategoryPostsQuery: string;
	fetchCategoriesQuery: string;
};
export function QueryUtils(): QueryUtilsReturnType {
	return {
		fetchPostsQuery: groq`*[_type == "post"]{..., author->, categories[]->} | order(_createdAt desc)`,
		fetchCategoryPostsQuery: groq`*[_type == "post" && categories[]->slug.current match $category]{..., author->, categories[]->} | order(_createdAt desc)`,
		fetchCategoriesQuery: groq`*[_type == "category"]{ ... }`,
	};
}

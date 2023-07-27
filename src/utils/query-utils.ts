import { groq } from 'next-sanity';

type QueryUtilsReturnType = {
	fetchPostsQuery: string;
	fetchCategoryPostsQuery: string;
	fetchCategoriesQuery: string;
	fetchPaginatedPostsQuery: string;
	fetchPaginatedCategoryPostsQuery: string;
};

export function QueryUtils(): QueryUtilsReturnType {
	return {
		fetchPostsQuery: groq`*[_type == "post"]{..., author->, categories[]->} | order(_createdAt desc)`,
		fetchCategoryPostsQuery: groq`*[_type == "post" && categories[]->slug.current match $category]{..., author->, categories[]->} | order(_createdAt desc)`,
		fetchPaginatedPostsQuery: groq`*[_type == "post"]{..., author->, categories[]->, "comments": *[_type == "comment" && references(^._id) && approved == true]} | order(_createdAt desc)[$from...$to]`,
		fetchPaginatedCategoryPostsQuery: groq`*[_type == "post" && categories[]->slug.current match $category]{..., author->, categories[]->, "comments": *[_type == "comment" && references(^._id) && approved == true]} | order(_createdAt desc)[$from...$to]`,
		fetchCategoriesQuery: groq`*[_type == "category"]{ ... }`,
	};
}

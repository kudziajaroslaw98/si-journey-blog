'use client';

import { useState } from 'react';
import HeartIcon from '@heroicons/react/24/solid/HeartIcon';
import getAbsolutePath from '@/utils/absolute-path.ts';
import { Post } from '../../../typings.ts';

type Props = {
	post: Post;
	className: string;
};

function PostLikeComponent({ post, className }: Props) {
	const alreadyLiked = () => {
		if (typeof window !== 'undefined') {
			const likedPosts = localStorage.getItem('likedPosts');
			if (likedPosts) {
				const likedPostsArray = JSON.parse(likedPosts);
				if (likedPostsArray.includes(post._id)) {
					return true;
				}
			}
		}
		return false;
	};

	const [liked, setLiked] = useState(alreadyLiked());
	const [likes, setLikes] = useState(post.likes);

	const likePost = () => {
		setLiked(true);
		setLikes(likes + 1);
		fetch(`${getAbsolutePath()}/api/post/like`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ postId: post._id }),
		});
		if (typeof window !== 'undefined') {
			const likedPosts = localStorage.getItem('likedPosts');
			if (likedPosts) {
				const likedPostsArray = JSON.parse(likedPosts);
				likedPostsArray.push(post._id);
				localStorage.setItem('likedPosts', JSON.stringify(likedPostsArray));
			} else {
				localStorage.setItem('likedPosts', JSON.stringify([post._id]));
			}
		}
	};
	const unlikePost = () => {
		setLikes(likes - 1);
		setLiked(false);
		fetch(`${getAbsolutePath()}/api/post/unlike`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ postId: post._id }),
		});
		if (typeof window !== 'undefined') {
			const likedPosts = localStorage.getItem('likedPosts');
			if (likedPosts) {
				const likedPostsArray = JSON.parse(likedPosts);
				localStorage.setItem(
					'likedPosts',
					JSON.stringify(likedPostsArray.filter((item: string) => item !== post._id))
				);
			}
		}
	};
	const handleLike = () => {
		if (liked) {
			unlikePost();
		} else {
			likePost();
		}
	};

	return (
		<button
			title='like'
			type='button'
			onClick={handleLike}
			className='flex h-12 w-12 items-center justify-center rounded-md text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full xl:bg-emperor-950'
		>
			{liked ? (
				<HeartIcon title='Unlike' className={`${className} text-red-500`} />
			) : (
				<HeartIcon title='Like' className={`${className} text-emperor-100`} />
			)}
		</button>
	);
}

export default PostLikeComponent;

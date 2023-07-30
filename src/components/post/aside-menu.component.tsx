import { ArrowUturnLeftIcon, ShareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import GoBackWithChildrenComponent from '@/components/blog-list/go-back-with-children.component.tsx';
import CopyToClipboardComponent from '@/components/post/copy-to-clipboard.component.tsx';
import PostLikeComponent from '@/components/post/post-like.component.tsx';
import CommentsDialogComponent from '@/components/post/comments-dialog.component.tsx';
import { Post } from '../../../typings.ts';

type Props = {
	post: Post;
};

function AsideMenuComponent({ post }: Props) {
	return (
		<aside className='fixed bottom-0 right-0 z-[2000] flex h-12 w-full flex-row items-center justify-center gap-x-8 gap-y-2 bg-emperor-1000 xl:sticky xl:top-[19rem] xl:-mr-[8rem] xl:h-full xl:w-fit xl:flex-col xl:justify-normal xl:bg-transparent xl:pl-12 xl:pt-8'>
			<GoBackWithChildrenComponent>
				<span className='flex h-12 w-12 items-center justify-center rounded-md text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full xl:bg-emperor-950'>
					<ArrowUturnLeftIcon title='Go Back' className='w-7 xl:w-5' />
				</span>
			</GoBackWithChildrenComponent>

			<CopyToClipboardComponent>
				<span className='flex h-12 w-12 items-center justify-center rounded-md text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full xl:bg-emperor-950'>
					<ShareIcon title='Share' className='w-7 xl:w-5' />
				</span>
			</CopyToClipboardComponent>

			<PostLikeComponent post={post} className='w-7 xl:w-5' />

			<CommentsDialogComponent postId={post._id} />
		</aside>
	);
}

export default AsideMenuComponent;

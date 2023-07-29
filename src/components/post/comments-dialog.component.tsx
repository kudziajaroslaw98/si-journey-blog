'use client';

import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function CommentsDialogComponent({ postId }: { postId: string }) {
	const [showDialog, setShowDialog] = useState(false);
	const [slideOut, setSlideOut] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const openDialog = () => {
		setShowDialog(true);
	};

	const closeDialog = () => {
		setSlideOut(true);
		setTimeout(() => {
			setShowDialog(false);
			setSlideOut(false);
		}, 300);
	};

	const onSubmit = (data: any) =>
		fetch('/api/post/comment', {
			method: 'POST',
			body: JSON.stringify({ ...data, postId }),
		}).then((res) => {
			if (res.status === 200) {
				closeDialog();
			}
		});

	const toggleOpenDialog = () => {
		if (showDialog) closeDialog();
		else openDialog();
	};

	return (
		<div className='relative'>
			<button
				type='button'
				title='Add Comment'
				onKeyDown={(e) => e.key === 'Enter' && toggleOpenDialog()}
				onClick={() => toggleOpenDialog()}
				className='flex h-12 w-12 items-center justify-center rounded-md bg-emperor-1000 text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full'
			>
				<ChatBubbleLeftIcon title='Comments' className='w-6 xl:w-5' />
			</button>
			{showDialog && (
				<div
					className={`
					${showDialog && 'animate-pop-in'} ${slideOut && 'animate-pop-out'}
					fixed bottom-16 left-0 -z-10 flex w-full items-center justify-center xl:absolute xl:-bottom-16 xl:left-auto xl:right-[4rem] xl:w-[40rem]`}
				>
					<div className='flex w-full max-w-[40rem] flex-col gap-y-2 bg-emperor-1000 p-4 shadow min-[360px]:gap-y-8 min-[360px]:p-8 sm:rounded-lg sm:border sm:border-emperor-800'>
						<div className='flex w-full flex-col '>
							<div className='flex w-full items-center justify-between'>
								<div className='flex items-center justify-center gap-x-4 text-2xl font-semibold leading-loose text-neutral-200'>
									<ChatBubbleLeftIcon title='Comments' className='w-6' />
									<span>Add Comment</span>
								</div>

								<button
									title='Close'
									onKeyDown={(e) => e.key === 'Enter' && closeDialog()}
									onClick={() => closeDialog()}
									className='rounded-lg p-1 transition-colors hover:cursor-pointer hover:bg-emperor-900'
									type='button'
								>
									<XMarkIcon className='w-8' />
								</button>
							</div>

							<span className='flex w-full text-xl font-light text-emperor-400'>
								Tell others what do you thing about this post
							</span>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col gap-y-2 min-[360px]:gap-y-3  sm:gap-y-8'
						>
							<div className='flex w-full flex-col'>
								<input
									type='text'
									placeholder='Your name...'
									className={`
										${errors?.nickname && 'border border-red-400'}
										flex w-full rounded-lg bg-emperor-950 p-4 placeholder-emperor-400
									`}
									{...register('nickname', {
										minLength: 3,
										maxLength: 30,
										required: true,
									})}
								/>
								{errors?.nickname && (
									<span className='pt-2 text-sm text-red-400'>
										* Nickname needs to be between 3-30 characters long
									</span>
								)}
							</div>

							<div className='flex w-full flex-col'>
								<textarea
									placeholder='Your thoughts...'
									className={`
									${errors?.message && 'border border-red-400'}
									flex h-[9rem] w-full rounded-lg bg-emperor-950 p-4 placeholder-emperor-400`}
									{...register('message', {
										minLength: 3,
										maxLength: 180,
										required: true,
									})}
								/>
								{errors?.message && (
									<span className='pt-2 text-sm text-red-400'>
										* Message needs to be between 3-180 characters long
									</span>
								)}
							</div>

							<div className='flex w-full flex-col gap-x-4 gap-y-2 min-[360px]:gap-y-3 sm:flex-row sm:gap-y-4'>
								<button
									title='Cancel'
									type='button'
									onClick={() => closeDialog()}
									className='w-full rounded-lg border-2 border-picton-blue-600 py-2 font-inter font-bold text-picton-blue-600 transition-colors hover:border-picton-blue-500 hover:bg-picton-blue-500 hover:text-emperor-100'
								>
									Cancel
								</button>

								<button
									title='Submit'
									type='submit'
									className='w-full rounded-lg bg-picton-blue-600 py-2 font-inter font-bold transition-colors hover:bg-picton-blue-500'
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{showDialog && !slideOut && (
				<div className='fixed left-0 top-0 -z-20 h-full w-full bg-emperor-1000 opacity-50' />
			)}
		</div>
	);
}

export default CommentsDialogComponent;

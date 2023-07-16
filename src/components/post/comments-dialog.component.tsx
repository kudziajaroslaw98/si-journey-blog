'use client';

import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

export function CommentsDialogComponent() {
	// implement showing dialog state
	//
	//
	const [showDialog, setShowDialog] = useState(false);

	const openDialog = () => {
		setShowDialog(true);
	};

	const closeDialog = () => {
		setShowDialog(false);
	};
	//
	// const dialog = (
	// 	<Dialog
	// 		open={showDialog}
	// 		onClose={closeDialog}
	// 		aria-labelledby='alert-dialog-title'
	// 		aria-describedby='alert-dialog-description'
	// 	>
	// 		<DialogTitle id='alert-dialog-title'>{'Use Google\'s location service?'}</DialogTitle>
	// 		<DialogContent>
	// 			<DialogContentText id='alert-dialog-description'>
	// 				Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
	// 			</DialogContentText>
	// 		</DialogContent>
	// 		<DialogActions>
	// 			<Button onClick={closeDialog} color='primary'>
	// 				Disagree
	// 			</Button>
	// 			<Button onClick={closeDialog} color='primary' autoFocus>
	// 				Agree
	// 			</Button>
	// 		</DialogActions>
	// 	</Dialog>
	// );
	//
	// return (
	// 	<>
	// 		<span
	// 			onClick={openDialog}
	// 			className='relative flex h-12 w-12 items-center justify-center rounded-md bg-emperor-1000 text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full'
	// 		>
	// 			<ChatBubbleLeftIcon title='Comments' className='w-8 xl:w-5' />
	// 		</span>
	// 		{dialog}
	// 	</>
	// );
	//

	return (
		<>
			<span
				onClick={openDialog}
				className='relative flex h-12 w-12 items-center justify-center rounded-md bg-emperor-1000 text-emperor-100 transition-colors hover:cursor-pointer hover:bg-emperor-900 xl:rounded-full'
			>
				<ChatBubbleLeftIcon title='Comments' className='w-8 xl:w-5' />
			</span>
			{dialog}
		</>
	);
}

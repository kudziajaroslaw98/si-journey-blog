'use client';

import ButtonComponent from '@/components/button.component.tsx';

export function GoBackLinkComponent() {
	const goBack = () => {
		window.history.back();
	};
	return (
		<ButtonComponent
			onClick={goBack}
			text='Go back'
			outline
			className='justify-center'
		/>
	);
}

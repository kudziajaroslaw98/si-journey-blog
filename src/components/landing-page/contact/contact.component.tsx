import Email from '@/public/images/svg/email.svg';
import Phone from '@/public/images/svg/phone.svg';
import Location from '@/public/images/svg/location.svg';

export default function ContactComponent() {
	return (
		<div className='flex w-full flex-col items-center justify-center space-y-8 sm:justify-center md:space-y-0 md:flex-row md:justify-between'>
			<div className='flex flex-col items-center p-4 text-center font-normal space-y-8'>
				<div className='flex h-24 w-24 items-center justify-center rounded-lg p-6 shadow-xl bg-emperor-900'>
					<Email />
				</div>

				<span className='text-emperor-300'>Feel free to write</span>

				<span>jarek.journey@gmail.com</span>
			</div>

			<span className='hidden text-emperor-500 md:block'>OR</span>

			<div className='flex flex-col items-center p-4 text-center font-normal space-y-8'>
				<div className='flex h-24 w-24 items-center justify-center rounded-lg p-6 shadow-xl bg-emperor-900'>
					<Phone />
				</div>

				<span className='text-emperor-300'>Feel free to call</span>

				<span>Not available yet</span>
			</div>

			<span className='hidden text-emperor-500 md:block'>OR</span>

			<div className='flex flex-col items-center p-4 text-center font-normal space-y-8'>
				<div className='flex h-24 w-24 items-center justify-center rounded-lg p-6 shadow-xl bg-emperor-900'>
					<Location />
				</div>

				<span className='text-emperor-300'>Feel free to come</span>

				<span>Not available yet</span>
			</div>
		</div>
	);
}

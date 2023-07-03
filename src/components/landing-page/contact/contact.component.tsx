import Email from '@/public/images/svg/email.svg';
import Phone from '@/public/images/svg/phone.svg';
import Location from '@/public/images/svg/location.svg';

export default function ContactComponent() {
	return (
		<div className='flex w-full justify-center sm:justify-center md:justify-between flex-col space-y-8 md:space-y-0 md:flex-row items-center'>
			<div className='space-y-8 text-center flex flex-col items-center font-normal p-4'>
				<div className='flex w-24 h-24 items-center justify-center p-6 bg-emperor-900 shadow-xl rounded-lg'>
					<Email />
				</div>

				<span className='text-emperor-300'>Feel free to write</span>

				<span>jarek.journey@gmail.com</span>
			</div>

			<span className='text-emperor-500 hidden md:block'>OR</span>

			<div className='space-y-8 text-center flex flex-col items-center font-normal p-4'>
				<div className='flex w-24 h-24 items-center justify-center p-6 bg-emperor-900 shadow-xl rounded-lg'>
					<Phone />
				</div>

				<span className='text-emperor-300'>Feel free to call</span>

				<span>Not available yet</span>
			</div>

			<span className='text-emperor-500 hidden md:block'>OR</span>

			<div className='space-y-8 text-center flex flex-col items-center font-normal p-4'>
				<div className='flex w-24 h-24 items-center justify-center p-6 bg-emperor-900 shadow-xl rounded-lg'>
					<Location />
				</div>

				<span className='text-emperor-300'>Feel free to come</span>

				<span>Not available yet</span>
			</div>
		</div>
	);
}

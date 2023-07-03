import BenefitComponent from '@/components/landing-page/benefits/benefit.component.tsx';

export default function BenefitsComponent() {
	return (
		<div className='flex justify-center space-y-16 md:space-y-0  md:justify-between flex-wrap'>
			<BenefitComponent
				title={'Continuous \nGrowth'}
				description={
					'As you evolve, so does our content. Stay engaged with fresh insights,\n ideas, and techniques to support your continuous growth journey.'
				}
				circleClass='circle1'
			/>
			<BenefitComponent
				title={'Mindful \nConsumption'}
				description={
					'We promote mindful consumption of content, helping you stay focused and\n absorb information more effectively.'
				}
				circleClass='circle2'
			/>
			<BenefitComponent
				title={'Ad-Free \nExperience'}
				description={
					'Say goodbye to disruptive ads. Our platform is advertisement-free,\n meaning no interruptions in your self-improvement journey.'
				}
				circleClass='circle3'
			/>
			<BenefitComponent
				title={'Focused \nContent'}
				description={
					'Our blog provides streamlined and targeted information, reducing the\n amount of superfluous content you need to sift through.'
				}
				circleClass='circle4'
			/>
		</div>
	);
}

import John from '@/public/images/people/john.png';
import Samantha from '@/public/images/people/samantha.png';
import Peter from '@/public/images/people/peter.png';
import Lisa from '@/public/images/people/lisa.png';
import Alex from '@/public/images/people/alex.png';
import Michelle from '@/public/images/people/michelle.png';
import TestimonialCardComponent from '@/components/testimonial-card.component.tsx';

export default function TestimonialsComponent() {
	return (
		<div className='flex overflow-x-visible space-x-8 absolute -left-[13.5rem] xl:-left-[18.5rem]'>
			<TestimonialCardComponent
				className='xl:-bottom-8 xl:blur-[1px]'
				name='John'
				image={John}
				text="This blog has genuinely changed my life. The self-improvement strategies are practical, and I can apply them to my daily life seamlessly. Can't recommend it enough!"
			/>

			<TestimonialCardComponent
				className='xl:-bottom-4'
				name='Samantha'
				image={Samantha}
				text="The blog posts on this site are incredibly insightful and inspiring. I've learned so much and have seen noticeable changes in my life since I started reading regularly"
			/>

			<TestimonialCardComponent
				name='Peter'
				image={Peter}
				text="Every article is like a mini life lesson. It's wonderful how much knowledge and inspiration I can gather from each post. Truly an amazing blog!"
			/>

			<TestimonialCardComponent
				name='Lisa'
				image={Lisa}
				text="I always look forward to new blog posts. The content is always fresh, relevant, and full of practical tips. It's been a great tool for my personal growth journey."
			/>

			<TestimonialCardComponent
				className='xl:-bottom-4'
				name='Alex'
				image={Alex}
				text="I love the depth of the articles, and they're always presented in such a clear and concise manner. Reading this blog has become a staple part of my morning routine."
			/>

			<TestimonialCardComponent
				className='xl:-bottom-8 xl:blur-[1px]'
				name='Michelle'
				image={Michelle}
				text='The articles here truly stimulate thought and self-reflection. I love the fresh perspectives and in-depth analysis. This blog has become a part of my self-improvement journey!'
			/>
		</div>
	);
}

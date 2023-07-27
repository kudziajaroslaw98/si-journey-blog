import Image from 'next/image';
import React from 'react';

export const MarkdownComponents: object = {
	p: (paragraph: any) => {
		const { node } = paragraph;

		if (node.children[0].tagName === 'img') {
			const image = node.children[0];
			const metastring = image.properties.alt;
			const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
			const metaHeight = metastring.match(/{height:([^}]+)}/);
			const height = metaHeight ? metaHeight[1] : '432';
			const isPriority = metastring?.toLowerCase().match('{priority}');

			return (
				<div className='relative flex w-full' style={{ height: `${height}px` }}>
					<Image
						src={image.properties.src}
						className='rounded-lg bg-emperor-400 object-cover object-center shadow-lg'
						alt={alt}
						priority={isPriority}
						fill
						sizes='90vw (max-width: 880px) 768px'
					/>
				</div>
			);
		}
		return <p>{paragraph.children}</p>;
	},
};

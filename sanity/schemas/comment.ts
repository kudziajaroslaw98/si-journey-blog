import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			placeholder: 'Enter your name',
			validation: (Rule) => Rule.required().max(30),
		}),
		defineField({
			name: 'message',
			title: 'Message',
			type: 'string',
			placeholder: 'Leave a message',
			validation: (Rule) => Rule.required().max(160),
		}),
		defineField({
			name: 'approved',
			title: 'Approved',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'postReference',
			title: 'Post Reference',
			type: 'reference',
			to: [{ type: 'post' }],
		}),
	],
});

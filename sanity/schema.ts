import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent.ts';
import category from './schemas/category.ts';
import post from './schemas/post.ts';
import author from './schemas/author.ts';
import comment from '@/sanity/schemas/comment.ts';

const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, author, comment, category, blockContent],
};

export default schema;

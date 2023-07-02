type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Reference {
  _ref: string;
  _type: 'reference';
}

export interface Image {
  _type: 'image';
  asset: Reference;
}

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

export interface Category extends Base {
  description: string;
  title: string;
}

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  timeToRead: string;
  rating: number;
  title: string;
  description: string;
  markdown: string;
}

export interface Title {
  _type: 'string';
  current: string;
}

import { groq } from "next-sanity";
import { cache } from "react";
import { client } from "../../../../../sanity/lib/client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/rich-text-components";

const clientFetch = cache(client.fetch.bind(client));

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 10;

export async function generateStaticParams() {
  const query = groq`
        *[_type == "post"]
        {
            slug  
        }
    `;
  const slugs: Post[] = await clientFetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}
const Page = async ({ params: { slug } }: Props) => {
  const query = groq`
       *[_type == "post" && slug.current == $slug][0]{
              ...,
              author->, 
              categories[]->
         }
       `;

  const post: Post = await clientFetch(query, { slug });
  return (
    <article className="max-w-3xl mx-auto px-10 pb-28">
      <section className="text-gray-100 w-full">
        <div className="flex flex-col justify-between space-y-10">
          <div>
            <h1 className="text-4xl font-extrabold">{post?.title}</h1>

            <p className="text-gray-400 text-sm">
              {new Date(post?._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <Image
              className="rounded-full"
              src={urlFor(post?.author.image).url()}
              alt={post?.author.name}
              height={40}
              width={40}
            />

            <div className="w-64">
              <h3 className="text-lg font-bold">{post?.author.name}</h3>

              <span>{post.timeToRead}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="font-extralight text-emperor-200 leading-relaxed text-xl mx-auto break-words py-10">
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  );
};

export default Page;

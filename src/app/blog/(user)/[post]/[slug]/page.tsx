import { groq } from 'next-sanity'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { draftMode } from 'next/headers'
import { clientFetch } from '@/sanity/lib/client.ts'
import urlFor from '@/lib/urlFor.ts'
import { Post } from '../../../../../../typings.ts'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 10

export async function generateStaticParams() {
  const query = groq`
        *[_type == "post"]
        {
            slug
        }
    `
  const slugs: Post[] = await clientFetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

const Page = async ({ params: { slug } }: Props) => {
  const query = groq`
       *[_type == "post" && slug.current == $slug][0]{
              ...,
              author->, 
              categories[]->
         }
       `

  const post: Post = await clientFetch(query, { slug })
  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 pb-28">
      <h1 className="text-5xl">
        {draftMode().isEnabled ? 'preview mode' : ''}
      </h1>

      <section className="my-8 w-full">
        <Image
          className="object-cover"
          alt={post.title}
          src={urlFor(post.mainImage).url()}
          width={688}
          height={400}
          priority
        />
      </section>
      <section className="text-gray-100 w-full">
        <div className="flex flex-col justify-between space-y-10">
          <div>
            <h1 className="text-4xl font-extrabold">{post?.title}</h1>

            <p className="text-gray-400 text-sm">
              {new Date(post?._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className="flex items-center space-x-5">
            {post?.author?.image && (
              <Image
                className="rounded-full"
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                height={40}
                width={40}
              />
            )}

            <div className="w-64">
              <h3 className="text-lg font-bold">{post.author.name}</h3>

              <span>{post.timeToRead}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="font-open-sans font-extralight text-emperor-100 leading-relaxed text-xl mx-auto whitespace-break-spaces py-10">
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </section>
    </article>
  )
}

export default Page

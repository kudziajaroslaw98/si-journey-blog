import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import urlFor from '@/lib/urlFor.ts'
import ClientSiteRoute from '@/components/client-site-route.tsx'
import { Post } from '../../typings.ts'

type PostCardProps = {
  post: Post
}

function PostCardComponent({ post }: PostCardProps) {
  return (
    <ClientSiteRoute key={post._id} route={`/blog/post/${post.slug?.current}`}>
      <div className="group flex mt-10 flex-col -mx-5 md:mx-3 bg-emperor-100 rounded-md overflow-hidden max-w-[32rem] h-[30rem] transition-all">
        <div className="relative w-full h-2/3 drop-shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-200 ease-out">
          {post.mainImage ? (
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              priority
              fill
            />
          ) : null}
        </div>

        <div className="p-8">
          <div className="flex flex-col space-y-2">
            <span className="-tracking-wide line-clamp-3 text-xl sm:text-2xl md:text-3xl text-emperor-900 font-black sm:-tracking-wider group-hover:underline decoration-emperor-100 group-hover:decoration-2 group-hover:decoration-picton-blue-500 transition-all">
              {post.title}
            </span>

            <span className="text-gray-600 line-clamp-2 pt-2">
              {post.description}
            </span>
          </div>

          <div className="w-full flex justify-between items-center pt-6">
            <div className="flex items-center space-x-5">
              {post?.author?.image && (
                <Image
                  className="rounded-full ring-emperor-900 ring-2 ring-offset-2"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
              )}

              <div className="flex flex-col ">
                <span>{post.author.name}</span>

                <span className="text-sm text-emperor-600">
                  {post.timeToRead}
                </span>
              </div>
            </div>

            <span className="hidden sm:flex items-center w-fit cursor-pointer flex-row font-medium relative group/readMore trasition-all">
              <span className="z-20 trasition-all group-hover/readMore:text-emperor-100 flex justify-center items-center ">
                Read Post
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </span>

              <span className="z-10 group-hover/readMore:opacity-100 flex -mx-2 -my-1 opacity-0 top-0 absolute -inset-0 rotate-0 group-hover/readMore:-rotate-1 bg-picton-blue-500 transition-all rounded-md" />
            </span>
          </div>
        </div>
      </div>
    </ClientSiteRoute>
  )
}
export default PostCardComponent

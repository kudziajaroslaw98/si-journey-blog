import Image from 'next/image';
import urlFor from '@/lib/urlFor.ts';
import ClientSiteRoute from '@/components/client-site-route.tsx';
import { Post } from '../../typings.ts';
import RatingStarsComponent from '@/components/rating-stars.component.tsx';
import RatingTextComponent from '@/components/rating-text.component.tsx';

type PostCardProps = {
  post: Post;
};

function PostCardComponent({ post }: PostCardProps) {
  return (
    <ClientSiteRoute key={post._id} route={`/blog/post/${post.slug?.current}`}>
      <div className="group flex flex-col bg-emperor-1000 rounded-md overflow-hidden w-full max-w-[30rem] md:max-w-[21rem] min-[880px]:max-w-[26rem] lg:max-w-[19rem] xl:max-w-[23rem] h-[19rem] transition-all shadow-lg">
        <div className="relative w-full h-[14.375rem] drop-shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-200 ease-out">
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

        <div className="flex flex-col w-full h-full justify-between p-4">
          <div className="flex flex-col justify-between">
            <span className="line-clamp-3 text-lg text-emperor-100 font-bold group-hover:underline decoration-emperor-100 group-hover:decoration-2 group-hover:decoration-picton-blue-500 transition-all">
              {post.title}
            </span>
          </div>

          <div className="flex items-end justify-center space-x-4 w-full">
            <div className="flex h-full relative justify-center items-center">
              {post?.author?.image && (
                <Image
                  className="rounded-full object-center object-fill min-w-[2rem] min-h-[2rem]"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={32}
                  height={32}
                />
              )}
            </div>

            <div className="flex w-full flex-col text-emperor-100">
              <div className="flex w-full justify-between items-center">
                <span className="">{post.author.name}</span>
                <RatingTextComponent rating={post.rating} />
              </div>
              <div className="flex w-full justify-between items-center">
                <span className="text-xs">{post.timeToRead}</span>
                <RatingStarsComponent rating={post.rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientSiteRoute>
  );
}
export default PostCardComponent;

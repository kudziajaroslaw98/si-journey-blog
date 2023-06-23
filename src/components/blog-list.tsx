import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSiteRoute from "@/components/client-site-route";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#FA4BBA] mb-18" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSiteRoute key={post._id} route={`/post/${post.slug?.current}`}>
            <div key={post._id} className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                {post?.mainImage ? (
                  <Image
                    className="object-cover object-left lg:object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                  />
                ) : null}
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories?.map((category) => (
                    <div
                      key={category._id}
                      className="bg-[#F7ABBA] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ms-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>
              <p>
                {" "}
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSiteRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

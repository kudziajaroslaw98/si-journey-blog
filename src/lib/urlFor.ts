import imageUrlBuilder from '@sanity/image-url'
import { getClient } from '@/sanity/lib/client.ts'

const builder = imageUrlBuilder(getClient())

function urlFor(source: any) {
  return builder.image(source)
}

export default urlFor

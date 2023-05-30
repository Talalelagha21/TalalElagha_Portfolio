import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersions: "2022-03-25",
    useCdn: process.env.NODE_ENV === "production"
};

export const sanityClient = createClient(config)




export function urlFor(source) {
  return imageUrlBuilder(config).image(source)
}



import axios from "axios";
import { client } from "./sanity";

export async function apiGetBlogPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      categories,
      publishedAt,
      body,
      "author" : author->name,
      "authorImage" : author->image,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
    }
  }
  `;

  const sanityResponse = await client.fetch(query);

  return sanityResponse;
}

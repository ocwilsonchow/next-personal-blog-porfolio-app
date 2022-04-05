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

export async function apiGetBlogPost(slug) {
  console.log("slug: ", slug)
  const query = `
   *[_type == "post" && slug.current == "${slug}"] {
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
  console.log("query: ", query)
  const sanityResponse = await client.fetch(query);
  console.log(sanityResponse);
  return sanityResponse[0];
}

export async function apiGetBlogPostIds() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
  }
  `;

  const sanityResponse = await client.fetch(query);

  return sanityResponse.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
}

import { client } from "./sanity";

export async function apiGetExperiences() {
  console.log("hi")
  const query = `
    *[_type == "experience"] | order(publishedAt asc){
      title,
      description
  }
  `;

  const sanityResponse = await client.fetch(query);

  return sanityResponse;
}

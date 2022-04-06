import { client } from "./sanity";

export async function apiGetExperiences() {
  const query = `
    *[_type == "experience"] | order(publishedAt asc){
      title,
      description
  }
  `;

  const sanityResponse = await client.fetch(query);

  return sanityResponse;
}

export async function apiGetEducation() {
  const query = `
    *[_type == "education"] | order(publishedAt asc){
      title,
      organization,
      position,
      place,
      date,
      description,
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

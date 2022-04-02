import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "i3xzrnz1",
  dataset: "production",
  apiVersion: "v1",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

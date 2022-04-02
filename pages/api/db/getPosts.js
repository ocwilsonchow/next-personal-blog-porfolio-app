import { client } from "../../../lib/sanity";

const getPostsFromSanity = async (req, res) => {
  const query = `
    *[_type == "post"]{
      title,
      slug,
      categories,
      publishedAt,
      body,
      author,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
    }
  }
  `;

  try {
    const sanityResponse = await client.fetch(query);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getPostsFromSanity;

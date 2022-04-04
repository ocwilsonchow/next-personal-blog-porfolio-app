import { Center, Flex, Spinner } from "@chakra-ui/react";
import useSWR, { SWRConfig } from "swr";
import axios from "axios";
import SinglePost from "../../components/SinglePost";
import getPostsFromSanity from "../api/db/getPosts";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const PageBlogIndex = () => {
  const { data } = useSWR("api/db/getPosts", fetcher);

  return (
    <Flex flexDir="column" alignItems="center">
      <Center mb={4} fontWeight="bold" fontSize="2xl">
        SWR Client-side Rendering Blog Posts
      </Center>
      <Flex flexDir="column" justifyContent="center">
        {!data && (
          <Center>
            <Spinner />
          </Center>
        )}
        <Flex flexWrap="wrap" justifyContent="center">
          {data?.map((post, i) => (
            <Flex key={i} m={2}>
              <SinglePost post={post} i={i} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageBlogIndex;

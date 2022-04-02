import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (!posts) {
      getPosts();
    }
  }, [posts]);

  console.log(posts)

  const getPosts = async () => {
    try {
      const response = await fetch("api/db/getPosts");
      const data = await response.json()
      setPosts(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextData = {
    getPosts,
    posts,
  };

  return (
    <PostContext.Provider value={contextData}>{children}</PostContext.Provider>
  );
};

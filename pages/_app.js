import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { PostProvider } from "../context/postContext";

function MyApp({ Component, pageProps }) {
  return (
    <PostProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </PostProvider>
  );
}

export default MyApp;

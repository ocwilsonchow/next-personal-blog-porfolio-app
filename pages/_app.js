import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { PostProvider } from "../context/postContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PostProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PostProvider>
    </ChakraProvider>
  );
}

export default MyApp;

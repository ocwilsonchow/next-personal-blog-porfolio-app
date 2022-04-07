import { Alert, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/icons";
import AboutShort from "../components/about/AboutShort";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import { apiGetEducation, apiGetExperiences } from "../lib/about";
import Skills from "../components/about/Skills";

const PageAbout = ({ experiences, educations }) => {

  return (
    <Flex flexDir="column">

      <Alert status="success" mt={4} mx={2} fontWeight='bold'  variant='left-accent'>Page is still under development! </Alert>
      <AboutShort />
      <Skills />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Education educations={educations} />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Experience experiences={experiences} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default PageAbout;

export async function getStaticProps() {
  const experiences = await apiGetExperiences();
  const educations = await apiGetEducation();
  return {
    props: {
      experiences,
      educations,
    },
  };
}

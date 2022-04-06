import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AboutShort from "../components/about/AboutShort";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import { apiGetEducation, apiGetExperiences } from "../lib/about";
import Skills from "../components/about/Skills";

const PageAbout = ({ experiences, educations }) => {
  console.log(educations);
  return (
    <Flex flexDir="column">
      <AboutShort />
      <Skills />
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        <GridItem colSpan={{ base: 2 ,md: 1}} >
          <Education educations={educations} />
        </GridItem>
        <GridItem colSpan={{ base: 2 ,md: 1}} >
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

import { Flex } from '@chakra-ui/react'
import React from 'react'
import AboutShort from '../components/about/AboutShort'
import Experience from '../components/about/Experience'
import Education from '../components/about/Education'
import { apiGetExperiences } from "../lib/about"

const PageAbout = ({experiences}) => {

  return (
    <Flex flexDir="column">
      <AboutShort />
      <Education />
      <Experience experiences={experiences} />
    </Flex>
  )
}

export default PageAbout

export async function getStaticProps () {
  const experiences = await apiGetExperiences();
  return {
    props: {
      experiences,
    },
  };
}

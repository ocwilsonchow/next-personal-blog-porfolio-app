import { Flex } from '@chakra-ui/react'
import React from 'react'
import AboutShort from '../components/about/AboutShort'
import Experience from '../components/about/Experience'
import Education from '../components/about/Education'
import { apiGetEducation, apiGetExperiences } from "../lib/about"

const PageAbout = ({experiences, educations}) => {
console.log(educations)
  return (
    <Flex flexDir="column">
      <AboutShort />
      <Education educations={educations} />
      <Experience experiences={experiences} />
    </Flex>
  )
}

export default PageAbout

export async function getStaticProps () {
  const experiences = await apiGetExperiences();
  const educations = await apiGetEducation()
  return {
    props: {
      experiences,
      educations
    },
  };
}

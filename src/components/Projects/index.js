import React, { useState, useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

//  Component
import ProjectDetails from '../ProjectDetails'

// CSS Styles
import {
  Section,
  Wrapper,
  Title,
  ProjectsContainer,
  ProjectItem,
  ProjectImg,
} from './styles'

// Constant
import { projects } from '../../constant/projects'

function Projects() {
  const [moreDetails, setMoreDetails] = useState('')

  const { project } = useContext(ModeContext)

  return (
    <Section
      backgroundColor={project.all.background}
      color={project.all.color}
      id='Projects'
    >
      <Title>Projects</Title>
      <Wrapper>
        <ProjectsContainer>
          {projects.map(({ id, image, name }) => {
            return (
              <ProjectItem
                backgroundColor={project.projectItem.background}
                color={project.projectItem.color}
                key={id}
                onClick={() => {
                  setMoreDetails(id)
                }}
              >
                <ProjectImg>
                  <img src={image} alt={`${name}-img`} />
                </ProjectImg>
                <p>{name}</p>
              </ProjectItem>
            )
          })}
          {moreDetails && (
            <ProjectDetails
              moreDetails={moreDetails}
              setMoreDetails={setMoreDetails}
            />
          )}
        </ProjectsContainer>
      </Wrapper>
    </Section>
  )
}

export default Projects

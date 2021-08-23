import React, { useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

// CSS Styles
import {
  Section,
  Wrapper,
  CloseBtn,
  WebFrame,
  SlideBar,
  ImgContainer,
  ProjectName,
  DetailsCenter,
  DetailsFooter,
  Tool,
} from './styles'

// React Icons
import { MdCancel } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'

// Constant
import { projects } from '../../constant/projects'

function ProjectDetails({ moreDetails, setMoreDetails }) {
  const [project] = projects.filter(({ id }) => id === moreDetails)

  const { projectDetails } = useContext(ModeContext)

  return (
    <Section active={moreDetails}>
      <Wrapper
        backgroundColor={projectDetails.wrapper.background}
        color={projectDetails.wrapper.color}
      >
        <CloseBtn
          color={projectDetails.closeBtn.svgColor}
          onClick={() => setMoreDetails('')}
          type='button'
        >
          <MdCancel />
        </CloseBtn>
        <WebFrame backgroundColor={projectDetails.webFrame.background}>
          <SlideBar>
            <svg height='10' width='20'>
              <circle cx='5' cy='5' r='5' fill='rgb(237, 76, 92)'></circle>
            </svg>
            <svg height='10' width='20'>
              <circle cx='5' cy='5' r='5' fill='rgb(253, 203, 88)'></circle>
            </svg>
            <svg height='10' width='20'>
              <circle cx='5' cy='5' r='5' fill='rgb(120, 177, 89)'></circle>
            </svg>
          </SlideBar>
          <ImgContainer>
            <img src={project.image} alt='' />
          </ImgContainer>
        </WebFrame>
        <DetailsCenter>
          <ProjectName>
            <h5>{project.name}</h5>
            <a href={project.link}>
              <FaExternalLinkAlt />
            </a>
          </ProjectName>
          <p>{project.description}</p>
        </DetailsCenter>
        <DetailsFooter>
          {project.tools.map(({ icon, name }) => {
            return (
              <Tool key={Math.random()}>
                {icon}
                <p>{name}</p>
              </Tool>
            )
          })}
        </DetailsFooter>
      </Wrapper>
    </Section>
  )
}

export default ProjectDetails

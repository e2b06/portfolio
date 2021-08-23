import React, { useRef, useEffect, useState, useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

//  Constant
import { educations } from '../../constant/education'

// CSS Styles
import {
  Section,
  Wrapper,
  Title,
  EducationItemsContainer,
  EducationItem,
  ItemBox,
} from './styles'

//React Icons
import {
  FaGraduationCap,
  FaHourglassEnd,
  FaHourglassStart,
} from 'react-icons/fa'

function Education() {
  const educationRef = useRef([])
  const [index, setIndex] = useState([])

  const { education } = useContext(ModeContext)

  useEffect(() => {
    //  Scroll Handler
    const scrollHandler = () => {
      educationRef.current.forEach((item, i) => {
        if (window.innerHeight >= item.getBoundingClientRect().top + 100) {
          setIndex((pre) => {
            const tem = pre || []
            return [...tem, i].filter(
              (item, index, arr) => arr.indexOf(item) === index
            )
          })
        } else {
          setIndex((pre) => {
            return [...pre].filter((item) => item !== i)
          })
        }
      })
    }

    window.addEventListener('scroll', scrollHandler)

    //  Clean Up Function
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <Section
      backgroundColor={education.all.background}
      color={education.all.color}
      id='Education'
    >
      <Title>education</Title>
      <Wrapper opacity={education.wrapper.opacity}>
        <EducationItemsContainer
          svgBackground={education.educationItemsContainer.svgBackground}
        >
          {educations.map(({ id, school, programme, years }, i) => {
            return (
              <EducationItem
                direction={Number(id % 2 !== 0)}
                key={id}
                active={index.includes(i)}
                ref={(element) => {
                  educationRef.current[i] = element
                }}
              >
                <FaHourglassEnd />
                <ItemBox
                  active={index.includes(i)}
                  direction={Number(id % 2 !== 0)}
                  titleColor={education.itemBox.titleColor}
                >
                  <FaGraduationCap />
                  <h4>{programme}</h4>
                  <h5>{school}</h5>
                </ItemBox>
                <p>{years}</p>
              </EducationItem>
            )
          })}
          <FaHourglassStart />
        </EducationItemsContainer>
      </Wrapper>
    </Section>
  )
}

export default Education

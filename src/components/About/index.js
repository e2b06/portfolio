import React, { useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

//  CSS Styles
import {
  Section,
  Wrapper,
  Title,
  WebFrame,
  SlideBar,
  PersonalInfo,
  Intro,
} from './styles'

function About() {
  const { about } = useContext(ModeContext)

  return (
    <Section
      backgroundColor={about.all.background}
      color={about.all.color}
      id='About'
    >
      <Title>about me</Title>
      <Wrapper>
        <WebFrame backgroundColor={about.webFrame.background}>
          <SlideBar backgroundColor={about.slideBar.background}>
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
          <PersonalInfo>
            <h1>Contact</h1>
            <p>
              Address:
              <span>
                Room 2702, 27/F Tung Sing House, Lei Tung Estate, Ap Lei Chau,
                Hong Kong
              </span>
            </p>
            <p>
              Mobile:
              <span>61551562</span>
            </p>
            <p>
              Email:
              <span>e2b06@yahoo.com.hk</span>
            </p>
            <p>
              Availability:
              <span>Immediate </span>
            </p>
          </PersonalInfo>
        </WebFrame>
        <WebFrame backgroundColor={about.webFrame.background}>
          <SlideBar backgroundColor={about.slideBar.background}>
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
          <Intro>
            <h1>Hi :)</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates amet placeat perspiciatis a, facere, optio consequatur,
              magnam iste laudantium veniam nobis ducimus earum dignissimos
              commodi!
            </p>
          </Intro>
        </WebFrame>
      </Wrapper>
    </Section>
  )
}

export default About

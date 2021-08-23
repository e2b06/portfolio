import React from 'react'

// CSS Styles
import { Section, Wrapper, IconsContainer } from './styles'

// React Icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <Section>
      <Wrapper>
        <IconsContainer>
          <a href='https://github.com/' target='_blank'>
            <AiFillGithub />
          </a>
          <a href='https://www.linkedin.com/home' target='_blank'>
            <AiFillLinkedin />
          </a>
          <a href='https://www.instagram.com/' target='_blank'>
            <AiFillInstagram />
          </a>
        </IconsContainer>
        <p>Copyright © Kenny Chu</p>
      </Wrapper>
    </Section>
  )
}

export default Footer

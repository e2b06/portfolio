import React from 'react'

// CSS Styles
import { Section, Wrapper, Title, SkillsContainer, SkillItem } from './styles'

// Constant
import { skills } from '../../constant/skills'

function Skill() {
  return (
    <Section id='Skills'>
      <Title>skills</Title>
      <Wrapper>
        <SkillsContainer>
          {skills.map(({ id, name, icons }) => {
            return (
              <SkillItem key={id}>
                {icons}
                <span>{name}</span>
              </SkillItem>
            )
          })}
        </SkillsContainer>
      </Wrapper>
    </Section>
  )
}

export default Skill

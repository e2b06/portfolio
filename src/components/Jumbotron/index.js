import React, { useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

//  CSS Styles
import { Section, Wrapper, JumbotronLeft } from './styles'

function Jumbotron() {
  const { jumbotron } = useContext(ModeContext)
  return (
    <Section
      backgroundColor={jumbotron.all.background}
      color={jumbotron.all.color}
    >
      <Wrapper>
        <JumbotronLeft color={jumbotron.left.color}>
          <h2>
            Welcome To
            <br />
            My Personal Portfolio
          </h2>
          <p>
            I am Chu Ming Kiu, Kenny. My purpose is beoming a front-end
            developer. I am learning Javascript and React on internet by myself.
            I build several responsive websites by React and provided link in
            following.
          </p>
          <a href='#Projects'>Learn More</a>
        </JumbotronLeft>
      </Wrapper>
    </Section>
  )
}

export default Jumbotron

import styled from 'styled-components'

export const Section = styled.section`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  padding: 5rem 0;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
`

//  Website Frame
export const WebFrame = styled.div`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};

  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  height: auto;
  margin-bottom: 1rem;
  overflow: hidden;
  width: auto;
`

//  Slide Bar
export const SlideBar = styled.div`
  align-items: center;
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};

  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  height: 1.5rem;
  padding: 1rem;
`

//  Right Web Frame
export const Intro = styled.div`
  font-size: 0.85rem;
  line-height: 2;
  letter-spacing: 2px;
  margin: 1.5rem 2rem 1rem;

  h1 {
    color: #d7caaa;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`

//  Left Web Frame
export const PersonalInfo = styled(Intro)`
  p {
    display: grid;
    grid-template-columns: 120px 1fr;
    margin-bottom: 0.5rem;
  }
`

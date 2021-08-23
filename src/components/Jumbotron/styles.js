import styled from 'styled-components'

export const Section = styled.section`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  padding: 2rem 0 5.5rem;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 70vw;
`

export const JumbotronLeft = styled.div`
  width: 100%;
  max-width: 42rem;

  //  Title
  h2 {
    //  Switch Mode
    color: ${({ color }) => color};

    font-size: 4rem;
    line-height: 1.15;
    letter-spacing: 1px;
    max-width: auto;
    margin-bottom: 1rem;
    padding: 4rem 0 1rem;
    transition: all 500ms linear;
    width: 100%;

    @media only screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  //  Intro
  p {
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding-bottom: 2rem;
    transition: all 500ms linear;

    @media only screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  //  Learn More Btn
  a {
    //  Switch Mode
    background-color: ${({ color }) => color};

    border-radius: 50px;
    color: #122620;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    width: 16rem;
    text-decoration: none;
  }
`

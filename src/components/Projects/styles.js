import styled from 'styled-components'

export const Section = styled.section`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  /* color: '#122620'; */

  padding: 5rem 0;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
`

//  Whole Container with Projects
export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

//  Each Project Item
export const ProjectItem = styled.button`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
  cursor: pointer;
  width: auto;
  padding: 0.75rem;
  transition: all 300ms linear;

  //  Project Name
  > p {
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 1.5rem 0 0.5rem;
    text-transform: capitalize;
    text-align: center;
  }

  :hover {
    box-shadow: 0px 7px 20px rgb(0 0 0 / 60%);
  }
`

//  Img
export const ProjectImg = styled.div`
  border-radius: 5px;
  height: 15rem;
  margin: 0 auto;
  overflow: hidden;
  width: auto;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

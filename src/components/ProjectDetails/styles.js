import styled from 'styled-components'

export const Section = styled.section`
  align-items: center;
  background-color: rgb(34, 32, 34, 0.3);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

export const Wrapper = styled.div`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  a {
    color: ${({ color }) => color};
  }

  border-radius: 5px;
  margin: 0 1.5rem;
  max-width: 50rem;
  padding: 3rem 4rem 1rem;
  position: relative;
  transition: all 500ms linear;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 3rem 1rem 1rem;
  }
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  right: 10px;
  position: absolute;
  top: 10px;

  svg {
    //  Switch Mode
    color: ${({ color }) => color};

    height: 2rem;
    width: 2rem;
  }
`

export const WebFrame = styled.div`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};

  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: auto;
`

export const SlideBar = styled.div`
  display: flex;
  margin: 0.5rem 0;
`

export const ImgContainer = styled.div`
  height: auto;
  width: auto;

  img {
    height: 100%;
    width: 100%;
  }
`

export const ProjectName = styled.div`
  align-items: center;
  display: flex;

  // Project Name
  h5 {
    display: inline;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-right: 0.5rem;
    text-transform: capitalize;
  }

  // Link Icon
  svg {
    display: flex;
    align-items: center;
    height: 1.25rem;
    width: 1.25rem;
  }
`

export const DetailsCenter = styled.div`
  margin-bottom: 1rem;

  // Description
  p {
    font-size: 0.5rem;
    padding: 0.5rem 0;
  }
`

// Whole Tools Container
export const DetailsFooter = styled.div`
  display: flex;
  justify-content: center;
`

// Tool Item (Each)
export const Tool = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 5rem;

  // Tools Icon
  svg {
    height: 2rem;
    width: 2rem;
    margin-bottom: 0.25rem;
  }

  // Tools Name
  p {
    font-size: 0.5rem;
  }
`

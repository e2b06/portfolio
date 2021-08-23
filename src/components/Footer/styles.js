import styled from 'styled-components'

export const Section = styled.section`
  background-color: #1f1f1f;
  color: #fff;
  padding: 3rem 0 1rem;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;

  > p {
    font-size: 0.85rem;
    text-align: center;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    display: flex;
    margin: 0 1rem;
    :hover {
      > svg {
        background-color: #707070;
        padding: 0.25rem;
        transform: scale(1.5, 1.5);
      }
    }

    > svg {
      border-radius: 50%;
      color: #fff;
      width: 1.5rem;
      height: 1.5rem;
      transition: transform 300ms linear;
    }
  }
`

import styled from 'styled-components'

export const Section = styled.section`
  background-color: #1f1f1f;
  color: #fff;
  padding: 5rem 0;
`

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const SkillItem = styled.div`
  align-items: center;
  background-color: rgba(248, 245, 244, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 1.5rem 1rem 0;
  text-align: center;
  padding: 1rem;
  width: 8rem;

  svg {
    height: 2.5rem;
    margin-bottom: 0.5rem;
    width: 2.5rem;
  }

  span {
    font-size: 0.5rem;
  }
`

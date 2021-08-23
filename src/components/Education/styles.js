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

  //  Switch Mode
  opacity: ${({ opacity }) => opacity};
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
`

//  Whole Container
export const EducationItemsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  //  Path Stick
  ::after {
    content: '';
    border-bottom: 800px solid #fff;
    bottom: 0;
    position: absolute;
    width: 5px;
  }

  //  Icons
  svg {
    animation-duration: 500ms;
    border: 5px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: flex;
    height: 4rem;
    justify-content: center;
    order: 1;
    padding: 0.75rem;
    width: 4rem;
    /* transition: height 500ms linear; */
    z-index: 1;

    //  Switch Mode
    background-color: ${({ svgBackground }) => svgBackground};

    //  animation
    @keyframes zoom {
      0% {
        transform: scale(0, 0);
      }
      50% {
        transform: scale(1.25, 1.25);
      }
    }
  }

  //  toggle in 992px
  @media only screen and (max-width: 992px) {
    align-items: flex-start;

    ::after {
      left: 28px;
    }

    svg {
      order: 0;
    }
  }
`

//  Each Education Item
export const EducationItem = styled.div`
  display: grid;
  grid-template-columns: 400px auto 400px;
  margin-bottom: 3rem;

  //  Years
  p {
    //  active (scroll)
    animation-name: ${({ active, direction }) =>
      active && direction
        ? 'leftSide'
        : active && !direction
        ? 'rightSide'
        : 'none'};
    animation-duration: 500ms;
    width: auto;
    font-size: 5px;
    letter-spacing: 1px;
    order: 2;
    opacity: ${({ active }) => (active ? '1' : '0')};
    /* transition: all 500ms linear; */

    //  opposite side
    ${({ direction }) =>
      direction ||
      `
      margin-left: auto;
      order: 0;
    `}

    //  Left(animation)
    @keyframes leftSide {
      0% {
        transform: translateX(-100px);
      }
      50% {
        transform: translateX(40px);
      }
    }

    //  Right(animation)
    @keyframes rightSide {
      0% {
        transform: translateX(100px);
      }
      50% {
        transform: translateX(-40px);
      }
    }

    //  toggle in 992px
    @media only screen and (max-width: 992px) {
      display: none;
    }
  }

  //  active animation
  svg {
    opacity: ${({ active }) => (active ? '1' : '0')};
    animation-name: ${({ active }) => (active ? 'zoom' : 'none')};
  }

  //  toggle in 992px
  @media only screen and (max-width: 992px) {
    display: flex;
    max-width: 40rem;
    width: 100%;
  }
`

//  Contain Icons, School, Programme
export const ItemBox = styled.div`
  animation-duration: 500ms;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 0 #ddd;
  max-width: 40rem;
  opacity: ${({ active }) => (active ? '1' : '0')};
  padding: 1.5rem 1rem;
  position: relative;
  width: auto;

  //  Active Animation
  animation-name: ${({ active, direction }) =>
    active && direction
      ? 'leftSide'
      : active && !direction
      ? 'rightSide'
      : 'none'};

  //  position
  ${({ direction }) =>
    direction
      ? `
  order: 0;
  margin-right: 1rem;
  `
      : `
  order: 2;
  margin-left: 1rem;
  `}

  //  box-corner
  ::after {
    content: '';
    border: solid #fff;
    position: absolute;
    border-width: 10px 10px;
    transform: rotate(45deg);

    //  position
    ${({ direction }) =>
      direction
        ? `
      top: 10px;
      right: -5px;
      `
        : `
      top: 10px;
      left: -5px;
      `}
  }

  //  Right animation
  @keyframes leftSide {
    0% {
      transform: translateX(-100px);
    }
    50% {
      transform: translateX(40px);
    }
  }

  //  Right animation
  @keyframes rightSide {
    0% {
      transform: translateX(100px);
    }
    50% {
      transform: translateX(-40px);
    }
    100% {
      transform: translateX(0);
    }
  }

  //  Programme
  h4 {
    //  Switch Mode
    color: ${({ titleColor }) => titleColor};
    font-size: 1.25rem;
    margin-bottom: 1rem;
    line-height: 1.25;
  }

  //  School
  h5 {
    //  Fixed Color
    color: #222;
    font-size: 1rem;
    font-weight: 400;
  }

  svg {
    margin-bottom: 0.5rem;
  }

  //  toggle in 992px
  @media only screen and (max-width: 992px) {
    margin: 0;
    margin-left: 1rem;
    width: 100%;

    //  Only active from Right Side
    animation-name: ${({ active }) => (active ? 'rightSide' : 'none')};

    ::after {
      right: auto;
      left: -5px;
    }
  }
`

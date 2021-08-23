import styled from 'styled-components'

export const Section = styled.nav`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};

  //  Switch Mode
  a {
    color: ${({ color }) => color};
  }
`

export const Wrapper = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
  height: 10vh;

  li {
    margin: 0.5rem 0;
  }
  a {
    font-size: 1.25rem;
    letter-spacing: 1px;
    text-decoration: none;
  }
`

export const NavLeft = styled.li`
  //  Left Side Links
  a {
    align-items: center;
    display: flex;

    //  Icons
    svg {
      margin-right: 0.25rem;
    }
  }
`
export const NavCenter = styled.li`
  //  Toggle in 992px
  display: ${({ active }) => active && 'none'};

  //  Center Links
  > a {
    margin: 0 2rem;
    transition: all 300ms linear;

    //  Switch Mode
    :hover {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
`

export const NavRight = styled.li`
  //  Toggle in 992px
  display: ${({ active }) => (active ? 'none' : 'flex')};

  //  Right Side Links
  a {
    display: flex;
    margin: 0 1rem;

    :hover {
      //  hover a changing svg
      > svg {
        //  Switch Mode

        background-color: ${({ hoverBackground }) => hoverBackground};
        padding: 0.25rem;
        transform: scale(1.5, 1.5);
      }
    }

    //  Right Side SVG
    > svg {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      transition: transform 300ms linear;
    }
  }
`

//  Mode Button
export const ModeContainer = styled.div`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};

  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 5rem;
  padding: 0.25rem 0.5rem;
  position: relative;

  button {
    border: none;
    border-radius: 20px;
    cursor: pointer;
    top: 2px;
    left: 4px;
    height: 1.8rem;
    width: 1.8rem;
    position: absolute;
    transition: all 150ms ease;

    //  Switch Mode
    transform: ${({ isDark }) =>
      isDark ? 'translateX(43px)' : 'translateX(0)'};
  }

  svg {
    height: 1.45rem;
    width: 1.45rem;

    //  Sun Icon Color
    :nth-child(2) {
      color: #ffdd39;
    }

    //  Moon Icon Color
    :nth-child(3) {
      color: #222;
    }
  }
`

//  Toggle MenuBtn (992px)
export const MenuBtn = styled.button`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  //  Menu Icon
  svg {
    height: 2rem;
    width: 2rem;
  }
`

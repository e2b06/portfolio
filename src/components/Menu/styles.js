import styled from 'styled-components'

export const Wrapper = styled.div`
  //  Switch Mode
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${({ boxShadow }) => boxShadow};

  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: auto;
  right: 0;
  position: fixed;
  padding: 1.5rem 2rem;
  transition: all 500ms ease;
  width: 55%;
  z-index: 999;

  //  Open  / Close Menu
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};

  a {
    //  Switch Mode
    color: ${({ color }) => color};
  }
`

//  Icon and Mode Button
export const MenuHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  //  Links
  a {
    align-items: center;
    display: flex;

    //  Icons
    svg {
      margin-right: 0.25rem;
    }
  }
`

//  Close Button
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  left: 5px;
  top: 5px;
  position: absolute;

  //  Icons
  svg {
    //  Switch Mode
    color: ${({ color }) => color};

    height: 1.5rem;
    width: 1.5rem;
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
    top: 1px;
    left: 4px;
    height: 1.8rem;
    width: 1.8rem;
    position: absolute;
    transition: all 150ms ease;

    //  Turn on / off mode
    transform: ${({ isDark }) =>
      isDark ? 'translateX(43px)' : 'translateX(0)'};
  }

  //  Icons
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

//  Section Links
export const MenuCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  //  Links
  > a {
    margin-bottom: 1rem;
    transition: all 300ms linear;

    :hover {
      //  Switch Mode
      color: ${({ hoverColor }) => hoverColor};
    }
  }
`

//  Social Media Links
export const MenuFooter = styled.div`
  display: flex;
  justify-content: center;

  //  Links
  a {
    display: flex;
    margin: 0 1rem;

    :hover {
      > svg {
        //  Switch Mode
        background-color: ${({ hoverBackground }) => hoverBackground};
        padding: 0.25rem;
        transform: scale(1.5, 1.5);
      }
    }

    //  Icons
    > svg {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      transition: transform 300ms linear;
    }
  }
`

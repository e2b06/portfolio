import React, { useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

// CSS Styles
import {
  Wrapper,
  MenuHead,
  ModeContainer,
  CloseBtn,
  MenuCenter,
  MenuFooter,
} from './styles'

// React Icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GiCube } from 'react-icons/gi'
import { FaRegSun } from 'react-icons/fa'
import { FiMoon } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'

function Menu({ isOpen, setIsOpen }) {
  const { isDark, clickHandler, menu } = useContext(ModeContext)

  const setOpenHandler = () => {
    setIsOpen(false)
  }
  return (
    <Wrapper
      active={isOpen}
      backgroundColor={menu.all.background}
      boxShadow={menu.all.boxShadow}
      color={menu.all.color}
    >
      <MenuHead>
        <a href='#'>
          <GiCube />
          <span>Porfolio</span>
        </a>

        <ModeContainer
          onClick={clickHandler}
          isDark={isDark}
          backgroundColor={menu.modeBtn.background}
        >
          <button type='button'></button>
          <FaRegSun />
          <FiMoon />
        </ModeContainer>

        <CloseBtn
          color={menu.closeBtn.color}
          onClick={setOpenHandler}
          type='button'
        >
          <MdCancel />
        </CloseBtn>
      </MenuHead>
      <MenuCenter hoverColor={menu.menuCenter.hoverColor}>
        <a href='#Projects' onClick={setOpenHandler}>
          Projects
        </a>
        <a href='#Skills' onClick={setOpenHandler}>
          Skills
        </a>
        <a href='#About' onClick={setOpenHandler}>
          About
        </a>
        <a href='#Education' onClick={setOpenHandler}>
          Education
        </a>
      </MenuCenter>
      <MenuFooter hoverBackground={menu.menuFooter.hoverBackground}>
        <a href='https://github.com/' target='_blank'>
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/ming-kiu-chu-100364216'
          target='_blank'
        >
          <AiFillLinkedin />
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
          <AiFillInstagram />
        </a>
      </MenuFooter>
    </Wrapper>
  )
}

export default Menu

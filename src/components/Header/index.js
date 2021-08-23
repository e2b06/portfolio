import React, { useState, useEffect, useRef, useContext } from 'react'

//  Mode Context
import ModeContext from '../../Context/ModeContext'

//  Components
import Menu from '../Menu'

//  CSS Styles
import {
  Section,
  Wrapper,
  NavLeft,
  NavCenter,
  NavRight,
  ModeContainer,
  MenuBtn,
} from './styles'

//  React Icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaRegSun } from 'react-icons/fa'
import { FiMoon } from 'react-icons/fi'
import { GiCube } from 'react-icons/gi'
import { HiMenu } from 'react-icons/hi'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isToggle, setIsToggle] = useState(false)

  const { isDark, clickHandler, header } = useContext(ModeContext)

  const navbar = useRef(null)

  useEffect(() => {
    if (navbar.current.getBoundingClientRect().width <= '992') {
      setIsToggle(true)
    }

    const resizeHandler = (e) => {
      if (navbar.current.getBoundingClientRect().width <= '992') {
        setIsToggle(true)
      } else {
        setIsToggle(false)
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', resizeHandler)

    //  Clear Up Function
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <Section
      backgroundColor={header.all.background}
      color={header.all.color}
      ref={navbar}
    >
      <Wrapper>
        <NavLeft>
          <a href='#'>
            <GiCube />
            <span>Porfolio</span>
          </a>
        </NavLeft>

        {isToggle && (
          <MenuBtn
            backgroundColor={header.menuBtn.background}
            color={header.menuBtn.color}
            onClick={() => setIsOpen(!isOpen)}
            type='button'
          >
            <HiMenu />
          </MenuBtn>
        )}

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

        <NavCenter active={isToggle} hoverColor={header.navCenter.hoverColor}>
          <a href='#Projects'>Projects</a>
          <a href='#Skills'>Skills</a>
          <a href='#About'>About</a>
          <a href='#Education'>Education</a>
        </NavCenter>
        <NavRight
          active={isToggle}
          hoverBackground={header.navRight.hoverBackground}
        >
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
          <ModeContainer
            onClick={clickHandler}
            isDark={isDark}
            backgroundColor={header.modeBtn.background}
          >
            <button type='button'></button>
            <FaRegSun />
            <FiMoon />
          </ModeContainer>
        </NavRight>
      </Wrapper>
    </Section>
  )
}

export default Header

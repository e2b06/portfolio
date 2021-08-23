import React, { useState, useEffect } from 'react'

//  Constant
import { mode } from '../constant/mode'

const ModeContext = React.createContext()

function ModeProvider({ children }) {
  localStorage.setItem('mode', JSON.stringify(mode))

  //  GET Color Code
  const modeCode = JSON.parse(localStorage.getItem('mode'))

  //  GET Mode Status
  const modeStatus = JSON.parse(localStorage.getItem('status')) || false

  const [isDark, setIsDark] = useState(modeStatus)
  const [color, setColor] = useState(modeCode.data.light)

  const clickHandler = () => {
    setIsDark(!isDark)
    localStorage.setItem('status', !isDark)
  }

  useEffect(() => {
    if (isDark) {
      setColor(modeCode.data.dark)
    } else {
      setColor(modeCode.data.light)
    }
  }, [isDark])

  return (
    <ModeContext.Provider value={{ isDark, clickHandler, ...color }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeContext
export { ModeProvider }

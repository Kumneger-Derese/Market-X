/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

interface ContetxProp {
  children: React.ReactNode
}

interface ThemeProp {
  isDark: boolean,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeProp>({
  isDark: false, toggleTheme: () => { },
})

const ThemeContextProvider = ({ children }: ContetxProp) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('isDark')
    return stored ? JSON.parse(stored) : false
  })

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark))
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
    localStorage.setItem('isDark', JSON.stringify(isDark))
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  return useContext(ThemeContext)
}

export { ThemeContextProvider, useTheme }
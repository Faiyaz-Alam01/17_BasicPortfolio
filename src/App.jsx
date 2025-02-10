import React from 'react'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contanct/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import { ThemeProvider } from './components/theme/Context'
import { useState, useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () =>{
    setThemeMode("dark")
  }
  const lightTheme = () =>{
    setThemeMode("light")
  }
  
  //theme change 
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

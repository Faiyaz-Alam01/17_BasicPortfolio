import React from 'react'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contanct/Contact'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <div className='dark:bg-gray-800 dark:border-gray-700'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

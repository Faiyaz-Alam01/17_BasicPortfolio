import React from 'react'
import img from '/Faiyazalam.jpg'
import useTheme from '../theme/Context'

const Hero = () => {
  const { themeMode } = useTheme();
  return (
    <div className={`home h-auto sm:h-screen md:flex space-y-4 ${themeMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} sm:justify-evenly justify-center  py-44 w-full`}>
      
      {/* Mobile Logo */}
      <div className="md:hidden flex justify-center">
      <img src={img} 
          alt="Profile Logo"
          className="w-40 h-40 rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="px-10 sm:max-w-md text-center md:text-left space-y-2  ">

        <p className="text-4xl font-semibold">
          Hi, I'm <span className="font-light">Faiyaz Alam</span>
          <br />
          <span className="text-blue-500 font-bold">Frontend Developer</span>
        </p>
        <p className="text-lg text-gray-700 dark:text-white">
          Lorem ipsum dolor sit amet consectetur, voluptates ducimus vero molestias ad quaerat dicta, amet laudantium!
        </p>
    
        <a href="https://docs.google.com/document/d/1TJsl1bxfz-bkaH8WO19xL_VWzDkKtenPSEU4WxKc-BY/edit?tab=t.0" target="_blank">
          <button className="border mt-4 border-black py-2 px-6 font-bold rounded-full bg-blue-300 dark:text-black hover:bg-blue-800 hover:text-white transition duration-300">
            Download CV
          </button>
        </a>
      </div>

      {/* Desktop Logo */}
      <div className="hidden md:flex justify-center space-y-10">
      <img src={img} 
          alt="Profile Logo"
          className="w-60 h-60 rounded-full border border-black"
        />
      </div> 
    </div>

  )
}

export default Hero


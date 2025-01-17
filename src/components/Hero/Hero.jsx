import React from 'react'

const Hero = () => {
  return (
    <div className="px-4 sm:flex space-y-4 justify-evenly sm:pb-72 sm:h-96 py-44 w-full border border-black">
      
      {/* Mobile Logo */}
      <div className="sm:hidden flex justify-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRFwQMPvkgLqDPX0gtyyVT6iQSFJ7rOfu5A&s" 
          alt="Profile Logo"
          className="w-40 h-40 rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-md text-center mt-10 sm:text-left ">
        <p className="text-4xl font-semibold">
          Hi, I'm <span className="font-light">Faiyaz Alam</span>
          <br />
          <span className="text-blue-500 font-bold">Frontend Developer</span>
        </p>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur, voluptates ducimus vero molestias ad quaerat dicta, amet laudantium!
        </p>
    
        <a href="https://docs.google.com/document/d/1TJsl1bxfz-bkaH8WO19xL_VWzDkKtenPSEU4WxKc-BY/edit?tab=t.0" target="_blank">
          <button className="border mt-2 border-black py-2 px-6 font-bold bg-blue-300 hover:bg-blue-800 hover:text-white transition duration-300">
            Download CV
          </button>
        </a>
      </div>

      {/* Desktop Logo */}
      <div className="hidden sm:flex justify-center space-y-10">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRFwQMPvkgLqDPX0gtyyVT6iQSFJ7rOfu5A&s" 
          alt="Profile Logo"
          className="w-60 h-60 rounded-full border border-black"
        />
      </div> 
    </div>

  )
}

export default Hero


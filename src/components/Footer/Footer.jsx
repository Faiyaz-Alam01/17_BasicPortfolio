import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {NavLink} from 'react-router-dom'

function Footer() {
  return (

    <div className='h-auto w-full bg-blue-100 relative'>
      <div className='flex p-10 justify-evenly flex-col gap-y-4 sm:flex-row mb-0'>
        <p className='text-orange-500 text-4xl font-bold '>FAIYAZ.</p>

        <div>
          <p className='text-xl font-medium'>Resources</p>
          <ul>
              <li>
                <NavLink to="/" 
                className={({isActive}) => `${isActive ? "text-orange-500 && underline" : "text-black "} 
                hover:underline hover:text-blue-900`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" 
                  className={({isActive}) => `${isActive ? "text-orange-500 && underline" : "text-black"} 
                  hover:underline hover:to-blue-500`}
                  >
                  About
                </NavLink>
              </li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium'>FOLLOW US</p>
          <div className='flex gap-x-6 pt-2'>
            <GitHubIcon className='hover:text-amber-950 hover:scale-110'/>
            <InstagramIcon className='hover:text-pink-700 hover:scale-110'/>
            <LinkedInIcon className='hover:text-blue-800 hover:scale-110'/>
            <TwitterIcon className='hover:text-blue-700 hover:scale-110'/>
          </div>
        </div>
      </div>
      <div className='text-gray-400 text-center pt-2 px-4 h-14 w-full bg-blue-950'>
        <p>&copy; 2025 faiyazalam.All Righs Reserved</p>
      </div>
    </div>
  )
}

export default Footer

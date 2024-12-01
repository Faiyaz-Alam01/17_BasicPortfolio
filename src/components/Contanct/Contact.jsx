import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Contact() {
  return (
    <div className='gap-x-4 justify-evenly sm:flex p-20  pt-40 w-full'>
      <div className=''>
        <p className='text-3xl font-bold'>Get in touch</p>
        <p className='text-xl text-gray-500'>Fill in the form to start a conversation</p>
        <div className='space-y-3 pt-3'>
          <div className='flex gap-x-2 text-lg '>
            <LocationOnIcon  style={{ fontSize: '25px' }} />
            <p>Ranchi, Jharkhand</p>
          </div>
          <div className='flex gap-x-2 text-lg '>
            <PhoneIcon  style={{ fontSize: '25px' }} />
            <p>+91 6666******</p>
          </div>
          <div className='flex gap-x-2 text-lg '>
            <EmailOutlinedIcon  style={{ fontSize: '25px' }} />
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-60 space-y-4 mt-8' >
          <input type="text" placeholder='Full Name' className='border border-gray-500 outline-none rounded-md px-2 py-2  '/>
          <input type="text" placeholder='Email ' className='border border-gray-500 outline-none rounded-md px-2 py-2  ' />
          <input type="text" placeholder='Phone No' className='border border-gray-500 outline-none rounded-md px-2 py-2  '/>
          <button className='border border-black rounded-md py-1 bg-blue-300 hover:bg-blue-950 hover:text-white font-medium w-28' >Submit</button>
      </div>
    </div>
  )
}

export default Contact

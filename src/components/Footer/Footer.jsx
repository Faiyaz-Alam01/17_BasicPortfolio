import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (

    <div className='h-10 w-full dark:bg-gray-900 dark:text-white'>
        <p className='pt-2 text-center'>&copy; {currentYear}  faiyazalam.All Righs Reserved</p>
    </div>
  )
}

export default Footer

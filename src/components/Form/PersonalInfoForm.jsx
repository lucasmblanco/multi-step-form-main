import React from 'react'

export default function FormPersonalInfo() {
  return (
    <fieldset className='border-0'>
      <legend className='text-2xl font-ubuntuBl pl-2 pr-2 pt-7'>Personal info</legend>
      <p className='text-base text-grey font-ubuntuRg pl-2 pr-4 '>
        Please provide your name, email, address, and phone number.
      </p>
      <p>
        <label className='text-xs font-ubuntuRg block pl-2 pr-2 pt-5'>Name</label>
        <input className='w-11/12 ml-2 pl-4 pr-4 pt-2 pb-2 rounded border-lightGrey border-solid border 
         placeholder:text-grey text-marineBlue focus:outline-none focus:border-marineBlue '
          type="text" id="fullname" name="fullname" placeholder='e.g. Stephen King' />
      </p>
      <p>
        <label className='text-xs font-ubuntuRg block pl-2 pr-2 pt-5'>Email Address</label>       
        <input className='w-11/12 mr-2 ml-2 pl-4 pr-4 pt-2 pb-2 rounded border-lightGrey border-solid border
         placeholder:text-grey text-marineBlue focus:outline-none focus:border-marineBlue'
          type="email" id="email" name="email" placeholder="e.g. stephenking@lorem.com" />     
      </p>
      <p>
        <label className='text-xs font-ubuntuRg block pl-2 pr-2 pt-3'>Phone Number</label>
        <input className='w-11/12 mr-2 ml-2 mb-7 pl-4 pr-4 pt-2 pb-2 rounded border-lightGrey border-solid border
         placeholder:text-grey text-marineBlue focus:outline-none focus:border-marineBlue'
          type="phone" id="phone" name="phone" placeholder="e.g. +1 234 567 890" />
      </p>
    </fieldset>
  )
}

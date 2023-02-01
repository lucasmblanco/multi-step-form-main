import React from 'react'

export default function FormContainer({children}) {
  return (
    <div className='grid text-marineBlue font-ubuntuMd relative 
     m-4 bg-white rounded-xl bottom-[5.5rem] shadow-xl'>
      {children}
    </div>
  )
}

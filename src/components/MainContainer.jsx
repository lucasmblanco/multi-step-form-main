import React from 'react'

export default function MainContainer({ children }) {

  return (
    <div className='relative bg-red-600  min-h-screen bg-lightBlue'>
      {children}     
    </div> 
  )
}

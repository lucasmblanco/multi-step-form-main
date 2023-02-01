import React from 'react'

export default function PageIndicator({pageNumber, pageDescription}) {
  return (
    <div className='pt-7 text-sm min-h-[172px] '>
      <p className='text-white border border-solid  rounded-full w-[2rem] h-[2rem] text-center font-ubuntuBl leading-8
      shadow-[0_0_1px_0px_white_inset,0_0_1px_0px_white]'>
        {pageNumber}
      </p>
    </div>
  )
}


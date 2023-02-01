import React from 'react'
import PageIndicator from './PageIndicator'

export default function SidebarContainer() {
  return (
    <div className='flex justify-center gap-4 w-full'>
     <PageIndicator pageNumber={1} />
     <PageIndicator pageNumber={2} />
     <PageIndicator pageNumber={3} />
     <PageIndicator pageNumber={4} />
      </div>
  )
}

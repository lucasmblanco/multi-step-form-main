import React from 'react';
import SidebarContainer from "./Sidebar/SidebarContainer"

export default function Sidebar() {
  return (
    <div className='bg-sidebar-mobile bg-auto phone:bg-cover '>
     <SidebarContainer />  
    </div> 
  )
}

import React from 'react';
import SidebarContainer from "./Sidebar/SidebarContainer"

export default function Sidebar({ currentPage }) {
  return (
    <div className="bg-sidebar-mobile bg-auto phone:bg-cover ">
      <SidebarContainer currentPage={currentPage} />
    </div>
  );
}

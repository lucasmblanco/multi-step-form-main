import React from 'react';
import SidebarContainer from "./Sidebar/SidebarContainer"

export default function Sidebar({ currentPage }) {
  return (
    <div className="bg-sidebar-mobile bg-cover desktop:h-[568px] desktop:self-center desktop:bg-sidebar-desktop">
      <SidebarContainer currentPage={currentPage} />
    </div>
  );
}

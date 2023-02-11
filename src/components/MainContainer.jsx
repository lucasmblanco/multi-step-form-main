import React from 'react'

export default function MainContainer({ children }) {

  return (
    <div className="relative flex min-h-screen flex-col bg-trueBg desktop:grid desktop:min-h-[572px] desktop:w-[60rem] desktop:grid-cols-[274px_2fr] desktop:flex-row desktop:rounded-2xl desktop:bg-white desktop:p-4 desktop:shadow-xl">
      {children}
    </div>
  );
}

import React from 'react'

export default function MainContainer({ children }) {

  return (
    <div className="relative flex min-h-screen flex-col bg-trueBg">
      {children}
    </div>
  );
}

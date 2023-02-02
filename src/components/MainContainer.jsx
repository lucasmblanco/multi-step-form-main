import React from 'react'

export default function MainContainer({ children }) {

  return (
    <div className="bg-red-600 relative flex min-h-screen flex-col bg-trueBg">
      {children}
    </div>
  );
}

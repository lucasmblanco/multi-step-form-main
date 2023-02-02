import React from 'react'

export default function FormContainer({children}) {
  return (
    <div
      className="relative top-[-5.5rem] m-4 
     min-w-min rounded-xl bg-white font-ubuntuMd text-marineBlue shadow-md shadow-silver"
    >
      {children}
    </div>
  );
}

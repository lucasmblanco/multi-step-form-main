import React from 'react'

export default function Button({ name, theme, action }) {
  const darkTheme =
    "bg-marineBlue text-white py-3 px-5 text-sm font-ubuntuMd rounded border-none cursor-pointer";
  const whiteTheme =
    "bg-transparent text-grey py-3 px-5 text-sm font-ubuntuBl rounded border-none cursor-pointer";
  return (
    <button className={theme === 'white' ? whiteTheme : darkTheme} onClick={() => console.log('button action')}>
          {name}
      </button>
  )
}

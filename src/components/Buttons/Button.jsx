import React from 'react'

export default function Button({ name, theme, action }) {
  const darkTheme = 'bg-marineBlue text-white p-3 text-sm font-ubuntuMd rounded border-none cursor-pointer';
  const whiteTheme = 'bg-transparent text-grey p-3 text-sm font-ubuntuBl rounded border-none cursor-pointer';
  return (
    <button className={theme === 'white' ? whiteTheme : darkTheme} onClick={() => console.log('button action')}>
          {name}
      </button>
  )
}
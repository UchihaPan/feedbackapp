import React from 'react'

function Header({text,bgColor,textColor}) {
    const headerstyles={
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header style={headerstyles}>
    <h2>{text}</h2>
    </header>
  )
}

export default Header
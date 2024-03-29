import React from 'react'

export default function Avater({url,className}) {
  return (
    <img loading='lazy' className= {`h-14 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className} `}
    src={url}
    alt='profile pic'
    />
  )
}

import React from 'react'

function HeaderOptions({Icon,title,Selected}) {
  return (
    <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer ${Selected && 'text-blue-500 border-blue-500' }` }>
        <Icon className='h-4'/>
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOptions
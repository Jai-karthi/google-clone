'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { XMarkIcon ,MicrophoneIcon,MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import Avater from './Avater';
import HeaderOption from './HeaderOption';


function Header({result}) {
    const router = useRouter()
    const searchinput = useRef(null)
    const search = e =>{
        e.preventDefault()
        const term = searchinput.current.value;
        if(!term) return
        router.push(`search?term=${term}`)
    }
  return (
    <div>
   <header className='sticky top-0 bg-white'>
    <div className='flex w-full p-6 items-center'>
    <Image
        src='https://logowik.com/content/uploads/images/google-logo-2020.jpg'
        height={40}
        width={120}
        className = 'cursor-pointer'
        onClick={() => router.push('/')}
        />
        <form className='border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 me-5 max-w-3xl items-center flex flex-grow'>
            <input ref={searchinput} type ='text' className='flex-grow w-full focus:outline-none'/>
            <XMarkIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3'
            onClick={()=>{searchinput.current.value = ""}}/>
            <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
            <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
            <button hidden type='submit' onClick={search}>search </button>
        </form>
        <Avater  url="https://i.natgeofe.com/n/622368f3-7699-4aa7-a937-dc7a88aa4614/3638.jpg"  className='ml-auto'/>
        </div>
        < HeaderOption/>

   </header>

   </div>
    
  )
}

export default Header


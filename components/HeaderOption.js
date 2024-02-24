import React from 'react'
import HeaderOptions from './HeaderOptions'
import { MagnifyingGlassIcon,PhotoIcon,VideoCameraIcon,NewspaperIcon,MapIcon,EllipsisVerticalIcon} from '@heroicons/react/24/outline'

function HeaderOption() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
        <div className='flex space-x-6'>

        <div className='flex space-x-4'><HeaderOptions Icon={MagnifyingGlassIcon} title="All" Selected/> </div>
        <div className='flex space-x-4'><HeaderOptions Icon={PhotoIcon} title="images"/> </div>
        <div className='flex space-x-4'><HeaderOptions Icon={VideoCameraIcon} title="video"/> </div>
        <div className='flex space-x-4'><HeaderOptions Icon={NewspaperIcon} title="news"/> </div>
        <div className='flex space-x-4'><HeaderOptions Icon={MapIcon} title="map"/> </div>
        <div className='flex space-x-4'><HeaderOptions Icon={EllipsisVerticalIcon} title="More"/> </div>
        </div>
        <div className='flex space-x-4'>
            <p className='link'>setting</p>
            <p className='link'> tools</p>
        </div>
    </div>
  )
}

export default HeaderOption
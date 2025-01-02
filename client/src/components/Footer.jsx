import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} width={150}/>
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        CopyRight Reserved
      </p>
      <div className='gap-2.5 flex'>
        <img src={assets.facebook_icon} width={35}/>
        <img src={assets.twitter_icon} width={35}/>
        <img src={assets.instagram_icon} width={35}/>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'


function Footer({name, iconUrl, profileUrl}) {
  return (
    <div className='flex' >
      <a href={profileUrl} alt="">
      <img className='w-10 rounded-full' src={iconUrl} alt={name} />
      </a>
    </div>
  )
}

export default Footer

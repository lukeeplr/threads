'use client'

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { useAuth } from '@clerk/nextjs'


export default function BottomBar() {
  
  const pathname = usePathname()
  const { userId } = useAuth()

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
      {sidebarLinks.map((link, index) => {
          const isActive = (
            (((pathname.includes(link.route)) && link.route.length > 1) 
            || pathname === link.route)
          )

          if (link.route === '/profile') link.route = `/profile/${userId}`

          return (
          <Link href={link.route} key={index} className={`bottombar_link ${isActive ? 'bg-primary-500' : 'hover:bg-primary-500/20'}`}>
            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
            <p className='text-subtle-medium text-light-1 max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
          </Link>
        )})}
      </div>
    </section>
  )
}

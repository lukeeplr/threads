'use client'

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter} from 'next/navigation'
import { SignOutButton, SignedIn, useAuth } from '@clerk/nextjs'
import { sidebarLinks } from '@/constants'

export default function LeftBar() {

    const router = useRouter()
    const pathname = usePathname()
    const { userId } = useAuth()

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link, index) => {
          const isActive = (
            (((pathname.includes(link.route)) && link.route.length > 1) 
            || pathname === link.route)
          )

          if (link.route === '/profile') link.route = `/profile/${userId}`

          return (
          <Link href={link.route} key={index} className={`leftsidebar_link transition-all duration-500 ${isActive ?'bg-primary-500' : 'hover:bg-primary-500/20'} `}>
            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
          </Link>
        )})}
      </div>

      <div className='mt-10 px-6 '>
        <SignedIn>
            <SignOutButton signOutCallback={() => router.push('/sign-in')}>
              <div className="flex cursor-pointer gap-4 p-4 hover:bg-primary-500/20 rounded-lg">
                <Image src='/assets/logout.svg' alt='botão de logout' width={24} height={24} />
                <p className="text-light-2 max-lg:hidden">Sair</p>
              </div>
            </SignOutButton>
          </SignedIn>
      </div>

    </section>
  )
}

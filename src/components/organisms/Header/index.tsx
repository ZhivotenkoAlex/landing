'use client'
import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import Button from '@/components/atoms/Button'

function Header() {
  const handler = () => alert('Click')
  return (
    <div className="flex justify-between">
      <Image src={'/logo.svg'} alt={'logo'} width={200} height={200}></Image>
      <div className="flex w-[50%] justify-between items-center">
        <HeaderItem title="About" />
        <HeaderItem title="Contacts" />
        <Button onClick={handler}>Contact us</Button>
      </div>
    </div>
  )
}

export default Header

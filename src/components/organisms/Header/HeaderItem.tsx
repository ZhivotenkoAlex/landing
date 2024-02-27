import Link from 'next/link'
import React from 'react'

type PropTypes = {
  title: string
  href?: string
}

function HeaderItem({ title, href = './' }: PropTypes) {
  return (
    <Link href={href} className="text-gray-600 ">
      {title}
    </Link>
  )
}

export default HeaderItem

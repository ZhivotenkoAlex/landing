import MainPage from '@/components/organisms/Main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Olymp Limited',
  description: 'Your Trusted Building Company',
  openGraph: {
    images: '/logo.svg',
  },
  twitter: {
    images: '/logo.svg',
  },
}

export default function Home() {
  return <MainPage />
}

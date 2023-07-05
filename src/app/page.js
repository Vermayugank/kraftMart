import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'


export const metadata = {
  title: 'Kraftmart',
  description: 'Made By Yugank & Avinash',
}

export default function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    </>
    
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import logo from '../public/logo.svg'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overflow-hidden w-[100%] h-[100%] bg-primary font-Raleway'>
      <Head> 
        <title>Sip&Support</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Background />
      <div className='flex flex-col space-y-10'>
        <Navbar />
        <Banner />
        <div className='align-left md:text-3xl text-xl font-bold text-white lg:mx-60 md:mx-20 mx-10 md:mt-20 mt-12 mb-0 '>CREATORS</div>
        <div className='flex md:gap-10 gap-6 lg:mx-60 md:mx-20 ml-10 mt-0 overflow-auto scrollbar-width-none'>
        <Card 
        creator="Harry Styles" 
        description="s an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer." 
        followers={1000} 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxe-wsaNQ49_z93ApsPfyKgD1GYBExdCubOOZGX2Q7pm0SNAyPeqIQQU20R4eiwrAmfw&usqp=CAU"
      />
      <Card 
        creator="Harry Styles" 
        description="s an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer." 
        followers={1000} 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxe-wsaNQ49_z93ApsPfyKgD1GYBExdCubOOZGX2Q7pm0SNAyPeqIQQU20R4eiwrAmfw&usqp=CAU"
      />
      <Card 
        creator="Harry Styles" 
        description="s an Indian YouTuber, comedian, scriptwriter, Actor, performer and producer." 
        followers={1000} 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxe-wsaNQ49_z93ApsPfyKgD1GYBExdCubOOZGX2Q7pm0SNAyPeqIQQU20R4eiwrAmfw&usqp=CAU"
      />
        </div>
      </div>
      
      
      
     
    </div>
  )
}

import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Card from '@/components/Card';


export default function ExploreCreators() {
  return (
    <div className="overflow-hidden w-[100%] h-[100%] bg-primary font-Raleway">
      <Head>
        <title>Sip&Support: Explore Creators</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <div className="flex flex-col md:space-y-10 space-y-5 justify-center">
        <Navbar />
        <div className='flex flex-col md:space-y-20 space-y-5 items-center text-center '>
          <div className='z-20 lg:text-5xl md:text-4xl text-2xl bg-clip-text text-center text-transparent bg-gradient-to-r from-[#635AD9] to-[#88F4FF] font-bold'>Be part of an Exclusive Community</div>
        <div className='flex flex-row space-x-4 bg-secondary md:h-12 h-10 z-20 px-4 items-center rounded-lg'>
          <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-6 w-6 fa-heart-o justify-center items-center"
            />
          <input
              type="text"
              placeholder="Search for Creators"
              className=" bg-secondary border-none outline-none md:text-xl text-lg"
            ></input>
        </div>
        <div className='flex md:gap-10 gap-6 lg:mx-60 md:mx-20 ml-10 mt-0 overflow-auto scrollbar-width-none'>
          <Card
            creator="Harry Styles"
            description="is a british singer, song-writer and actor."
            followers={3}
            image="https://media.pitchfork.com/photos/604ea63a02674855a6d5bbbb/16:9/w_4432,h_2493,c_limit/Harry-Styles.jpg"
          />
          <Card
            creator="Rashmika Mandanna"
            description="is an Indian actress who mostly works in Telugu cinema."
            followers={4}
            image="https://static.toiimg.com/photo/msid-95062045/95062045.jpg"
          />
          <Card
            creator="Taneesha Mirwani"
            description="is an Indian content creator and social media influencer."
            followers={2}
            image="https://wp.missmalini.com/wp-content/uploads/2021/02/BeFunky-collage-16-11.jpg"
          />
        </div>
        </div>
        
      </div>

      
      
    </div>
  );
}

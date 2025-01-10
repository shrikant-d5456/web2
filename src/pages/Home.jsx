import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'

const Home = () => {

    const slideImages = [
            {
              link: "https://www.w3schools.com/html/mov_bbb.mp4",
              title: "Sample Video 1",
              description: "This is a sample video from w3schools.",
              buttonText1: "Watch Now",
              buttonText2: "Learn More"
            },
            {
              link: "https://www.w3schools.com/html/mov_bbb.mp4",
              title: "Sample Video 2",
              description: "Another sample video from w3schools.",
              buttonText1: "Watch Now",
              buttonText2: "Learn More"
            }
      ];

  return (
    <div className=' relative'>
      <Header/>
      <div className=' absolute top-[10%] left-4 z-20'>
        <p className=' font-extralight text-4xl text-white'>Company Name</p>
      </div>
      <Slider slideImages={slideImages}/>
    </div>
  )
}

export default Home
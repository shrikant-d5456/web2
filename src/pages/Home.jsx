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
      <Slider slideImages={slideImages}/>
    </div>
  )
}

export default Home
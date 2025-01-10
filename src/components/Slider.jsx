import React, { useState, useRef, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Slider = ({ slideImages }) => {
  const [counter, setCounter] = useState(0);
  const slidesRef = useRef(null);

  const goPrev = () => {
    setCounter(prevCounter => (prevCounter === 0 ? slideImages.length - 1 : prevCounter - 1));
  };

  const goNext = () => {
    setCounter(prevCounter => (prevCounter === slideImages.length - 1 ? 0 : prevCounter + 1));
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${counter * 100}%)`;
    }
  }, [counter]);

  return (
    <div className='relative w-full h-screen justify-center items-center overflow-hidden m-auto shadow-xl'>
      <div className='flex w-full h-screen bg-slate-800 transition-transform duration-500 ease-in-out' ref={slidesRef}>
        {slideImages.map((ele, index) => (
          <div key={index} className='w-full h-full flex-shrink-0 relative text-left  '>
            <video src={ele.link} className='object-cover brightness-50 w-full h-full' controls={false} autoPlay muted loop/>

            <div className='sm:w-1/2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-white text-center'>
              <p className='sm:text-8xl text-6xl font-bold uppercase text-left '>{ele.title}</p>
              <hr className='my-4 ml-1' />
              <p className='text-left ml-1'>{ele.description}</p>

              <div className='flex gap-4 mt-4 justify-start text-sm'>
                <button className='px-6 py-3 bg-white text-black shadow-md'>
                  {ele.buttonText1}
                </button>
                <button className='px-6 py-3 bg-white text-black shadow-md'>
                  {ele.buttonText2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute top-[80%] right-8 gap-2 flex justify-center items-center text-white'>
        <button className='bg-transparent  text-4xl m-0 hover:scale-105 hover:-translate-x-1 transition-transform ease-linear hover:opacity-100 opacity-90 ' onClick={goPrev}
        ><BsArrowLeftCircle />
        </button>
        <button className='bg-transparent text-4xl m-0 hover:scale-105 hover:translate-x-1 transition-transform ease-linear hover:opacity-100 opacity-90' onClick={goNext}
        ><BsArrowRightCircle />
        </button>
      </div>

      <div className='absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center gap-2 mt-2'>
        {slideImages.map((ele, ind) => (
          <button
            key={ind}
            onClick={() => setCounter(ind)}
            className={`bg-white rounded-full p-2 shadow-md shadow-black m-0 ${counter === ind ? 'opacity-100' : 'opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;







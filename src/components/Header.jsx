import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsBoxArrowInUpRight, BsEnvelopeCheck, BsMoonFill, BsSunFill, BsTelephoneOutboundFill } from 'react-icons/bs';
import Modal from './Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
    console.log(modal);
  }
  const logo = "https://a2developers.org/images/logo1.png";

  return (
    <>
      {modal && <Modal setModal={setModal} modal={modal} />}
      <header className=" fixed z-20 w-full   text-white">

        <div className=" w-full  flex justify-between items-center border-b-[1px] px-4 py-3">
          <div className="flex bg-white">
            <button
              className=' relative w-fit button-anime flex items-center gap-2 bg-black text-white font-semibold px-4 py-1 '
              onClick={openModal}
            >Book a demo <BsBoxArrowInUpRight />
            </button>
          </div>

          <div className=' flex justify-center items-center gap-6'>
            <a href="#home" className='hover:text-sky-400 flex items-center gap-2' title='call:+91 999999999' ><BsTelephoneOutboundFill /> <span className='sm:block hidden'>+91999999999</span></a>
            <a href="#about" className='hover:text-sky-400 flex items-center gap-2' title='connect:contactus@developer.org' ><BsEnvelopeCheck /><span className='sm:block hidden'>contactus@developer.org</span></a>
          </div>
        </div>

        {/* ========================================================================================= */}

        <div className="container mx-auto flex justify-between items-center my-2 px-4 ">
          <div className="flex-shrink-0 mt-2">
            <div className='flex justify-center items-center gap-2'>
              <img src={logo} alt="logo" className=' w-10' />
              <p className=' text-4xl  font-bold'>A2 Developers</p>
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex justify-center items-center space-x-6 tracking-widest">
            <a href="#home" className='hover:text-sky-400 font-bold text-xl' >Home</a>
            <a href="#about" className='hover:text-sky-400 font-bold text-xl' >About</a>
            <a href="#service" className='hover:text-sky-400 font-bold text-xl' >Services</a>
            <a href="#contact" className='hover:text-sky-400 font-bold text-xl' >Contact</a>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Items */}
        {isOpen && (
          <div
            className={`md:hidden text-sm  w-full text-center sm:px-2 space-y-1 py-2 uppercase tracking-widest bg-[#fff1] backdrop-filter backdrop-blur-lg`}
          >
            <>
              <a href="#home" className=" block header-text ">Home</a>
              <a href="#about" className=" block header-text">About</a>
              <a href="#service" className=" block header-text">Services</a>
              <a href="#contact" className=" block header-text">Contact</a>
            </>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

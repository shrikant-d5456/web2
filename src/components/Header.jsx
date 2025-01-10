import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsBoxArrowInUpRight, BsEnvelopeCheck, BsMoonFill, BsSunFill, BsTelephoneOutboundFill } from 'react-icons/bs';
import Modal from './Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [modal,setModal] = useState(false);

  const openModal = ()=>{
    setModal(!modal);
    console.log(modal);
  }

  return (
    <>
    {modal && <Modal setModal={setModal} modal={modal}/>}
    <header className=" fixed z-20 w-full py-3 px-8 shadow-xl bg-white">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex-shrink-0 bg-white">
          <button 
          className=' relative w-fit button-anime flex items-center gap-2 bg-black text-white font-semibold px-4 py-1 '
          onClick={openModal}
          >Book a demo <BsBoxArrowInUpRight/>
          </button>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex justify-center items-center space-x-6 tracking-widest">
          <a href="#home" className='hover:text-sky-400' >Home</a>
          <a href="#about" className='hover:text-sky-400' >About</a>
          <a href="#service" className='hover:text-sky-400' >Services</a>
          <a href="#contact" className='hover:text-sky-400' >Contact</a>
          <a href="#home" className='hover:text-sky-400' title='call:+91 999999999' ><BsTelephoneOutboundFill/></a>
          <a href="#about" className='hover:text-sky-400' title='connect:contactus@developer.org' ><BsEnvelopeCheck/></a>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
        <a href="#home" className="header-text flex gap-2 items-center"  title='call:+91 999999999' ><BsTelephoneOutboundFill/></a>
        <a href="#about" className="header-text lowercase flex gap-2 items-center" title='connect:contactus@developer.org' ><BsEnvelopeCheck/></a>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div
          className={`md:hidden text-sm  w-full text-left sm:px-2 pt-2 pb-3 space-y-1 uppercase tracking-widest`}
        >
          <>
            <a href="#home" className=" block header-text">Home</a>
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

import React from 'react'
import image from '../../../public/assets/avataaars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="bg-[#1ABC9C] text-white text-center flex flex-col items-center justify-center h-[90vh]">
      <img src={image} className="w-60 mb-5" alt="" />
      <h1 className="uppercase text-4xl font-bold">start Framework</h1>
      <div className="mt-5 relative flex items-center">
        <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-white before:mr-2"></span>
        <FontAwesomeIcon icon={faStar} className="text-2xl" />
        <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-white after:ml-2"></span>
      </div>
      <p className='mt-5'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

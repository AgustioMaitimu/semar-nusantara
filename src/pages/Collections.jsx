import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home.svg';
import back from '../assets/back.svg';

export default function Collections() {
  return (
    <div className="flex h-screen w-screen flex-col bg-black md:flex-row md:items-center md:justify-center">
      <div className="bg-maleBatik flex h-1/2 w-screen flex-col items-center justify-center bg-cover bg-top font-fancy text-4xl text-white opacity-85 transition-all duration-700 hover:h-[60vh] hover:cursor-pointer hover:opacity-100 md:h-screen md:w-1/2 md:text-7xl md:hover:h-screen md:hover:w-[80vw]">
        <h1
          className="rounded-2xl px-4 pt-2 text-center"
          // style={{ backgroundColor: 'rgba(173, 125, 77, 0.7)' }}
        >
          Male Collection
        </h1>
      </div>
      <div className="bg-femaleBatik flex h-1/2 w-screen flex-col items-center justify-center bg-cover bg-top font-fancy text-4xl text-white opacity-85 transition-all duration-700 hover:h-[60vh] hover:cursor-pointer hover:opacity-100 md:h-screen md:w-1/2 md:text-7xl md:hover:h-screen md:hover:w-[80vw]">
        <h1
          className="rounded-2xl px-4 pt-2 text-center"
          // style={{ backgroundColor: 'rgba(173, 125, 77, 0.7)' }}
        >
          Female Collection
        </h1>
      </div>
      <Link
        to="/semar-nusantara/"
        className="fixed bottom-10 right-0 flex cursor-pointer rounded-l bg-white p-2 shadow-xl transition-all duration-300 hover:pr-5"
      >
        <img src={back} className="w-5 md:w-10" alt="" />
      </Link>
    </div>
  );
}

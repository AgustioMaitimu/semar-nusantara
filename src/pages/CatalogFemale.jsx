import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/back.svg';

export default function CatalogFemale() {
  return (
    <div className="flex flex-wrap bg-black font-upright text-4xl text-white">
      <div className="flex h-screen w-screen snap-center flex-col items-center bg-outer bg-cover bg-center transition-all duration-500 md:w-1/2 lg:opacity-80 lg:hover:opacity-100">
        <div
          className="mt-[45vh] w-full pb-3 text-center"
          style={{ backgroundColor: 'rgba(173, 125, 77, 0.9)' }}
        >
          Outer
        </div>
        <Link
          className="mt-[30vh] rounded-md px-6 pb-2 text-2xl"
          to="/semar-nusantara/appointment/"
          style={{ backgroundColor: 'rgba(38, 40, 41, 0.9)' }}
        >
          Make Appointment
        </Link>
      </div>
      <div className="flex h-screen w-screen snap-center flex-col items-center bg-dress bg-cover bg-center transition-all duration-500 md:w-1/2 lg:opacity-80 lg:hover:opacity-100">
        <div
          className="mt-[45vh] w-full pb-3 text-center"
          style={{ backgroundColor: 'rgba(173, 125, 77, 0.9)' }}
        >
          Dresses
        </div>
        <Link
          className="mt-[30vh] rounded-md px-6 pb-2 text-2xl"
          to="/semar-nusantara/appointment/"
          style={{ backgroundColor: 'rgba(38, 40, 41, 0.9)' }}
        >
          Make Appointment
        </Link>
      </div>
      <div className="flex h-screen w-screen snap-center flex-col items-center bg-blouse bg-cover bg-center transition-all duration-500 md:w-1/2 lg:opacity-80 lg:hover:opacity-100">
        <div
          className="mt-[45vh] w-full pb-3 text-center"
          style={{ backgroundColor: 'rgba(173, 125, 77, 0.9)' }}
        >
          Blouses
        </div>
        <Link
          className="mt-[30vh] rounded-md px-6 pb-2 text-2xl"
          to="/semar-nusantara/appointment/"
          style={{ backgroundColor: 'rgba(38, 40, 41, 0.9)' }}
        >
          Make Appointment
        </Link>
      </div>
      <div className="flex h-screen w-screen snap-center flex-col items-center bg-robe bg-cover bg-center transition-all duration-500 md:w-1/2 lg:opacity-80 lg:hover:opacity-100">
        <div
          className="mt-[45vh] w-full pb-3 text-center"
          style={{ backgroundColor: 'rgba(173, 125, 77, 0.9)' }}
        >
          Robes
        </div>
        <Link
          className="mt-[30vh] rounded-md px-6 pb-2 text-2xl"
          to="/semar-nusantara/appointment/"
          style={{ backgroundColor: 'rgba(38, 40, 41, 0.9)' }}
        >
          Make Appointment
        </Link>
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

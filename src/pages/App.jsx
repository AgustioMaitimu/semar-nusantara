import React from 'react';
import storeImage from '../assets/store.jpg';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#F9F4F1]">
      <div className="h-[25vh] w-full bg-headerImage bg-cover bg-center md:h-[30vh]"></div>
      <div className="card-gradient -mt-[12vh] flex h-[24vh] w-[85vw] flex-col items-center justify-evenly rounded bg-[#AD7D4D] p-4 md:-mt-[10vh] md:h-[30vh] md:p-10">
        <h1 className="text-center font-fancy text-4xl font-medium text-[#F0E8DB] md:text-7xl lg:text-8xl">
          Semar Nusantara Batik
        </h1>
        <h3 className="text-center font-upright text-[#F0E8DB] md:text-xl">
          Unveiling the Legacy, One Exquisite Thread at a Time.
        </h3>
      </div>
      <div className="mt-24 flex flex-col items-center lg:mt-36">
        <h1 className="font-upright text-xl font-bold text-[#574f4c] md:text-4xl xl:hidden xl:text-4xl">
          Luxury and Heritage
        </h1>
        <div className="mt-6 flex flex-col items-center md:mt-12 xl:w-screen xl:flex-row xl:justify-center xl:gap-20">
          <img
            src={storeImage}
            className="store-shadow w-80 rounded-xl md:w-[35rem] xl:w-[40rem]"
            alt=""
          />
          <div className="mt-6 flex flex-col items-center md:mt-12 xl:mt-0">
            <h1 className="hidden font-upright text-3xl text-[#574f4c] xl:inline">
              Luxury and Heritage
            </h1>
            <h4 className="w-72 text-center font-classic text-[#574f4c] md:w-[35rem] md:text-2xl xl:mt-6 xl:w-80 xl:text-xl">
              <span className="hidden xl:inline">
                Where timeless tradition meets modern elegance. Explore our
                exquisite collections of Batik Semar Nusantara.{' '}
              </span>
              Each piece a captivating symphony of hand-crafted artistry and
              refined design.
            </h4>
            <Link
              className="mt-4 font-classic text-[#AD7D4D] underline-offset-4 hover:underline md:mt-6 md:text-xl xl:text-xl"
              to="/semar-nusantara/collections/"
            >
              Our Collections →
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-20 mt-28 flex h-[25rem] w-screen items-center justify-center bg-storeImage2 bg-cover bg-center md:mt-44 xl:h-[50vh]">
        <div
          className="flex h-[80%] w-[80%] flex-col items-center justify-evenly bg-yellow-600 px-10 py-4 font-upright text-[#e8dda8] lg:flex-row lg:justify-between"
          style={{ backgroundColor: 'rgba(173, 125, 77, 0.96)' }}
        >
          <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
            <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
              Schedule Your Personalized Fitting
            </h1>
            <h3 className="text-center text-xs md:text-lg lg:w-96 lg:text-start">
              Our exquisite collections are brought to life in-store. Schedule
              your personalized fitting to discover the perfect fit and explore
              our captivating designs with the guidance of our expert staff.
            </h3>
          </div>
          <Link
            to="/semar-nusantara/appointment/"
            className="rounded-md border-[1px] border-[#e8dda8] p-1 px-2 pb-[0.6rem] text-sm font-bold transition-all duration-500 hover:bg-[#E8C293] md:text-xl lg:mx-auto lg:text-2xl xl:border-2 xl:p-2 xl:px-3 xl:pb-[0.9rem]"
          >
            Make Appointment →
          </Link>
        </div>
      </div>
      <div className="h-[10vh] w-screen bg-headerImage bg-cover bg-center"></div>
    </div>
  );
}

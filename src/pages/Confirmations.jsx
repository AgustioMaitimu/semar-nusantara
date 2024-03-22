import React from 'react';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();

  const { lname } = location.state.formData;

  return (
    <div className="flex h-screen w-screen flex-col bg-[#F9F4F1] px-10 text-center text-[#502E1D]">
      <h1 className="mt-[40vh] font-upright text-3xl">
        Thank You, Mr./Ms. <span className="font-fancy text-5xl">{lname}</span>
      </h1>
      <h3 className="font-upright text-xl">
        We will be in touch to schedule your appointment.
      </h3>
      <Link
        to="/semar-nusantara/"
        className="fixed bottom-10 right-0 flex cursor-pointer rounded-l bg-white p-2 shadow-xl transition-all duration-300 hover:pr-5"
      >
        <img src={back} className="w-5 md:w-10" alt="" />
      </Link>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/back.svg';

export default function Appointment() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-evenly gap-4 bg-[#F9F4F1]">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-upright text-3xl text-[#502e1d] lg:text-5xl">
          Make Appointment
        </h1>
        <h3 className="px-4 text-center font-upright text-[#502e1d] lg:text-lg">
          Provide your details and our staff will contact you to discuss your
          needs and schedule a convenient appointment.
        </h3>
      </div>
      <div className="flex w-screen flex-col items-center justify-center md:flex-row">
        <div className="h-24 w-[80%] rounded-t-lg bg-storeImage bg-cover bg-center md:h-full md:w-[25%] md:rounded-lg"></div>
        <div className="flex w-[80%] flex-col justify-center rounded-b-lg bg-white p-4 md:w-[65%] md:rounded-b-none md:rounded-r-lg lg:h-96 lg:w-[45%]">
          <div className="flex flex-col items-center justify-evenly font-upright text-[#E8C293] lg:h-52">
            <div className="flex w-full flex-col justify-evenly lg:flex-row">
              <div className="flex flex-col">
                <label className="lg:text-2xl" htmlFor="fname">
                  First Name
                </label>
                <input
                  className="mt-1 border-b-[1px] border-[#E8C293] bg-transparent text-black lg:w-52"
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  placeholder="ex. Ryan"
                />
              </div>
              <div className="mt-4 flex flex-col lg:mt-0">
                <label className="lg:text-2xl" htmlFor="lname">
                  Last Name
                </label>
                <input
                  className="mt-1 border-b-[1px] border-[#E8C293] bg-transparent text-black lg:w-52"
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                  placeholder="ex. Reynolds"
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-evenly lg:flex-row">
              <div className="mt-4 flex flex-col lg:mt-0">
                <label className="lg:text-2xl" htmlFor="email">
                  Email
                </label>
                <input
                  className="mt-1 border-b-[1px] border-[#E8C293] bg-transparent text-black lg:w-52"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ex. ryanreynolds@gmail.com"
                />
              </div>
              <div className="mt-4 flex flex-col lg:mt-0">
                <label className="lg:text-2xl" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="mt-1 border-b-[1px] border-[#E8C293] bg-transparent text-black lg:w-52"
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="0811 1111 1111"
                />
              </div>
            </div>
          </div>
          <Link
            to="/semar-nusantara/confirmation"
            state={{ formData }}
            className="mb-2 mt-5 self-center font-upright text-[#E8C293] underline-offset-2 hover:underline lg:mb-6 lg:text-2xl"
          >
            Request →
          </Link>
        </div>
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

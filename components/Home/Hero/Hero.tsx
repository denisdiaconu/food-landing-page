import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 mb-6 font-extrabold leading-[2.5rem] md:leading-[4rem]">
            Your favorite food, <span className="text-pink-600">delivered</span>{' '}
            to your home.
          </h1>
          <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base font-medium">
            From meals to groceries—delivery and pickup made easy.
          </p>
          <div className="w-full mt-8 mb-8 max-w-md">
            <div className="flex items-center h-14 overflow-hidden bg-gray-100 shadow-md">
              <div className="px-4 text-gray-500">
                <GrMapLocation className="w-5 h-5 text-black" />
              </div>
              <input
                type="text"
                placeholder="Enter your address"
                className="bg-transparent text-black flex-1 px-2 text-sm outline-none h-full"
              />
              <button className="bg-gray-900 text-white px-4 h-full hover:bg-gray-800 flex items-center justify-center cursor-pointer">
                <FaLocationArrow className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div>f</div>
      </div>
    </div>
  );
};

export default Hero;

import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { MdDeliveryDining } from 'react-icons/md';

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-950 rounded-full flex flex-col items-center justify-center">
            <MdDeliveryDining className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-black font-bold text-xl hidden sm:block md:text-2xl">
            Foodie
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-black font-bold hover:text-green-700 transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-950 text-white font-bold px-8 py-2.5 rounded-lg hover:bg-black transition-all duration-300 cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

'use client';
import ThemeToggler from '@/components/Helper/ThemeToggler';
import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { MdDeliveryDining } from 'react-icons/md';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? 'bg-white dark:bg-gray-900 shadow-md' : 'fixed'
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex flex-col items-center justify-center">
            <MdDeliveryDining className="w-6 h-6 text-white dark:text-black" />
          </div>
          <h1 className="text-black dark:text-white font-bold text-xl hidden sm:block md:text-2xl">
            Foodie
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-black dark:text-white font-bold hover:text-green-700 dark:hover:text-green-400 transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-950 dark:bg-white text-white dark:text-black font-bold px-8 py-2.5 rounded-lg hover:bg-black dark:hover:bg-gray-200 transition-all duration-300 cursor-pointer">
            Join Now
          </button>
          <ThemeToggler />
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-blue-950 dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

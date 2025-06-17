import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div>
      <div
        className={`bg-black ${navOpen} opacity-70 fixed inset-0 transform transition-all duration-500 z-[1002] w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} bg-blue-950 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] transform transition-all duration-500 delay-300 space-y-6 z-[1050]`}
      >
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] pb-1 border-white">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;

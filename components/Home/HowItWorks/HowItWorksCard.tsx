import Image from 'next/image';
import React from 'react';

type Props = {
  num: string;
  image: string;
  title: string;
  description: string;
};

const HowItWorksCard = ({ num, image, title, description }: Props) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          alt="Image"
          width={250}
          height={250}
          className="object-contain mx-auto"
        />
        <div className="w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full">
          {num}
        </div>
        <h1 className="mt-6 text-lg sm:text-xl font-bold text-center">
          {title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center sm:w-[80%] mx-auto mt-3 font-medium">
          {description}
        </p>
        <p className="mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 cursor-pointer text-center">
          Start Earning &rarr;
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;

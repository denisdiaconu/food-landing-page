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
      </div>
    </div>
  );
};

export default HowItWorksCard;

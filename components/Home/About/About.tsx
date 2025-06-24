import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Image src="/images/a.png" alt="image" width={800} height={800} />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            Lightning-fast delivery — almost faster than Superman!
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut unde
            vitae, provident placeat dolorum dicta
          </p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

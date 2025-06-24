import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Image src="/images/a.png" alt="image" width={800} height={800} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;

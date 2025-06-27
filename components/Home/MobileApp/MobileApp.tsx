import Image from 'next/image';
import React from 'react';

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <Image
          src="/images/app.png"
          alt="app"
          width={800}
          height={800}
          className="object-cover"
        />
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
            Connect with our iOS & Android apps. Download on the App Store &
            Google Play.
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Pick one of our stock themes, or create your own with the most
            advanced theme editor available in any online survey tool. We're not
            just about completing projects—we're about finding real solutions
            through our website and mobile apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;

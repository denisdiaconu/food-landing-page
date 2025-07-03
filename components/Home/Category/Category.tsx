import React from 'react';

const categories = [
  { name: 'Italian' },
  { name: 'Chinese' },
  { name: 'Indian' },
  { name: 'Mexican' },
  { name: 'Japanese' },
  { name: 'Thai' },
  { name: 'American' },
  { name: 'French' },
  { name: 'Mediterranean' },
  { name: 'Vegan' },
  { name: 'Seafood' },
  { name: 'Steakhouse' },
  { name: 'Fast Food' },
  { name: 'BBQ' },
  { name: 'Bakery' },
  { name: 'Cafe' },
];

const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Popular Food Categories
      </h1>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => {
            return (
              <span
                data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={index * 100}
                key={index}
                className="px-6 py-3 rounded-full cursor-pointer bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                {category.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;

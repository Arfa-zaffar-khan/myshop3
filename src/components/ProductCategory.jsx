import React, { useState } from 'react';

export default function ProductCategory({ categories,handleCategoryChange}) {
  const [grow, setGrow] = useState(false);

  return (
    <div className={`mx-auto mt-4 w-full relative max-w-7xl flex flex-wrap  ${grow ? null : "overflow-hidden h-[90px]"}`}>
        <button
          onClick={() => handleCategoryChange("")}
          className="w-[100px] m-2 mb-6 rounded-xl bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          All
        </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryChange(category)}
          className="w-[100px] m-2 mb-6 rounded-xl bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {category}
        </button>
      ))}
      {!grow && (
        <button className='absolute bottom-0 right-0 font-medium' onClick={() => setGrow(true)}>more</button>
      )}
      {grow && (
        <button className='absolute bottom-0 right-0 font-medium' onClick={() => setGrow(false)}>less</button>
      )}
    </div>
  );
}

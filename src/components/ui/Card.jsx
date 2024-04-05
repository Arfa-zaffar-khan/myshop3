import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Card({ product }) {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    thumbnail,
    brand,
  } = product;

  return (
    <div className="rounded-md border">
      <img
        src={thumbnail}
        alt={title}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #{brand}
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-xl font-semibold">Price : </span>
          <span className="block text-xl">{price}</span>
          <sub className="text-red-500">{discountPercentage + "% off"}</sub>
        </div>

        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Ratings : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium text-yellow-500">
            {rating}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function SkeletonCard() {
  return (
    <div className="rounded-md border animate-pulse">
      <div className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] bg-gray-300"></div>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold bg-gray-300 h-6 w-3/4 mb-2"></h1>
        <p className="mt-3 text-sm text-gray-600 bg-gray-300 h-4"></p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900 h-4"></span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-xl font-semibold bg-gray-300 h-6 w-1/4"></span>
          <span className="block text-xl bg-gray-300 h-6 w-1/4"></span>
          <sub className="text-red-500 bg-gray-300 h-4 w-16"></sub>
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold bg-gray-300 h-4 w-1/4"></span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium text-yellow-500 h-4 w-6"></span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-gray-400 px-2 py-1.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        >
          Loading...
        </button>
      </div>
    </div>
  );
}

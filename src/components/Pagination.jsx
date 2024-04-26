import React from "react";

export default function Pagination({ totalpage, paginate, currentpage }) {
  return (
    <div className="flex items-center justify-center mb-5">
      <button
        onClick={() => paginate(currentpage - 1)}
        className={`mx-1  text-sm font-semibold text-gray-900 ${currentpage<=1?"invisible":"visible"}`}
      >
        &larr; Previous
      </button>

      {Array.from({ length: totalpage }).map((_, i) => {
        return (
          <button
         _   key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold ${
              i + 1 === currentpage
                ? "text-white bg-black"
                : "text-gray-900 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        );
      })}

      <button
        onClick={() => paginate(currentpage + 1)}
        className={`mx-2 text-sm font-semibold text-gray-900 ${currentpage===totalpage?"invisible":"visible"}`}
      >
        Next &rarr;
      </button>
    </div>
  );
}

import React from 'react'

export default function Search() {
  return (
    <div className="flex grow justify-end mx-3">
    <input
      className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      type="text"
      placeholder="Serach"
    ></input>
  </div>
  )
}

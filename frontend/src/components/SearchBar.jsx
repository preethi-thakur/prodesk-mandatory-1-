import React from 'react'

const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-purple-200 bg-white focus:border-purple-400 focus-ring transition-all duration-200 shadow-sm"
        aria-label="Search"
      />
      <svg
        className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default SearchBar

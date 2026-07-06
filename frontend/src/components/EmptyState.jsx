import React from 'react'

const EmptyState = ({ message = 'No data found' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center animate-slide-up" role="status">
      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-6 shadow-lg">
        <svg
          className="w-16 h-16 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <p className="text-xl font-semibold text-gray-600 mb-2">{message}</p>
      <p className="text-gray-400">Get started by adding your first cupcake</p>
    </div>
  )
}

export default EmptyState

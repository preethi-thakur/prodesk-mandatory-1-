import React from 'react'

const ErrorState = ({ message = 'An error occurred', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center animate-slide-up" role="alert">
      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center mb-6 shadow-lg">
        <svg
          className="w-16 h-16 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <p className="text-xl font-semibold text-gray-600 mb-2">{message}</p>
      <p className="text-gray-400 mb-6">Something went wrong. Please try again.</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl font-semibold shadow-md hover:shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105 active:scale-95 focus-ring"
          aria-label="Retry"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorState

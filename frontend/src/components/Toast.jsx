import React from 'react'

const Toast = ({ toast, onRemove }) => {
  const typeStyles = {
    success: 'bg-gradient-to-r from-green-400 to-emerald-400 text-white',
    error: 'bg-gradient-to-r from-red-400 to-pink-400 text-white',
    info: 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white',
  }

  const icons = {
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  const style = typeStyles[toast.type] || typeStyles.info
  const icon = icons[toast.type] || icons.info

  return (
    <div
      className={`${style} px-6 py-4 rounded-2xl shadow-lg mb-4 flex items-center gap-4 min-w-[320px] max-w-md animate-slide-up transform transition-all duration-300 hover:scale-105`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="flex-1 font-medium text-sm">{toast.message}</span>
      <button
        onClick={() => onRemove(toast.id)}
        className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors focus-ring"
        aria-label="Close notification"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default Toast

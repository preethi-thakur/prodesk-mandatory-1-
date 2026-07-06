import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false, 
  loading = false,
  className = '', 
  ariaLabel,
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-2xl font-semibold transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md hover:shadow-lg hover:from-purple-500 hover:to-pink-500',
    secondary: 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-md hover:shadow-lg hover:from-blue-500 hover:to-cyan-500',
    outline: 'bg-white border-2 border-purple-300 text-purple-600 hover:bg-purple-50 shadow-sm',
    danger: 'bg-gradient-to-r from-red-400 to-pink-400 text-white shadow-md hover:shadow-lg hover:from-red-500 hover:to-pink-500',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-50',
    success: 'bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-md hover:shadow-lg hover:from-green-500 hover:to-emerald-500',
  }

  const variantStyles = variants[variant] || variants.primary

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          {children}
        </span>
      ) : children}
    </button>
  )
}

export default Button

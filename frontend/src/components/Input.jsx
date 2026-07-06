import React, { useState } from 'react'

const Input = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder = '', 
  error = '', 
  disabled = false, 
  required = false,
  className = '',
  id,
  name,
  ...props 
}) => {
  const inputId = id || name
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value !== '' && value !== undefined && value !== null

  return (
    <div className="relative">
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-6 py-4 rounded-2xl border-2 bg-white transition-all duration-200 focus-ring ${
          error 
            ? 'border-red-300 focus:border-red-400' 
            : 'border-purple-200 focus:border-purple-400'
        } ${disabled ? 'bg-gray-100 opacity-60' : ''} ${className} pt-6`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={`absolute left-6 transition-all duration-200 pointer-events-none ${
          isFocused || hasValue
            ? 'top-2 text-xs text-purple-500 font-medium'
            : 'top-4 text-gray-500 text-base'
        }`}
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {error && (
        <p 
          id={`${inputId}-error`} 
          className="mt-2 text-sm text-red-400 animate-fade-in"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default Input

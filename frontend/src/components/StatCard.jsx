import React from 'react'

const StatCard = ({ title, value, icon, gradient, className = '' }) => {
  const gradients = {
    purple: 'from-purple-400 to-pink-400',
    blue: 'from-blue-400 to-cyan-400',
    green: 'from-green-400 to-emerald-400',
    orange: 'from-orange-400 to-pink-400',
  }

  const selectedGradient = gradient || gradients.purple

  return (
    <div className={`glass rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedGradient} flex items-center justify-center shadow-md`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

export default StatCard

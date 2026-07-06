import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass rounded-3xl p-6 h-32 animate-pulse">
            <div className="flex items-center justify-between h-full">
              <div className="space-y-3 flex-1">
                <div className="h-4 bg-purple-100 rounded-lg w-24"></div>
                <div className="h-8 bg-purple-200 rounded-lg w-32"></div>
              </div>
              <div className="w-14 h-14 bg-purple-100 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="glass rounded-3xl p-6">
        <div className="space-y-4">
          <div className="h-6 bg-purple-100 rounded-lg w-48"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-purple-50/50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-purple-100 rounded-lg w-32"></div>
                <div className="h-3 bg-purple-100 rounded-lg w-24"></div>
              </div>
              <div className="w-20 h-8 bg-purple-100 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader

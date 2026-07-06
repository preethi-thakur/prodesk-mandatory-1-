import React from 'react'
import { formatCurrency, formatDate } from '../utils/dateFormat'

const InventoryRow = ({ cupcake, onEdit, onDelete, index }) => {
  if (!cupcake) return null

  const isEven = index % 2 === 0

  return (
    <tr className={`border-b border-purple-50 transition-all duration-200 hover:bg-purple-50/50 ${isEven ? 'bg-white' : 'bg-purple-50/30'}`}>
      <td className="px-6 py-4 text-sm font-medium text-gray-800">{cupcake.name || 'N/A'}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{cupcake.flavor || 'N/A'}</td>
      <td className="px-6 py-4 text-sm text-gray-800">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
          {cupcake.quantity ?? 'N/A'}
        </span>
      </td>
      <td className="px-6 py-4 text-sm font-semibold text-gray-800">{formatCurrency(cupcake.price)}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{formatDate(cupcake.createdAt)}</td>
      <td className="px-6 py-4 text-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onEdit(cupcake)}
            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-xl font-medium shadow-sm hover:shadow-md hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 transform hover:scale-105 focus-ring"
            aria-label={`Edit ${cupcake.name || 'cupcake'}`}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(cupcake)}
            className="px-4 py-2 text-sm bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-xl font-medium shadow-sm hover:shadow-md hover:from-red-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105 focus-ring"
            aria-label={`Delete ${cupcake.name || 'cupcake'}`}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default InventoryRow

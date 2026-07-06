import React from 'react'
import InventoryRow from './InventoryRow'

const InventoryTable = ({ cupcakes, onEdit, onDelete }) => {
  if (!Array.isArray(cupcakes) || cupcakes.length === 0) {
    return null
  }

  return (
    <div className="glass rounded-3xl overflow-hidden shadow-lg animate-slide-up">
      <div className="overflow-x-auto">
        <table className="w-full" role="grid" aria-label="Cupcake inventory">
          <thead>
            <tr className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Flavor</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created At</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cupcakes.map((cupcake, index) => (
              <InventoryRow
                key={cupcake.id}
                cupcake={cupcake}
                onEdit={onEdit}
                onDelete={onDelete}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InventoryTable

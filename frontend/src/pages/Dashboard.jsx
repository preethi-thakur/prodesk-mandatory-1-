import React, { useState, useEffect } from 'react'
import { useToast } from '../context/ToastContext'
import { cupcakeApi, getData } from '../services/api'
import { formatCurrency } from '../utils/dateFormat'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import InventoryTable from '../components/InventoryTable'
import SkeletonLoader from '../components/SkeletonLoader'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import StatCard from '../components/StatCard'
import AddCupcakeModal from '../components/AddCupcakeModal'
import EditCupcakeModal from '../components/EditCupcakeModal'
import DeleteConfirmationModal from '../components/DeleteConfirmationModal'
import Toast from '../components/Toast'

const Dashboard = () => {
  const [cupcakes, setCupcakes] = useState([])
  const [filteredCupcakes, setFilteredCupcakes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedCupcake, setSelectedCupcake] = useState(null)
  const { toasts, removeToast, success, error: toastError } = useToast()

  useEffect(() => {
    fetchCupcakes()
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCupcakes(cupcakes)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = cupcakes.filter(
        (cupcake) =>
          cupcake.name.toLowerCase().includes(query) ||
          cupcake.flavor.toLowerCase().includes(query)
      )
      setFilteredCupcakes(filtered)
    }
  }, [searchQuery, cupcakes])

  const fetchCupcakes = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await cupcakeApi.getAll()
      const data = getData(response) || []
      setCupcakes(Array.isArray(data) ? data : [])
      setFilteredCupcakes(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message)
      toastError('Failed to load cupcakes')
      setCupcakes([])
      setFilteredCupcakes([])
    } finally {
      setLoading(false)
    }
  }

  const handleAddCupcake = async (data) => {
    try {
      await cupcakeApi.create(data)
      await fetchCupcakes()
      success('Cupcake added successfully')
    } catch (err) {
      toastError('Failed to add cupcake')
      throw err
    }
  }

  const handleEditCupcake = async (id, data) => {
    try {
      await cupcakeApi.update(id, data)
      await fetchCupcakes()
      success('Cupcake updated successfully')
    } catch (err) {
      toastError('Failed to update cupcake')
      throw err
    }
  }

  const handleDeleteCupcake = async (id) => {
    try {
      await cupcakeApi.delete(id)
      await fetchCupcakes()
      success('Cupcake deleted successfully')
    } catch (err) {
      toastError('Failed to delete cupcake')
      throw err
    }
  }

  const openAddModal = () => {
    setIsAddModalOpen(true)
  }

  const openEditModal = (cupcake) => {
    setSelectedCupcake(cupcake)
    setIsEditModalOpen(true)
  }

  const openDeleteModal = (cupcake) => {
    setSelectedCupcake(cupcake)
    setIsDeleteModalOpen(true)
  }

  const closeAddModal = () => {
    setIsAddModalOpen(false)
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false)
    setSelectedCupcake(null)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
    setSelectedCupcake(null)
  }

  const totalCupcakes = cupcakes.length
  const totalInventory = cupcakes.reduce((sum, cupcake) => sum + (cupcake.quantity || 0), 0)
  const averagePrice = cupcakes.length > 0 
    ? cupcakes.reduce((sum, cupcake) => sum + (cupcake.price || 0), 0) / cupcakes.length 
    : 0
  const uniqueFlavors = new Set(cupcakes.map(c => c.flavor)).size

  return (
    <div className="min-h-screen">
      <Navbar onAddCupcake={openAddModal} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Cupcakes"
            value={totalCupcakes}
            gradient="purple"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
          />
          <StatCard
            title="Total Inventory"
            value={totalInventory}
            gradient="blue"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
          <StatCard
            title="Average Price"
            value={formatCurrency(averagePrice)}
            gradient="green"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            title="Available Flavors"
            value={uniqueFlavors}
            gradient="orange"
            icon={
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
        </div>

        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cupcakes by name or flavor..."
          />
        </div>

        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchCupcakes} />
        ) : filteredCupcakes.length === 0 ? (
          <EmptyState message={searchQuery ? 'No cupcakes found matching your search' : 'No cupcakes in inventory'} />
        ) : (
          <InventoryTable
            cupcakes={filteredCupcakes}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
          />
        )}
      </main>

      <footer className="mt-auto py-8 border-t border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          Cupcake Inventory Management System
        </div>
      </footer>

      <AddCupcakeModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onSubmit={handleAddCupcake}
      />

      <EditCupcakeModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        cupcake={selectedCupcake}
        onSubmit={handleEditCupcake}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        cupcake={selectedCupcake}
        onConfirm={handleDeleteCupcake}
      />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard

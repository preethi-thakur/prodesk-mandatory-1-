import React, { useState } from 'react'
import Modal from './Modal'
import Button from './Button'

const DeleteConfirmationModal = ({ isOpen, onClose, cupcake, onConfirm }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleConfirm = async () => {
    setIsDeleting(true)
    try {
      await onConfirm(cupcake.id)
      handleClose()
    } catch (error) {
      console.error('Failed to delete cupcake:', error)
      setIsDeleting(false)
    }
  }

  const handleClose = () => {
    setIsDeleting(false)
    onClose()
  }

  if (!cupcake) return null

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Delete Cupcake" ariaLabel="Delete cupcake confirmation">
      <div className="space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        <p className="text-center text-gray-600 text-lg">
          Are you sure you want to delete <span className="font-semibold text-gray-900">{cupcake.name}</span>?
        </p>
        <p className="text-center text-sm text-gray-400">
          This action cannot be undone.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isDeleting}
            ariaLabel="Cancel deletion"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            loading={isDeleting}
            onClick={handleConfirm}
            ariaLabel="Confirm deletion"
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteConfirmationModal

import React, { useState } from 'react'
import Modal from './Modal'
import Input from './Input'
import Button from './Button'
import { validateCupcake, hasErrors } from '../utils/validation'

const AddCupcakeModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    flavor: '',
    quantity: '',
    price: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateCupcake(formData)
    setErrors(validationErrors)
    
    if (hasErrors(validationErrors)) {
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit({
        name: formData.name.trim(),
        flavor: formData.flavor.trim(),
        quantity: Number(formData.quantity),
        price: Number(formData.price),
      })
      handleClose()
    } catch (error) {
      console.error('Failed to add cupcake:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({
      name: '',
      flavor: '',
      quantity: '',
      price: '',
    })
    setErrors({})
    setIsSubmitting(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add Cupcake" ariaLabel="Add new cupcake">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter cupcake name"
          error={errors.name}
          required
          disabled={isSubmitting}
        />
        <Input
          label="Flavor"
          name="flavor"
          value={formData.flavor}
          onChange={handleChange}
          placeholder="Enter flavor"
          error={errors.flavor}
          required
          disabled={isSubmitting}
        />
        <Input
          label="Quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Enter quantity"
          error={errors.quantity}
          required
          disabled={isSubmitting}
          min="0"
        />
        <Input
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          error={errors.price}
          required
          disabled={isSubmitting}
          min="0.01"
          step="0.01"
        />
        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
            ariaLabel="Cancel adding cupcake"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            ariaLabel="Submit new cupcake"
          >
            Add Cupcake
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddCupcakeModal

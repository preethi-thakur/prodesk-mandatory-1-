export const validateCupcake = (data) => {
  const errors = {}
  
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required'
  }
  
  if (!data.flavor || data.flavor.trim() === '') {
    errors.flavor = 'Flavor is required'
  }
  
  if (data.quantity === undefined || data.quantity === null || data.quantity === '') {
    errors.quantity = 'Quantity is required'
  } else if (data.quantity < 0) {
    errors.quantity = 'Quantity must be greater than or equal to zero'
  }
  
  if (data.price === undefined || data.price === null || data.price === '') {
    errors.price = 'Price is required'
  } else if (data.price <= 0) {
    errors.price = 'Price must be greater than zero'
  }
  
  return errors
}

export const hasErrors = (errors) => {
  return Object.keys(errors).some(key => errors[key] !== undefined && errors[key] !== '')
}

const { body, param, validationResult } = require('express-validator');

const validateCupcake = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
   .isString()
    .withMessage('Name must be a string'),
  body('flavor')
    .trim()
    .notEmpty()
    .withMessage('Flavor is required')
    .isString()
    .withMessage('Flavor must be a string'),
  body('quantity')
    .notEmpty()
    .withMessage('Quantity is required')
    .isInt({ min: 0 })
    .withMessage('Quantity must be an integer greater than or equal to 0'),
  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ min: 0.01 })
    .withMessage('Price must be a positive number'),
];

const validateCupcakeId = [
  param('id')
    .notEmpty()
    .withMessage('ID is required')
    .isString()
    .withMessage('ID must be a string'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => err.msg),
    });
  }
  next();
};

module.exports = {
  validateCupcake,
  validateCupcakeId,
  handleValidationErrors,
};

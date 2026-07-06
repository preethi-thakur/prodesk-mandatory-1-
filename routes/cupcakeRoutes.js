const express = require('express');
const router = express.Router();
const {
  getAllCupcakes,
  getCupcakeById,
  createCupcake,
  updateCupcake,
  deleteCupcake,
} = require('../controllers/cupcakeController');
const {
  validateCupcake,
  validateCupcakeId,
  handleValidationErrors,
} = require('../middleware/validation');

router.get('/', getAllCupcakes);
router.get('/:id', validateCupcakeId, handleValidationErrors, getCupcakeById);
router.post('/', validateCupcake, handleValidationErrors, createCupcake);
router.put('/:id', validateCupcakeId, validateCupcake, handleValidationErrors, updateCupcake);
router.delete('/:id', validateCupcakeId, handleValidationErrors, deleteCupcake);

module.exports = router;

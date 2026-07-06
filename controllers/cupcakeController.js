const cupcakes = require('../data/cupcakes');
const { generateId, sanitizeInput, formatDate } = require('../utils/helpers');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

const getAllCupcakes = (req, res) => {
  if (cupcakes.length === 0) {
    return res.json({
      success: true,
      message: 'No data found',
      data: [],
    });
  }

  res.json({
    success: true,
    message: 'Operation successful',
    data: cupcakes,
  });
};

const getCupcakeById = (req, res) => {
  const { id } = req.params;
  const cupcake = cupcakes.find(c => c.id === id);

  if (!cupcake) {
    throw new NotFoundError('Cupcake not found');
  }

  res.json({
    success: true,
    message: 'Operation successful',
    data: cupcake,
  });
};

const createCupcake = (req, res) => {
  const { name, flavor, quantity, price } = req.body;

  const sanitizedName = sanitizeInput(name);
  const sanitizedFlavor = sanitizeInput(flavor);

  const newCupcake = {
    id: generateId(),
    name: sanitizedName,
    flavor: sanitizedFlavor,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  };

  cupcakes.push(newCupcake);

  console.log('[Analytics] User interacted with Cupcake Inventory CRUD API');

  res.status(201).json({
    success: true,
    message: 'Operation successful',
    data: newCupcake,
  });
};

const updateCupcake = (req, res) => {
  const { id } = req.params;
  const { name, flavor, quantity, price } = req.body;

  const cupcakeIndex = cupcakes.findIndex(c => c.id === id);

  if (cupcakeIndex === -1) {
    throw new NotFoundError('Cupcake not found');
  }

  const sanitizedName = sanitizeInput(name);
  const sanitizedFlavor = sanitizeInput(flavor);

  cupcakes[cupcakeIndex] = {
    ...cupcakes[cupcakeIndex],
    name: sanitizedName,
    flavor: sanitizedFlavor,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    updatedAt: formatDate(),
  };

  console.log('[Analytics] User interacted with Cupcake Inventory CRUD API');

  res.json({
    success: true,
    message: 'Operation successful',
    data: cupcakes[cupcakeIndex],
  });
};

const deleteCupcake = (req, res) => {
  const { id } = req.params;
  const cupcakeIndex = cupcakes.findIndex(c => c.id === id);

  if (cupcakeIndex === -1) {
    throw new NotFoundError('Cupcake not found');
  }

  cupcakes.splice(cupcakeIndex, 1);

  console.log('[Analytics] User interacted with Cupcake Inventory CRUD API');

  res.json({
    success: true,
    message: 'Operation successful',
    data: { id },
  });
};

module.exports = {
  getAllCupcakes,
  getCupcakeById,
  createCupcake,
  updateCupcake,
  deleteCupcake,
  NotFoundError,
};

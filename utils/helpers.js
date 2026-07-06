const { v4: uuidv4 } = require('uuid');
const sanitizeHtml = require('sanitize-html');

const generateId = () => {
  return uuidv4();
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') {
    return input;
  }
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

const formatDate = () => {
  return new Date().toISOString();
};

module.exports = {
  generateId,
  sanitizeInput,
  formatDate,
};

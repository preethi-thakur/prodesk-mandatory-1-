const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const cupcakeRoutes = require('./routes/cupcakeRoutes');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const slowNetwork = require('./middleware/slowNetwork');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(slowNetwork);

app.use('/api/cupcakes', cupcakeRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const planRoutes = require('./routes/planRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/user', userRoutes);

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));

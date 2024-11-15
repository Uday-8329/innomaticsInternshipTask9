const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection failed:', err));

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
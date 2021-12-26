const express = require("express");
const mongoose = require("mongoose");
const todosRoutes = require('./routes/todo');
const usersRoutes = require('./routes/user')

const app = express();

mongoose.connect('mongodb://localhost:27017/Todo');

app.use(express.json());

app.use('/todos', todosRoutes);
app.use('/users', usersRoutes);



app.use((err, req, res, next) => {
    res.status(500).json({ err });
});

app.listen(3200, () => {
    console.log(`Connection Successeded`);
});


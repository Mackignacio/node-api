const express = require('express');
const morgan = require('morgan');
const productRoutes = require('./routes/products');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
        res.send(200);
    } else {
        next();
    }
});

app.use('/products', productRoutes);

app.use((req, res, next) => {
    const err = new Error('Invalid Request!');
    res.status(500).json({
        error: err.message
    });
});


module.exports = app;
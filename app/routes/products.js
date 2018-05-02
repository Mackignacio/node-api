const express = require('express');
const router = express.Router();

const validateLettersNumbers = new RegExp('^[a-zA-Z0-9_.-]*$');

router.get(('/'), (req, res, next) => {
    res.status(200).json({
        message: "Products GET Request"
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name : req.body.name,
        price : req.body.price
    }
    res.status(200).json({
        message: "Products successfully created!",
        product:product
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if(validateLettersNumbers.test(id)){
        res.status(200).json({
            message: "Products GET Request with id = " + id
        });
    } else{
        res.status(200).json({
            message: 'Invalid ID request!'
        });
    }
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    if(validateLettersNumbers.test(id)){
        res.status(200).json({
            message: "Updated product with id = " + id
        });
    } else{
        res.status(200).json({
            message: 'Invalid ID request!'
        });
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    if(validateLettersNumbers.test(id)){
        res.status(200).json({
            message: "Deleted product with id = " + id
        });
    } else{
        res.status(200).json({
            message: 'Invalid ID request!'
        });
    }
});



module.exports = router;
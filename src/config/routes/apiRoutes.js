const express = require('express');
const router = express.Router();

// Import the controller
const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

const { 
    createChef, getAllChefs, } = require('../controllers/chefController');

    router.post('/chefs', createChef);
    router.get('/chefs', getAllChefs);
//1.
router.get('/dishes', getAllDishes);
router.post('/dishes', createDish);
router.get('/dishes/:id', getDishById);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);

module.exports = router;
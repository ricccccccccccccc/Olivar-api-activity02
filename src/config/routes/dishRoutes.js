const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
router.use('/auth', authRoutes);
const { protect, authorize } = require('../middleware/authMiddleware');
const { getAllDishes, createDish } = require('../controllers/dishController');

router.get('/dishes', getAllDishes);

router.post('/dishes', protect, authorize('admin', 'manager'), createDish);

module.exports = router;
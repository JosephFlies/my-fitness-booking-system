const express = require('express');
// Import the "Brain" (our pricing logic)
const { calculatePrice } = require('./services/pricingService'); 

const app = express();

// Middleware to read JSON inputs
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// THE NEW ROUTE (The "Mouth")
app.post('/api/pricing/calculate', (req, res) => {
    // 1. Get data from the request
    const { basePrice, userType, occupancy } = req.body;
    
    // 2. Ask the "Brain" to calculate the price
    const price = calculatePrice(basePrice, userType, occupancy);
    
    // 3. Send the answer back
    res.status(200).json({ finalPrice: price });
});

module.exports = app;
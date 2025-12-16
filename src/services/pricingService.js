const calculatePrice = (basePrice, userType, occupancy) => {
    let finalPrice = basePrice;

    // Rule 1: Surge Pricing (If occupancy > 80%, increase price by 20%)
    if (occupancy > 0.80) {
        finalPrice = finalPrice * 1.20;
    }

    // Rule 2: Premium Discount (Apply after surge pricing)
    if (userType === 'PREMIUM') {
        finalPrice = finalPrice * 0.90; // 10% discount
    }

    return finalPrice;
};

module.exports = { calculatePrice };
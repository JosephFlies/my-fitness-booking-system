const calculatePrice = (basePrice, userType) => {
    if (userType === 'PREMIUM') {
        return basePrice * 0.90; // 10% discount
    }
    return basePrice;
};

// This line allows other files (like your test) to use this function
module.exports = { calculatePrice };
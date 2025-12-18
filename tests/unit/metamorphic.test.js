const { calculatePrice } = require('../../src/services/pricingService');

describe('Metamorphic Testing (Section 5.9)', () => {

    // Relation 1: Linear Scaling
    // If we double the base price, the final calculated price should also double.
    test('MR-1: Doubling the base price should double the final price', () => {
        const userType = 'STANDARD';
        const occupancy = 0.5;
        
        const price1 = calculatePrice(100, userType, occupancy);
        const price2 = calculatePrice(200, userType, occupancy); // Input doubled

        // Expect output to be doubled
        expect(price2).toBe(price1 * 2);
    });

    // Relation 2: Monotonicity
    // A higher base price should NEVER result in a lower final price.
    test('MR-2: Increasing base price should strictly increase final price', () => {
        const userType = 'PREMIUM';
        const occupancy = 0.9; // High demand
        
        const priceLow = calculatePrice(100, userType, occupancy);
        const priceHigh = calculatePrice(101, userType, occupancy); // Just $1 more
        
        expect(priceHigh).toBeGreaterThan(priceLow);
    });
});
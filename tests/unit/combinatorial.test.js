const { calculatePrice } = require('../../src/services/pricingService');

describe('Pairwise / Combinatorial Testing (Section 5.8)', () => {

    // This table comes from the PICT tool output
    // We map the text values to real numbers for our code
    const testCases = [
        // UserType  | Occupancy | BasePrice | Expected Result (Logic)
        ['STANDARD',  'LOW',      100,        100],  // No changes
        ['PREMIUM',   'LOW',      200,        180],  // 10% discount
        ['STANDARD',  'OVER_80',  100,        120],  // Surge (+20%)
        ['PREMIUM',   'OVER_80',  200,        216],  // Surge (+20%) then Discount (-10%) -> 200 * 1.2 * 0.9 = 216
        ['STANDARD',  'MEDIUM',   200,        200],  // No changes
        ['PREMIUM',   'HIGH',     100,        90],   // 10% discount
    ];

    test.each(testCases)(
        'User %s with Occupancy %s and Base Price %i should pay %i',
        (userType, occupancyString, basePrice, expectedPrice) => {
            
            // Convert string "Occupancy" to a number for our service
            let occupancyRate = 0.1; // Default LOW
            if (occupancyString === 'HIGH') occupancyRate = 0.7;
            if (occupancyString === 'OVER_80') occupancyRate = 0.9;

            const finalPrice = calculatePrice(basePrice, userType, occupancyRate);
            
            expect(finalPrice).toBe(expectedPrice);
        }
    );
});
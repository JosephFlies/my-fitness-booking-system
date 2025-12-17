const fc = require('fast-check');
const { calculatePrice } = require('../../src/services/pricingService');

describe('Pricing Property Tests (Chaos Testing)', () => {

    // Law 1: Price must always be positive (or zero)
    test('Calculated price should never be negative', () => {
        // fc.assert runs this check 100 times with random data
        fc.assert(
            fc.property(
                fc.integer({ min: 0, max: 10000 }), // Random base price (0 to 10,000)
                fc.constantFrom('STANDARD', 'PREMIUM'), // Random user type
                fc.float({ min: 0, max: 1 }), // Random occupancy (0.0 to 1.0)
                (basePrice, userType, occupancy) => {
                    const price = calculatePrice(basePrice, userType, occupancy);
                    return price >= 0; // The Rule: Price must be >= 0
                }
            )
        );
    });

    // Law 2: Premium price <= Standard price (Discount logic holds)
    test('Premium price should always be less than or equal to Standard price', () => {
        fc.assert(
            fc.property(
                fc.integer({ min: 0, max: 5000 }), // Random price
                fc.float({ min: 0, max: 1 }), // Random occupancy
                (basePrice, occupancy) => {
                    const standardPrice = calculatePrice(basePrice, 'STANDARD', occupancy);
                    const premiumPrice = calculatePrice(basePrice, 'PREMIUM', occupancy);
                    
                    return premiumPrice <= standardPrice; // The Rule
                }
            )
        );
    });
});
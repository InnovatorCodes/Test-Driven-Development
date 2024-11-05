import calculator from "./calculator";

describe("Testing Calculator Add function",()=>{
    test("1+2 should give 3",()=>{
        expect((calculator.add(1,2))).toBe(3);
    })

    test("Adding negative numbers -3,-4",()=>{
        expect(calculator.add(-3,-4)).toBe(-7);
    })
    test("Adding -3, 5",()=>{
        expect(calculator.add(-3,5)).toBe(2);
    })
    test("Addition of decimal values 0.4 and 3.7",()=>{
        expect(calculator.add(0.4,3.7)).toBeCloseTo(4.1);
    })
    test("Addition of decimal values -0.9 and -25.7",()=>{
        expect(calculator.add(-0.9,-25.7)).toBeCloseTo(-26.6);
    })
})

describe("Testing Calculator Multiply function",()=>{
    test("Multiplying 1 and 2 should give 2",()=>{
        expect((calculator.multiply(1,2))).toBe(2);
    })
    test("Multiplying 7 and 39 should give 273",()=>{
        expect((calculator.multiply(7,39))).toBe(273);
    })

    test("Multiplying negative numbers -3,-4",()=>{
        expect(calculator.multiply(-3,-4)).toBe(12);
    })
    test("Multiplying -3, 5",()=>{
        expect(calculator.multiply(-3,5)).toBe(-15);
    })
    test("Multiplication of decimal values 4.1 and 1.7",()=>{
        expect(calculator.multiply(4.1,1.7)).toBeCloseTo(6.97);
    })
    test("Multiplication of decimal values 5.7 and -17.7",()=>{
        expect(calculator.multiply(5.7,-17.7)).toBeCloseTo(-100.89);
    })
    test("Multiplication of decimal values -5.7 and -5",()=>{
        expect(calculator.multiply(-5.7,-5)).toBeCloseTo(28.5);
    })
})

describe("Testing Calculator Subtract function",()=>{
    test("Subtraction of 1 and 2",()=>{
        expect((calculator.subtract(1,2))).toBe(-1);
    })
    test("Subtraction of 39 and 7",()=>{
        expect((calculator.subtract(39,7))).toBe(32);
    })

    test("Subtraction of negative numbers -3,-4",()=>{
        expect(calculator.subtract(-3,-4)).toBe(1);
    })
    test("Subtraction of -3 and 5",()=>{
        expect(calculator.subtract(-3,5)).toBe(-8);
    })
    test("Subtraction of decimal values 4.1 and 1.7",()=>{
        expect(calculator.subtract(4.1,1.7)).toBeCloseTo(2.4);
    })
    test("Multiplication of decimal values 5.7 and -17.7",()=>{
        expect(calculator.subtract(5.7,-17.7)).toBeCloseTo(23.4);
    })
    test("Multiplication of decimal values -5.7 and -5",()=>{
        expect(calculator.subtract(-5.7,-5)).toBeCloseTo(-0.7);
    })
})

describe("Testing Calculator Divide function",()=>{
    test("Division of 1 and 2",()=>{
        expect((calculator.divide(1,2))).toBe(0.5);
    })
    test("Division of 39 and 7",()=>{
        expect((calculator.divide(39,7))).toBeCloseTo(5.57);
    })
    test("Division of negative numbers -3,-4",()=>{
        expect(calculator.divide(-3,-4)).toBe(0.75);
    })
    test("Division of -3 and 5",()=>{
        expect(calculator.divide(-3,5)).toBe(-0.6);
    })
    test("Division of decimal values 4.1 and 1.7",()=>{
        expect(calculator.divide(4.1,1.7)).toBeCloseTo(2.41);
    })
    test("Division of decimal values 5.7 and -17.7",()=>{
        expect(calculator.divide(5.7,-17.7)).toBeCloseTo(-0.32);
    })
    test("Division of decimal values -5.7 and -5",()=>{
        expect(calculator.divide(-5.7,-5)).toBeCloseTo(1.14);
    })
})

import analyzeArray from  "./analyzeArray";

describe("Testing Analyze Array function",()=>{
    test("Testing array [1,8,3,4,2,6]",()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
         });
    })
    test("Testing array [3, 8, 1, 6, 4]",()=>{
        let result=analyzeArray([3, 8, 1, 6, 4])
        let expected={
            average: 4.4,
            min: 1,
            max: 8,
            length: 5
        };

        expect(result.average).toBeCloseTo(expected.average,1);
        expect(result.min).toBe(expected.min);
        expect(result.max).toBe(expected.max);
        expect(result.length).toBe(expected.length);
    });
    test("Testing array [2, 14, 6, 8, 10, 1, 5]",()=>{
        let result=analyzeArray([2, 14, 6, 8, 10, 1, 5])
        let expected={
            average: 6.57,
            min: 1,
            max: 14,
            length: 7
        };

        expect(result.average).toBeCloseTo(expected.average,1);
        expect(result.min).toBe(expected.min);
        expect(result.max).toBe(expected.max);
        expect(result.length).toBe(expected.length);
    });
    test("Testing array [4, 9, 2, 15, 7, 3, 8, 6]",()=>{
        let result=analyzeArray([4, 9, 2, 15, 7, 3, 8, 6])
        let expected={
            average: 6.75,
            min: 2,
            max: 15,
            length: 8
        };

        expect(result.average).toBeCloseTo(expected.average,1);
        expect(result.min).toBe(expected.min);
        expect(result.max).toBe(expected.max);
        expect(result.length).toBe(expected.length);
    });
    test("Testing array [-5, -11, -3, -9, -6, -2]",()=>{
        let result=analyzeArray([-5, -11, -3, -9, -6, -2])
        let expected={
            average: -6.0,
            min: -11,
            max: -2,
            length: 6
        };

        expect(result.average).toBeCloseTo(expected.average,1);
        expect(result.min).toBe(expected.min);
        expect(result.max).toBe(expected.max);
        expect(result.length).toBe(expected.length);
    });

})

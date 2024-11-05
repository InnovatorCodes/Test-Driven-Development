import capitalize from './capitalize.js';

describe('Capitalize Function',()=>{
    test("'hello' becomes 'Hello'",()=>{
        expect(capitalize("hello")).toBe('Hello');
    })
    test("'premium becomes 'Premium'",()=>{
        expect(capitalize("premium")).toBe("Premium");
    })
    test("Testing with already capitalized first letter",()=>{
        expect(capitalize("Testing")).toBe("Testing");
    })
    test("Testing with fully capitalized word",()=>{
        expect(capitalize("DEVELOPMENT")).toBe("DEVELOPMENT");
    })
    test("Testing with more than one word",()=>{
        expect(capitalize("how are You")).toBe("How are You");
    })
    test("Testing with numbers",()=>{
        expect(capitalize("1234")).toBe("1234");
    })
    test("Testing with special symbols",()=>{
        expect(capitalize("!@#$%^")).toBe("!@#$%^");
    })
    test("Random string test",()=>{
        expect(capitalize("hello WHAT are123 yOu23%^ Doing!@#$")).toBe("Hello WHAT are123 yOu23%^ Doing!@#$");
    })
})
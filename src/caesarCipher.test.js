import caesarCipher from "./caesarCipher";

describe("Testing CaesarCipher function",()=>{
    test("'abc' becomes 'bcd', offset=1 ",()=>{
        expect(caesarCipher('abc',1)).toBe("bcd");
    })
    test("'abc' becomes 'def', offset=5",()=>{
        expect(caesarCipher('abc', 5)).toBe("fgh");
    })
    test("'xyz' becomes 'abc', offset=3",()=>{
        expect(caesarCipher('xyz', 3)).toBe("abc");
    })
    test("'HeLLo' becomes 'KhOOr', offset=29",()=>{
        expect(caesarCipher("HeLLo", 29)).toBe("KhOOr");
    })
    test("'abc' becomes 'def', offset=3",()=>{
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    })
    test("Testing 'He, Voldemort, had made 7 HORCRUXES!', offset=7",()=>{
        expect(caesarCipher("He, Voldemort, had made 7 HORCRUXES!",7)).toBe("Ol, Cvskltvya, ohk thkl 7 OVYJYBELZ!")
    })
})
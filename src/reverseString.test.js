import reverseString from "./reverseString";

describe("Testing Reverse String function",()=>{
    test("'hello' must become 'olleh'",()=>{
        expect(reverseString("hello")).toBe("olleh");
    })
    test("'Hello World' must become 'dlroW olleH'",()=>{
        expect(reverseString("Hello World")).toBe("dlroW olleH");
    })
    test("Revesal of multi-word strings",()=>{
        expect(reverseString("abc def GHI JkL MnO PQR")).toBe("RQP OnM LkJ IHG fed cba");
    })
    test("Reversal of strings with numbers",()=>{
        expect(reverseString("1234 5678")).toBe("8765 4321");
    })
    test("Reversal of strings with special characters",()=>{
        expect(reverseString("He borrowed $50 from her!")).toBe("!reh morf 05$ deworrob eH");
    })
})
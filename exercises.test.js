const MyModules = require("./exercises");

test("adds 1 + 2 equal to 3", () => {
    expect(MyModules.sum(1, 2)).toBe(3);
})

test("Makes first letter capital", () =>{
    expect(MyModules.capitalize("john")).toBe("John");
})


test("Reverses string", () =>{
    expect(MyModules.reverseString("aco")).toBe("oca");
})

test("calculator", () => {
    expect(MyModules.calc.add(2,3)).toBe(5);
    expect(MyModules.calc.substr(2,3)).toBe(-1);
    expect(MyModules.calc.divide(10,5)).toBe(2);
    expect(MyModules.calc.multiply(2,3)).toBe(6);
})


test("returns every letter shifted", () => {
    expect(MyModules.caeserCipher("attack at dawn",5)).toBe("fyyfhp fy ifbs");
})


test("retursn a object with the min, max, average and length", () => {
    expect(MyModules.analayzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4,  min: 1,  max: 8,  length: 6});
})

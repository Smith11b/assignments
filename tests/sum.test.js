var sum = require('./sum.js').sum;


var testCase1 = {
    x: 0,
    y: 3,
    expected: 3
}
var testCase2 = {
    x: 10,
    y: 5,
    expected: 15
}


describe("test the sum function", function(){
    test("that sum outputs 3 given 0 and 3", function(){
        expect(sum(testCase1.x, testCase1.y)).toBe(testCase1.expected);
    });
    test("that sum outputs 15 given 5 and 10", function(){
        expect(sum(testCase2.x, testCase2.y)).toBe(testCase2.expected);
    });
})
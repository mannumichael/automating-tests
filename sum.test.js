const sum = require('./add');

test('Properly adds two numbers',()=>{
    expect(sum(1,2)).toBe(3);
})
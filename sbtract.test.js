const sub = require('./subtract');

test('Properly subtracts two number',()=>{
    expect(sub(3,2)).toBe(1);
})
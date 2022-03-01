test("One euro shoud be 1.206 dollars", () => {
    const { fromEuroToDollar } = require('./app.js')

    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test ("One euro should be 127.9 yens", () => {
    const { fromDollarToYen } = require('./app.js')
    let yen = 1.2 * 127.9;
    expect(fromDollarToYen(1.2)).toBe(153.48);

});

test ("One euro should be 0.8 pound", () => {
    const { fromYenToPound } = require('./app.js')
    let pound = 127.9 * 0.8;
    expect(fromYenToPound(127.9)).toBe(102);

})


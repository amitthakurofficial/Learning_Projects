const assert = require('assert');
const {getAddition} = require('../index');

describe("#Index", () => {
    describe("#getAddition", () => {
        it("Should return addition of two numbers", () => {
            const result = getAddition(10,20);
            assert.strictEqual(result,30);
        })
    })
})
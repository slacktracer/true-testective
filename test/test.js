var
    assert;
assert = require("assert");
describe('tnp1Solver', function describing() {
    var
        defaultInput,
        defaultOutput,
        tnp1Solver;
    defaultInput = '1 10\n100 200\n201 210\n900 1000';
    defaultOutput = '1 10 20\n100 200 125\n201 210 89\n900 1000 174';
    tnp1Solver = require('../tnp1Solver');
    it('should return the default output for the default input', function testing() {
        var
            input,
            output,
            result;
        input = defaultInput;
        output = tnp1Solver(defaultInput);
        assert.equal(output, defaultOutput);
    });
});

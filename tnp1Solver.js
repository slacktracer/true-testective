'use strict';
var tnp1Solver = function tnp1Solver(input) {
    var
        i,
        length,
        n,
        terminal;
    input = tnp1Solver.splitter(input);
    input.forEach(function forEach(element, index, array) {
        n = +element[0];
        terminal = +element[1];
        for (; n <= terminal; n += 1) {
            console.log('n', n)
            console.log('terminal', terminal)
            while (n === 1) {
                if (n % 2 !== 0) {
                    n = (n * 3) + 1;
                } else {
                    n /= 2;
                }
                console.log(n)
            }
        }
    });
    // input.map(function map(element) {
    //     console.log(element);
    //     element.reduce(function reduce(element) {
    //         console.log(element);
    //     });
    // });
    return input;
};
tnp1Solver.joiner = function joiner(input) {
    var
        output;
    output = input
        .map(function map(element) {
            return element.join(' ');
        })
        .join('\n');
    return output;
};
tnp1Solver.splitter = function splitter(input) {
    var
        output;
    output = input
        .split('\n')
        .map(function map(element) {
            return element.split(' ');
        });
    return output;
};
module.exports = tnp1Solver;

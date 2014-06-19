'use strict';
var tnp1Solver = function tnp1Solver(input) {
    var
        current,
        cycleLength,
        i,
        length,
        maximumCycleLength,
        n,
        output,
        terminal;
    output = tnp1Solver.splitter(input);
    output.forEach(function forEach(element, index, array) {
        /* cool... remember, remember... */
        /*element = element
            .map(function map(currentValue) {
                return +currentValue;
            });*/
        element[0] = +element[0];
        element[1] = +element[1];
        maximumCycleLength = 1;
        for (current = element[0], terminal = element[1]; current <= terminal; current += 1) {
            cycleLength = tnp1Solver.process(current);
            if (cycleLength > maximumCycleLength) {
                maximumCycleLength = cycleLength;
            }
        }
            console.log(element)
        element.push(maximumCycleLength);
        console.log(element)
    });
    console.log(output);
    output = tnp1Solver.joiner(output);
    return output;
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
tnp1Solver.process = function process(n) {
    var
        steps;
    steps = 1;
    console.log(n);
    while (n !== 1) {
        if (n % 2 !== 0) {
            n = (n * 3) + 1;
        } else {
            n /= 2;
        }
        console.log(n);
        steps += 1;
    }
    return steps;
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

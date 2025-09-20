"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = sumArray;
const add_1 = require("./add");
function sumArray(numbers) {
    return numbers.reduce((acc, n) => (0, add_1.add)(acc, n), 0);
}

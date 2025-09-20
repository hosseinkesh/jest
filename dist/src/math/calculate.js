"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
const add_1 = require("./add");
function calculate(a, b) {
    return (0, add_1.add)(a, b) * 2;
}

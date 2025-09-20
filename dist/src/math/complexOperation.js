"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexOperation = complexOperation;
const mathUtils_1 = require("./mathUtils");
function complexOperation(a, b) {
    const sum = (0, mathUtils_1.add)(a, b);
    const product = (0, mathUtils_1.multiply)(a, b);
    return sum + product;
}

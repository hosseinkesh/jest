"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const complexOperation_1 = require("../src/math/complexOperation");
jest.mock("../src/math/mathUtils", () => {
    return {
        ...jest.requireActual("../src/math/mathUtils"),
        add: jest.fn(() => 100),
    };
});
const mathUtill = __importStar(require("../src/math/mathUtils"));
describe("partial test complexOperation", () => {
    const result = (0, complexOperation_1.complexOperation)(2, 3);
    it("should check if add is mocked", () => {
        expect(mathUtill.add).toHaveBeenCalledWith(2, 3);
        expect(result).toBe(106);
        // I can't have any expectations from the rest of the module
        // since I'm partially testing complexOperation
        // and I haven't mocked the rest of the module
        // This assertion will fail:
        // expect(multiplySpy).toHaveBeenCalledWith(2, 3);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const op = './operations';
const operacion = async (num1, num2, operation) => {
    let result;
    switch (operation.toLowerCase()) {
        case 'suma':
            result = await Promise.resolve().then(() => __importStar(require(op))).then(module => module.Suma);
            break;
        case 'resta':
            result = await Promise.resolve().then(() => __importStar(require(op))).then(module => module.Resta);
            break;
        case 'multiplicacion':
            result = await Promise.resolve().then(() => __importStar(require(op))).then(module => module.Multiplicacion);
            break;
        case 'division':
            result = await Promise.resolve().then(() => __importStar(require(op))).then(module => module.Division);
            break;
        default:
            return console.log(`No existe la operación ${operation} en esta app`);
    }
    return new result(num1, num2).resultado();
};
const operaciones = async (num1, num2, op) => {
    const result = await operacion(num1, num2, op);
    if (result) {
        console.log(result);
    }
};
// prueba
operaciones(5, 3, 'suma');

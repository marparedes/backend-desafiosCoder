"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = exports.Multiplicacion = exports.Resta = exports.Suma = void 0;
class Suma {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    async resultado() {
        return this.num1 + this.num2;
    }
}
exports.Suma = Suma;
class Resta {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    async resultado() {
        return this.num1 - this.num2;
    }
}
exports.Resta = Resta;
class Multiplicacion {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    async resultado() {
        return this.num1 * this.num2;
    }
}
exports.Multiplicacion = Multiplicacion;
class Division {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    async resultado() {
        if (this.num2 === 0) {
            return 'No se puede didvidir por 0';
        }
        return this.num1 / this.num2;
    }
}
exports.Division = Division;

interface Operations {
    resultado(): Promise<any>;
}

class Suma implements Operations {

    private readonly num1: number;
    private readonly num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public async resultado(): Promise<number> {
        return this.num1 + this.num2
    }
}

class Resta implements Operations {

    private readonly num1: number;
    private readonly num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public async resultado(): Promise<number> {
        return this.num1 - this.num2
    }
}

class Multiplicacion implements Operations {

    private readonly num1: number;
    private readonly num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public async resultado(): Promise<number> {
        return this.num1 * this.num2
    }
}

class Division implements Operations {

    private readonly num1: number;
    private readonly num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public async resultado(): Promise<any> {
        if(this.num2 === 0) {
            return 'No se puede didvidir por 0'
        }
        return this.num1 / this.num2
    }
}

export {
    Suma,
    Resta,
    Multiplicacion,
    Division
}
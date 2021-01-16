const op = './operations';

const operacion = async (num1: number, num2: number, operation: string): Promise<any> => {
    let result;
    switch(operation.toLowerCase()) {
        case 'suma':
            result = await import(op).then(module => module.Suma);
            break
        case 'resta':
            result = await import(op).then(module => module.Resta);
            break
        case 'multiplicacion':
            result = await import(op).then(module => module.Multiplicacion);
            break
        case 'division':
            result = await import(op).then(module => module.Division);
            break
        default :
            return console.log(`No existe la operación ${operation} en esta app`);
    }
    return new result(num1, num2).resultado()
}

const operaciones = async (num1: number, num2: number, op: string) => {
    const result = await operacion(num1, num2, op);
    if(result) {
        console.log(result)
    }
}

// prueba
operaciones(5, 3, 'suma')
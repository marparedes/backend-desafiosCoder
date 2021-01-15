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
        default :
            return console.log('Ingrese otro tipo de operación')
    }
    return new result(num1, num2).resultado()
}

const operaciones = async (num1: number, num2: number, op: string) => {
    const result = await operacion(num1, num2, op);
    console.log(result)
}

// prueba
operaciones(5, 3, 'suma')
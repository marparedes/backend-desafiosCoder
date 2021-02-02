const fs = require('fs')

class Archivo {

    constructor(name) {
        this.name = name;
    }

    async leer() {
        try {
            const data = fs.promises.readFile('./' + this.name, 'utf-8');
            return data ? data : '[]';
        } catch (error) {
            console.log(error)
            console.log('El archivo no existe')
        }
    }

    async crearYGuardar(prod){
        try {
            fs.promises.writeFile(`./${this.name}`, JSON.stringify([prod]));
        } catch (error) {
            console.log('El archivo no se pudo crear', error)
        } 
    }


    async guardar(arr, prod) {

        try {
            let arrParse = JSON.parse(arr);
            prod.id = arrParse.length + 1;
            arrParse = [
                ...arrParse,
                prod
            ]
            await fs.promises.appendFile('./' + this.name, JSON.stringify(arrParse))
            console.log('Guardado ok')
        } catch (error) {
            console.log('NO EXISTE, NO SE PUEDE GUARDAR')
        }
    }

    async borrar() {
        try {
            await fs.promises.unlink('./' + this.name);
            console.log('Eliminado ok')
        } catch (error) {
            console.log(error)
        }
    }
}

// prueba


async function test() {

    const file = new Archivo('productos.txt')

    await file.crearYGuardar({
        id: 1,
        title: 'remera1',
        price: 200,
        thumbnail: 'asdjkasd'
    });

    const arr = await file.leer()
    
    await file.guardar(arr, {
        title: 'remera2',
        price: 200,
        thumbnail: 'asdjkasd'
    });
    
    await file.borrar()

}

test();

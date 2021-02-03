import express, { Application, Request, Response } from "express";
import fs from "fs";

const app:Application = express();

app.use(express.json());

interface Producto {
    id: number,
    title: string,
    price: number,
    thumbnail: string
}

const productos:string = fs.readFileSync('./productos.txt', 'utf-8');
const prodsParse:Producto[] = JSON.parse(productos);

let visitas = {
    visitas: {
        items: 0,
        item: 0
    }
}

const randomItem = (prods:Producto[]): Producto[] => {
    let randomId = Math.floor(Math.random() * (prodsParse.length - 1) + 1);
    let prod = prods.filter( (producto:Producto) => producto.id === randomId);
    return prod;
}

app.get('/items', (req:Request, res:Response) => {
    try {
        visitas.visitas.items++;
        res.status(200).send({
            items: prodsParse,
            cantidad: prodsParse.length
        })
    } catch (error) {
        res.status(404).send({msg: 'Ocurrió un error'})
        console.log(error)
    }
})

app.get('/item-random', (req:Request, res:Response) => {
    try {
        visitas.visitas.item++;
        let prod:Producto[] = randomItem(prodsParse);
        res.status(200).send(prod)
    } catch (error) {
        res.status(404).send({msg: 'Ocurrió un error'})
        console.log(error)
    }
})

app.get('/visitas', (req:Request, res:Response) => {
    try {
        res.status(200).send(visitas)
    } catch (error) {
        res.status(404).send({msg: 'Ocurrió un error'})
        console.log(error)
    }
})

const server = app.listen(8080, () => {
    console.log('Server listening - http://localhost:8080')
});
server.on("error", error => console.log(`Error en servidor ${error}`));
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = express_1.default();
app.use(express_1.default.json());
const productos = fs_1.default.readFileSync('./productos.txt', 'utf-8');
const prodsParse = JSON.parse(productos);
let visitas = {
    visitas: {
        items: 0,
        item: 0
    }
};
const randomItem = (prods) => {
    let randomId = Math.floor(Math.random() * (prodsParse.length - 1) + 1);
    let prod = prods.filter((producto) => producto.id === randomId);
    return prod;
};
app.get('/items', (req, res) => {
    try {
        visitas.visitas.items++;
        res.status(200).send({
            items: prodsParse,
            cantidad: prodsParse.length
        });
    }
    catch (error) {
        res.status(404).send({ msg: 'Ocurrió un error' });
        console.log(error);
    }
});
app.get('/item-random', (req, res) => {
    try {
        visitas.visitas.item++;
        let prod = randomItem(prodsParse);
        res.status(200).send(prod);
    }
    catch (error) {
        res.status(404).send({ msg: 'Ocurrió un error' });
        console.log(error);
    }
});
app.get('/visitas', (req, res) => {
    try {
        res.status(200).send(visitas);
    }
    catch (error) {
        res.status(404).send({ msg: 'Ocurrió un error' });
        console.log(error);
    }
});
const server = app.listen(8080, () => {
    console.log('Server listening - http://localhost:8080');
});
server.on("error", error => console.log(`Error en servidor ${error}`));

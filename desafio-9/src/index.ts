import express from 'express'
import { Product , Products } from './Producto'

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let products = new Products([])

router.get('/productos', (req, res) => {
    
    try {
        let productos = products.getProducts()
        if(!productos.length){
            res.send(204).json({error: "No hay productos cargados"});
            return;
        }
        res.json(productos)
    } catch (err) {
        console.log(err)
    }
    
})

router.get('/productos/:id', (req, res) => {
    const { id } = req.params
    const product = products.getProductById(Number(id))
    try {
        if(!product) {
            res.send(400).json({msg: 'Producto no encontrado'});
        }
        res.json(product)
    } catch (err) {
        res.json({error: 'Error al buscar producto'})
    }
})


router.post('/productos', (req, res) => {
    try {
        const { title, price, thumbnail } = req.body
        let prodId = products.getProducts().length + 1
        let product:Product = {
            id: prodId,
            title,
            price,
            thumbnail
        }
        products.addProduct(product)
        res.json(product)
    } catch (error) {
        console.log('Error al agregar el producto: ', error)
    }
})

app.get('/', (req, res) => {
    res.sendFile('C:/Users/HP/Desktop/curso BACKEND/backend-desafiosCoder/desafio-9/public/index.html');
})


router.put('/productos/actualizar/:id', (req, res) => {
    const { id } = req.params
    const product = products.getProductById(Number(id))

    try {
        if(!product) {
            res.send(400).json({msg: 'Producto no encontrado'});
        }
        let updatedProd = products.updateProduct(Number(id), req.body)
        res.json(updatedProd)
    } catch (err) {
        res.json({error: 'Error al buscar producto'})
    }
    
})

router.delete('/productos/borrar/:id', (req, res) => {
    
    const { id } = req.params
    const product = products.getProductById(Number(id))
    try {
        if(!product) {
            res.send(400).json({msg: 'Producto no encontrado'});
        }
        products.deleteProduct(Number(id))
        res.json(product)
    } catch (err) {
        res.json({error: 'Error al eliminar producto'})
    }
    
})

app.use('/api', router)

const server = app.listen(8080, () => {
    console.log('Server listening - http://localhost:8080')
});
server.on("error", error => console.log(`Error en servidor ${error}`));
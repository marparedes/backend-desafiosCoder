import express from 'express'
import { Product , Products } from './Producto'

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("views", "./views")

let products = new Products([])

app.get('/', (req, res) => {
    res.render('form.ejs');
})

app.get('/productos/vista', (req, res) => {
    let productos = products.getProducts();
    res.render('productsView.ejs', { products: productos, listExist: productos.length > 0 ? true : false });
});

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
        res.redirect('back')
    } catch (error) {
        console.log('Error al agregar el producto: ', error)
    }
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
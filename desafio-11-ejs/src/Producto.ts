
interface Product {
    id: number,
    title: string,
    price: number,
    thumbnail: string
}

class Products {
    
    constructor(public products: Product[]){
        this.products = products
    }

    getProducts() {
        return this.products
    }

    getProductById(id:number) {
        const product = this.products.find( prod => prod.id === id)
        return product
    }

    addProduct(product:Product) {
        this.products.push(product)
    }

    updateProduct(id:number, req:any) {
        const prod = this.products.filter(prod => prod.id === id)
        let index = this.products.indexOf(prod[0])
        let update = {
            id,
            title: req.title ? req.title : prod[0].title,
            price: req.price ? req.price : prod[0].price,
            thumbnail: req.thumbnail ? req.thumbnail : prod[0].thumbnail
        }
        this.products.splice(index,1,update)
        return update
    }

    deleteProduct(id:Number) {
        const prods = this.products.filter(prod => prod.id !== id)
        this.products = [...prods]
    }
}

export {
    Product,
    Products
}
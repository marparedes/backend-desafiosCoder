
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
}

export {
    Product,
    Products
}
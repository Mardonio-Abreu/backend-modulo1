class ProductManager{
    constructor(){

        this.products = [];
        
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
        let productCode = code;

        
        
        this.products.push({title, description, price, thumbnail, code, stock});



    }





}
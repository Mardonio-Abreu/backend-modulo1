//Primer desafio
// class that manages a set of products

class ProductManager{
    constructor(){

        this.products = [];
        this.id = 0;
        
    }

               
        addProduct (title, description, price, thumbnail, code, stock) {

        try { if(title.length == 0 || description.length == 0 || price.length == 0 || thumbnail.length == 0 || code.length == 0 || stock.length == 0){console.log("Surprise MotherFather!");}
            }

        catch (e) {
            console.error("Data product incomplete!");
            return;
                       
        }

        let flag = true;

        this.products.forEach((product)=>{
            if (product.code === code){
                flag = false;
                console.log("Code already in use!");
            }
        })

        if (flag){

        let id = this.id++;
        this.products.push({title, description, price, thumbnail, code, stock, id})

        }
                
        }                          
        

        getProducts () {
            return console.log(this.products);
        }

        getProductsById (id) {

            let flag = false;

            this.products.forEach((product)=>{
                                             
                if(product.id === id){
                    console.log(product);
                    flag = true;
                    return;
                    }
                
            }
            )

            if(!flag){
                        console.log("Product not found!");
            }
            
        }
    

        }

    console.log("--------------TESTS-------------------");

    const newProduct = new ProductManager;
    newProduct.getProducts();
    newProduct.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);
    newProduct.getProducts();
    newProduct.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);
    newProduct.getProducts();
    newProduct.getProductsById(0);
    newProduct.getProductsById(9);
  
    




        



    






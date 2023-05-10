// class that manages a set of products.

class ProductManager{
    constructor(){

        this.products = [];
                
    }

           addProduct = (title, description, price, thumbnail, code, stock) => {

        try { if(title.length == 0 || description.length == 0 || price.length == 0 || thumbnail.length == 0 || code.length == 0 || stock.length == 0){console.log("Surprise MotherFather!");}
            }

        catch (e) {
            console.error("Data product incomplete!");
            return;
                       
        }

        
              
        this.products.push({title, description, price, thumbnail, code, stock});
        

    }                          
        

        getProducts = () => {
            return console.log(this.products);
        }

        getProductsById = () => {

            return console.log(this.products);
        }
    

        }

    const newProduct = new ProductManager;

    newProduct.addProduct("mug", "blue mug", 3.50, "/blue-mug.jpeg", 007, 9);

    newProduct.getProducts();



           
        



    






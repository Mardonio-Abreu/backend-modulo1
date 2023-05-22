// class that manages a set of products.

class ProductManager{
    constructor(){

        this.products = [];
        this.id = 0;
        this.file = "data.json";
        this.path = "./";
        
    }

        getCatalogue (fileName){
            const fs = require('fs');
            if(fs.existsSync(this.path + fileName)){
                let catalogueJSON = fs.readFileSync(fileName, 'utf-8');
                let catalogue = JSON.parse(catalogueJSON);
                console.log(catalogue);
                return catalogue;
            }else{
                console.log("File not found!");
                
            }

        }

        createfile (fileName) {
            const fs = require('fs');
            let catalogue = [];
            const nullProduct = ({title: null, description: null, price: null, thumbnail: null, code: null, stock: null});
            catalogue.push(nullProduct);
            const jsonData = JSON.stringify(catalogue, null, 2);
            fs.writeFileSync(this.path + fileName, jsonData);
            console.log("File created!");
        }

                       
        addProduct (title, description, price, thumbnail, code, stock) {
            const fs = require('fs');
        

        try { if(title.length == 0 || description.length == 0 || price.length == 0 || thumbnail.length == 0 || code.length == 0 || stock.length == 0){console.log("Surprise MotherFather!");}
            }

        catch (e) {
            console.error("Data product incomplete!");
            return;
                       
        }

        let flag = true;

        let catalogue = this.getCatalogue(this.path + this.file)

        catalogue.map((product)=>{
            if (product.code === code){
                flag = false;
                console.log("Code already in use!");
            }
        })

        if (flag){

        let id = this.id++;
        catalogue.push({title, description, price, thumbnail, code, stock, id})
        const jsonData = JSON.stringify(catalogue, null, 2);
        fs.writeFileSync(this.path + this.file, jsonData);
        console.log("File updated successfully!")
        }
                
        }                          
        
        getProducts (fileName) {
            let catalogue = this.getCatalogue(fileName);
            return console.log(catalogue);
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
    newProduct.createfile("data.json");
    console.log("empty catalogue");
    newProduct.getCatalogue("data.json");
    console.log("add product Smurf mug");
    newProduct.addProduct("Smurf mug", "blue mug", 3.50, "img/blue-mug.jpeg", "sbm", 3);
    console.log("add repeated product Smurf mug");
    newProduct.addProduct("Smurf mug", "blue mug", 3.50, "img/blue-mug.jpeg", "sbm", 3);
    console.log("last get catalogue call");
    newProduct.getCatalogue("data.json");
    




        



    






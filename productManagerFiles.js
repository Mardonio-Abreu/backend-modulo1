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
                console.log(catalogue.index);
                return catalogue;
            }else{
                console.log("File not found!");
                
            }

        }

        createfile (fileName) {
            const fs = require('fs');
            const nullProduct = ({title: null, description: null, price: null, thumbnail: null, code: null, stock: null});
            const jsonData = JSON.stringify(nullProduct, null, 2);
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

        let catalogue = this.getCatalogue(this.path + this.file);

        catalogue.forEach((product)=>{
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
    newProduct.createfile("test2");
    newProduct.getCatalogue("data.json");
  
    




        



    






class ProductManager{
    constructor(){

        this.products = [];
        
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
        let productCode = code;

        for (let i = 0; i < this.products.length; i++){
            if (productCode === this.products[i].code){
                console.log("Código de producto utilizado anteriormente!");
                         }}


        try{
               this.products.push({title, description, price, thumbnail, code, stock});
            }
        catch(e){
                console.log("Error");
                
            }


            }

        getProducts = () => {
            for (let i = 0; i < this.products.length; i++){
                console.log(this.products[i].title);
                console.log(this.products[i].description);
                console.log(this.products[i].price);
                console.log(this.products[i].thumbnail);
                console.log(this.products[i].code);
                console.log(this.products[i].stock);
            }
        }

        getProductsById = (id_number) => {

            console.log(this.products[i].title);
                console.log(this.products[id_number].description);
                console.log(this.products[id_number].price);
                console.log(this.products[id_number].thumbnail);
                console.log(this.products[id_number].code);
                console.log(this.products[id_number].stock);
        }

        

        }




           
        



    






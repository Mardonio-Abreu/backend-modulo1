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

        }


           
        



    






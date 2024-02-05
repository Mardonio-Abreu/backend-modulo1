/*
La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar
desde el momento de generar su instancia.

Debe guardar objetos con el siguiente formato:
- id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
- title (nombre del producto)  
- description (descripción del producto)
- price (precio)
- thumbnail (ruta de imagen)
- code (código identificador)
- stock (número de piezas disponibles)

Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y
guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).

Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.

Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id
especificado y devolverlo en formato objeto

Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo 
a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. 

NO DEBE BORRARSE SU ID

Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
*/

const fs = require('fs');
class ProductManager {

        

    static id = 0;

    constructor () {

        this.productArray = [];
        this. data = JSON.stringify(this.productArray);
        this.path = "itemList.json";
        fs.writeFile, (this.path, this.data, (err) => {
            if(err) return console.log(`Error while creating file: ${err}`);
        });
        console.log("File written successfully!");
    }

    

    readItemList () {
        fs.readFile(this.path, 'utf-8', (error, result) => {    
            return error ? console.log(`Error while reading the file ${err}`) : JSON.parse(result);    
        });
    }

    writeItemToList (list) {
        const newList = JSON.stringify(list);
        fs.writeFile(this.path, newList, (error) => {
            if(error) return console.log(`Error while writing the file: ${error}`);
        });
    }
    
    addProduct (productTitle, productDescription, productPrice, productThumbnail, productCode, productStock) {

        let flag = true;
        this.productArray.forEach( function(item){
            item.code === productCode ? flag = false : flag = true;
            return flag;
        });

        if (flag){        
            if (productTitle && productDescription && productPrice && productThumbnail && productCode && productStock){
                
                const productId = ProductManager.id++;

                this.productArray.push({title: productTitle, description: productDescription, price: productPrice, thumbnail: productThumbnail, code: productCode, stock: productStock, id: productId});
                console.log(`Product : ${productTitle} with code: ${productCode}, and ID: ${productId} added!`);
            } else {
                console.log("Incomplete product information or you can't add a product with zero stock");
            }
        } else {
            console.log(`Product code: ${productCode} already in use!`);
        }
    }

    getProducts () {
        return this.productArray;
    }

    getProductById (id) {
        const itemIndex = this.productArray.findIndex(itemIndex => itemIndex.id === id);
        if (itemIndex != -1){
            return (this.productArray[itemIndex]);
        } else {
            console.log(`ID: ${id} not found!`);
        }
       
    }
}

//Tests -------------------------------------------------------------------------------------------------------------------
//Se creará una instancia de la clase “ProductManager”
const productManagerOne = new ProductManager();

answer = productManagerOne.readItemList();

console.log(answer);
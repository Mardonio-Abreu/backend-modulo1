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

    constructor (file) {
        this.path = file;
        this.createFile();
        }

    createFile () {
        const newArray = [];
        const data = JSON.stringify(newArray);
        fs.writeFileSync(this.path, data, 'utf-8');
    } 
    
    getItemList () {
        return JSON.parse(fs.readFileSync(this.path));
    }

    writeItemToList (list) {
        const newList = JSON.stringify(list);
        fs.writeFileSync(this.path, newList, 'utf-8');
    }
    
    addProduct (productTitle, productDescription, productPrice, productThumbnail, productCode, productStock) {

        const itemList = this.getItemList();

        let flag = true;
        itemList.forEach( function(item){
            item.code === productCode ? flag = false : flag = true;
            return flag;
        });

        if (flag){        
            if (productTitle && productDescription && productPrice && productThumbnail && productCode && productStock){
                
                const productId = ProductManager.id++;

                itemList.push({title: productTitle, description: productDescription, price: productPrice, thumbnail: productThumbnail, code: productCode, stock: productStock, id: productId});
                this.writeItemToList(itemList);
                console.log(`Product : ${productTitle} with code: ${productCode}, and ID: ${productId} added!`);
            } else {
                console.log("Incomplete product information or you can't add a product with zero stock");
            }
        } else {
            console.log(`Product code: ${productCode} already in use!`);
        }
    }

    getProducts () {
        return this.getItemList();
    }

    getProductById (id) {

        const itemList = this.getItemList();
        const itemIndex = itemList.findIndex(itemIndex => itemIndex.id === id);
        if (itemIndex != -1){
            return (itemList[itemIndex]);
        } else {
            console.log(`ID: ${id} not found!`);
        }
       
    }

    deleteProduct (id) {
        const itemList = this.getItemList();
        const itemIndex = itemList.findIndex(itemIndex => itemIndex.id === id);
        if (itemIndex != -1){
            itemList.pop(itemIndex);
            console.log(`Item with ID: ${id} removed!`);
        } else {
            console.log(`ID: ${id} not found!`);
        }

    }

    updateProduct(id, field, fieldValue) {
        const itemList = this.getItemList();
        const itemIndex = itemList.findIndex(itemIndex => itemIndex.id === id);
        if (itemIndex != -1){
            itemList[itemIndex][field] = fieldValue;
            this.writeItemToList(itemList);
            console.log(`Item with ID: ${id}, updated field: ${field} with the value: ${fieldValue}`);
        } else {
            console.log(`ID: ${id} not found!`);
        }

    }

}


//Tests -------------------------------------------------------------------------------------------------------------------
//Se creará una instancia de la clase “ProductManager”
file = "itemList.json";

const productManagerOne = new ProductManager(file);

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(productManagerOne.getProducts());

/*
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25

El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
*/
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc123",25);
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc124",25);
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc125",25);
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc126",25);

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productManagerOne.getProducts());

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc123",25);

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(productManagerOne.getProductById(0));

productManagerOne.updateProduct(0, "code", "123aaa");

console.log(productManagerOne.getProductById(0));

//productManagerOne.deleteProduct(1);

//productManagerOne.deleteProduct(5);

//console.log(productManagerOne.getProducts());


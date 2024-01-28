/*
TO-DO:
Realizar una clase “ProductManager” que gestione un conjunto de productos
✓ Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
✓ Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial
✓ Cada producto que gestione debe contar con las propiedades:
- title (nombre del producto)
- description (descripción del producto)
- price (precio)
- thumbnail (ruta de imagen)
- code (código identificador)
- stock (número de piezas disponibles)

✓ Validar que no se repita el campo “code” y que todos los campos sean obligatorios

✓ Al agregarlo, debe crearse con un id autoincrementable

✓ Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

✓ Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id

✓ En caso de no coincidir ningún id, mostrar en consola un error “Not found”

Author Mardonio Abreu 
*/

class ProductManager {

    static id = 0;

    constructor () {
        
        this.productArray = [];

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

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productManagerOne.getProducts());

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc123",25);

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(productManagerOne.getProductById(0));
productManagerOne.getProductById(6);

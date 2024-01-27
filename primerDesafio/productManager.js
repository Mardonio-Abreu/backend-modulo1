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

Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id

En caso de no coincidir ningún id, mostrar en consola un error “Not found”

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
        console.log(this.productArray);
    }

    getProductById (id) {
        const itemIndex = this.productArray.findIndex(itemIndex => itemIndex.id === id);
        console.log(this.productArray[itemIndex]);
    }
}

//Tests

const productManagerOne = new ProductManager();

productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc123",25);
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc124",25);
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc125",25);

productManagerOne.getProducts();

productManagerOne.getProductById(1);
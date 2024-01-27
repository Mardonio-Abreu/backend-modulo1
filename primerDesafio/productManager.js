/*
TO-DO
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

Validar que no se repita el campo “code” y que todos los campos sean obligatorios

Al agregarlo, debe crearse con un id autoincrementable

Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

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

        let flag = false;
        this.productArray.forEach( function(item){
            item.code === productCode ? flag = true : flag = false;
            return flag;
        });

        console.log(flag);
        
        console.log(productTitle, productDescription, productPrice, productThumbnail, productCode, productStock);
        
        
        if (productTitle && productDescription && productPrice && productThumbnail && productCode && productStock){
            this.productArray.push({title: productTitle, description: productDescription, price: productPrice, thumbnail: productThumbnail, code: productCode, stock: productStock, id: ProductManager.id++});
        } else {
            console.log("Incomplete product information or you can't add a product with zero stock");
        }
    }

}

//Tests

const productManagerOne = new ProductManager();

productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc123",25);
productManagerOne.addProduct( "producto prueba",  "Este es un producto prueba", 200, "Sin imagen", "abc123",25);
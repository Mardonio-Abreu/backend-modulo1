//Class that creates the shopping cart
class Cart {
    
    static cartArray = [];
    static cartId = 0;

    static addToCartArray (newCart) {
        Cart.cartArray.push(newCart);
    }

    static getCartArray () {
        return Cart.cartArray;
    }

    static getCartById (id) {
        const cart  = Cart.cartArray.find(item => item.id === id);
        return cart;
    }

    
   


    constructor (){
        
        this.id = Cart.cartId++;
        this.newCart = [];
    }

}

module.exports = Cart;
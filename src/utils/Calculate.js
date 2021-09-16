export const getTotalQuantity = cartItems => cartItems.reduce((total, elem) => {
         total += elem.qty;
         return total
     }, 0)
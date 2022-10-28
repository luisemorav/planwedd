// import { createContext, useEffect, useState } from "react";

// /* Creamos el context, se le puede pasar un valor inicial */
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   /* Creamos un estado para el carrito */
//   const [cartItems, setCartItems] = useState(() => {
//     try {
//       const productosEnLocalStorage = localStorage.getItem("cartProducts");
//       return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
//     } catch (error) {
//       return [];
//     }
//   });

//    useEffect(() => {
//     localStorage.setItem("cartProducts", JSON.stringify(cartItems));
//   }, [cartItems]);

//    const AddItemToCart = (product) => {
//       const inCart = cartItems.find(
//       (productInCart) => productInCart.id === product.id
//     );

//     if (inCart) {
//       setCartItems(
//         cartItems.map((productInCart) => {
//           if (productInCart.id === product.id) {
//             return { ...inCart, amount: inCart.amount + 1 };
//           } else return productInCart;
//         })
//       );
//         } else {
//       setCartItems([...cartItems, { ...product, amount: 1 }]);
//     }
//   };

//    const DeleteItemToCart = (productId) => {
//         const inCart = cartItems.find(
//       (productInCart) => productInCart.id === productId
//     );

//         if (inCart.amount === 1) {
//       setCartItems(
//         cartItems.filter((productInCart) => productInCart.id !== productId)
//       );
//     } else {
//           setCartItems(
//         cartItems.map((productInCart) => {
//           if (productInCart.id === productId) {
//             return { ...inCart, amount: inCart.amount - 1 };
//           } else return productInCart;
//         })
//       );
//     }
//   };

//   return (
//        <CartContext.Provider
//       value={{ cartItems, AddItemToCart, DeleteItemToCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
// import { createContext } from "react";

// const UserContext = createContext()
// export default UserContext
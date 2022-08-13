import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./style.module.scss";

export const ItemCart = ({ item }) => {
 
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);
  const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => AddItemToCart(item)}>AGREGAR</button>
            <button onClick={() => DeleteItemToCart(id)}>SACAR</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: S/{item.amount * item.price}</p>
          <button onClick>PAGAR</button>
        </div>
      </div>
    </div>
  );
};

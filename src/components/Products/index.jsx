import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./style.module.scss";
import { ProductsData } from "../../data/Data";

const Products = () => {
    const { AddItemToCart } = useContext(CartContext);
  
  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - S/{product.price}
            </p>
          </div>
          <button onClick={() => AddItemToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import styles from "./ProductsCard.module.css";

const ProductsCard = ({product}) => {

    let [arr, setArr] = useState([]);
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(product.price);


    const add = () => {
        setArr((prev) => [...prev, product]);
        setCount(count + 1);
        setPrice(price + product.price);
    }
    
    const remove = () => {
        if (count > 1) {
            setArr((prev) => {
                const newArr = [...prev]
                newArr.pop()
                return newArr
            })
            setCount(count - 1)
            setPrice(price - product.price)
        }
    }

    return (
        <div className={styles.productscard}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{price} $</p>
            <p className={styles.rating}>
                ⭐️ {product.rating.rate} <span>({product.rating.count})</span>
            </p>
            <div className={styles.buttons}>
                <button onClick={remove}>-</button>
                <p className={styles.count}>{count}</p>
                <button onClick={add}>+</button>
            </div>
        </div>
    );
};

export default ProductsCard;
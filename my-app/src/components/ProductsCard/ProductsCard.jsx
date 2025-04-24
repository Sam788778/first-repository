import styles from "./ProductsCard.module.css";

const ProductsCard = ({product}) => {
    

    return (
        <div className={styles.productscard}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} $</p>
            <p className={styles.rating}>
                ⭐️ {product.rating.rate} <span>({product.rating.count})</span>
            </p>
        </div>
    );
};

export default ProductsCard;
import styles from './container.module.css';
import ProductsCard from '../ProductsCard/ProductsCard';

const Container = ({products}) => {
    return (
        <div className={styles.container}>
            {
                products.map((product) => {
                    return <ProductsCard product={product}/>
                })
            }
        </div>
    )
}

export default Container;
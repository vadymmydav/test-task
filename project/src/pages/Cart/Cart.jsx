import React from "react";
import Product from "../../components/Product/Product";
import styles from './Cart.module.scss'

const Cart =({products}) => {
    return(
<div>
    {products?.map(product =>  <Product
        name={product.name}
        price={product.price}
        image={product.image}
        key={product.name}
        quantity={product.quantity}
        ifCart
      />)}
</div>
    )
}
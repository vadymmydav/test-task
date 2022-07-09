import React from "react";
import { Panel, InputNumber, Button } from "rsuite";
import styles from './Product.module.scss'

const Product = ({ ifCart, name, price, image , quantity}) => (
  <Panel
    shaded
    bordered
    bodyFill
    style={{ display: "inline-block", width: 240 }}
  >
    <img src={image} height="240" width='280'alt='food'/>
    {ifCart ? (
      <div>
        <p>{name}</p>
        <p>{price}</p>
        <div style={{ width: 160 }}>
          <InputNumber value={quantity} />
        </div>
      </div>
    ) : (
      <Panel>
        <div className={styles.block}>
          <p >{name}</p>
          <p >{price}</p>
          </div>
          <Button appearance="primary" className={styles.btn}>Add to Cart</Button>
      </Panel>
    )}
  </Panel>
);

export default Product;

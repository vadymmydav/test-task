import React from "react";
import { Panel, InputNumber, Button } from "rsuite";
import styles from "./Product.module.scss";

const Product = ({ ifCart, product, onAddProduct, onChangeQuantity }) => {
  const { name, price, image, quantity } = product;
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", width: 320 }}
    >
      <div className={styles.imageBlock}>
        <img src={image} height="240" width="280" alt="food" />
      </div>
      {ifCart ? (
        <div className={styles.cartBlock}>
          <div>
          <p>{name}</p>
          <p>{price}</p>
          </div>

          <div style={{ width: 100 }}>
            <InputNumber
              value={quantity}
              step={1}
              onChange={(e) => onChangeQuantity({ product, quantity: e })}
            />
          </div>
        </div>
      ) : (
        <Panel>
          <div className={styles.block}>
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <Button
            appearance="primary"
            className={styles.btn}
            onClick={() => onAddProduct(product)}
          >
            Add to Cart
          </Button>
        </Panel>
      )}
    </Panel>
  );
};

export default Product;

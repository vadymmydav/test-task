import React from "react";
import { Button } from "rsuite";
import styles from './Footer.module.scss'

const Footer = ({ price }) => (
  <div className={styles.container}>
    <p className={styles.totalPriceBlock}>Total price: <span className={styles.price}>{price}</span></p>
    <Button appearance="primary" className={styles.btn}>
      Submit
    </Button>
  </div>
);
export default Footer;
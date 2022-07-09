import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/Routes";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <span className={styles.shop} onClick={() => navigate(ROUTES.HOME)}>
        Shop
      </span>
      <span> | </span>
      <span className={styles.cart} onClick={() => navigate(ROUTES.CART)}>
        Shopping Cart
      </span>
    </div>
  );
};

export default Navigation;

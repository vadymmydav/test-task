import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopActions } from "../../redux/actions/shopActions";
import { cartActions } from "../../redux/actions/cartActions";
import Product from "../../components/Product/Product";
import Shops from "../Shops/Shops";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  const { addProduct } = cartActions;
  const selectedShop = useSelector((state) => state.shop.selectedShop);
  const shops = useSelector((state) => state.shop.shops);
  const cart = useSelector((state) => state.cart);
  console.log({ cart,selectedShop });

  const dispatch = useDispatch();
  const onSelectShop = (shop) => dispatch(shopActions.setSelectedShop(shop));

  const handleAddProduct = (product) => dispatch(addProduct(product));
  return (
    <div className={styles.container}>
      <Shops shops={shops} onSelectShop={onSelectShop} />
      <div className={styles.products}>
        {selectedShop?.map((product) => (
          <Product
            product={product}
            key={product.name}
            onAddProduct={handleAddProduct}
          />
        ))}
      </div>
    </div>
  );
};
export default Catalog;

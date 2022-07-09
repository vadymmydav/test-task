import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/Product/Product";
import UserForm from "../../components/UserForm/UserForm";
import { cartActions } from "../../redux/actions/cartActions";
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.cart.user);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cart = useSelector((state) => state.cart);
  const {
    changeQuantity,
    setUserName,
    setUserPhone,
    setUserEmail,
    setUserAddress,
  } = cartActions;
  console.log({ cart });
  console.log({ products, user, totalPrice });

  const onUpdateName = (name) => dispatch(setUserName(name));
  const onUpdateEmail = (email) => dispatch(setUserEmail(email));
  const onUpdatePhone = (phone) => dispatch(setUserPhone(phone));
  const onUpdateAddress = (address) => dispatch(setUserAddress(address));
  const onChangeQuantity = (product) => dispatch(changeQuantity(product));


  if (!products || products?.length === 0) {
    return <div className={styles.emptyCart}> The Shopping Cart is empty </div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.form}>
          <UserForm
            user={user}
            onUpdateName={onUpdateName}
            onUpdateEmail={onUpdateEmail}
            onUpdatePhone={onUpdatePhone}
            onUpdateAddress={onUpdateAddress}
          />
        </div>

        <div className={styles.productsBlock}>
          {products?.map((product) => (
            <Product
              key={product.name}
              product={product}
              ifCart
              onChangeQuantity={onChangeQuantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

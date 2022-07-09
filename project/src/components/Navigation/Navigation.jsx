import React from "react";
import { Breadcrumb } from "rsuite";
import { Link } from "react-router-dom";

const NavLink = React.forwardRef((props, ref) => {
  const { href, as, ...rest } = props;
  return (
    //<Link href={href} as={as}>
    <a href={href} {...rest} />
    //</Link>
  );
});

const Navigation = () => (
  <Breadcrumb separator="   |    ">
    <Breadcrumb.Item as={NavLink} href="/shop">
      Shop
    </Breadcrumb.Item>
    <Breadcrumb.Item as={NavLink} href="/cart">
      Shopping Cart
    </Breadcrumb.Item>
  </Breadcrumb>
);

export default Navigation;

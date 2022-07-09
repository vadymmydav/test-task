import React from "react";
import Product from "../../components/Product/Product";
import Shops from "../Shops/Shops";

const Catalog = ({ data, selectedShop, shops }) => (
  <div style={{ display: "flex" }}>
    <Shops shops={shops} />
    <div style={{display: 'flex',flexWrap:'wrap', justifyContent: "space-between", rowGap: 30, columnGap:15}}>
    {data[selectedShop]?.map((product) => (
      <Product
        name={product.name}
        price={product.price}
        image={product.image}
        key={product.name}
      />
    ))}
    </div>
  </div>
);
export default Catalog;

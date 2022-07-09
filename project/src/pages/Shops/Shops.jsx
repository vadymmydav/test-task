import React from "react";

import { Sidenav, Nav } from "rsuite";
import styles from "./Shops.module.scss";

const Shops = ({ shops, onSelectShop }) => (
  <div className={styles.container}>
   <p className={styles.title}> Shops: </p>
    <Sidenav>
      <Sidenav.Body>
        <Nav activeKey="1">
          {shops &&
            shops?.map((shop) => (
              <Nav.Item
                eventKey={shop}
                key={shop}
                onClick={() => onSelectShop(shop)}
                className={styles.shop}
              >
                {shop}
              </Nav.Item>
            ))}
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);

export default Shops;

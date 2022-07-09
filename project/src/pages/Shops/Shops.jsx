import React from "react";
import { Sidenav, Nav } from "rsuite";
import styles from "./Shops.module.scss";

const Shops = ({ shops }) => (
  <div>
    <Sidenav defaultOpenKeys={["3", "4"]}>
      <Sidenav.Body>
        <Nav activeKey="1">
          {shops &&
            shops?.map((shop) => (
              <Nav.Item
                eventKey={shop}
                key={shop}
                onClick={() => console.log(shop)}
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

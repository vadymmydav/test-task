import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './redux/store'; 
import { ROUTES } from "./common/Routes";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./pages/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog";
import "rsuite/dist/rsuite.min.css";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Navigation />
        <Routes>
          <Route path={ROUTES.HOME} element={<Catalog />} exact/>
          <Route path={ROUTES.CART} element={<Cart />} exact/>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

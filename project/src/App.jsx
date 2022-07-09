import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Catalog from "./pages/Catalog/Catalog";
import UserForm from "./components/UserForm/UserForm";
import { mockData } from "./mockData/mockData";
import "rsuite/dist/rsuite.min.css";
import "./App.css";

const App = () => {
  const shops = Object.keys(mockData);

  return (
    <div className="App">
      <Catalog data={mockData} selectedShop="bolt" shops={shops}/>
      <Navigation />
      <UserForm />
    </div>
  );
};

export default App;

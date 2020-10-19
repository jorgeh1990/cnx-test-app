import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingButton from "./Components/LoadingButton";
import TabContent from "./Components/TabContent";
import AppContext from "./AppContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [products, setProducts] = useState([]);

  const handleClickReload = () => {
    setIsLoading(true);
    setPeople([]);
    setProducts([]);
    loadData();
  };

  const loadProductosByColor = async (color) => {
    setIsLoading(true);
    setProducts([]);
    const response = await fetch('https://cnx-test.azurewebsites.net/api/ProductFuntion?color='+color);
    const products = await response.json();
    setProducts(products)
    setIsLoading(false);
    
  }

  const loadData = async () => {
    setIsLoading(true);
    try {
      let [people, products] = await Promise.all([
        fetch(
          "https://cnx-test.azurewebsites.net/api/PeopleFuntion"
        ).then((req) => req.json()),
        fetch(
          "https://cnx-test.azurewebsites.net/api/ProductFuntion"
        ).then((req) => req.json()),
      ]);

      setPeople(people);
      setProducts(products);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{ people, products, loadProductosByColor }}>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md">
            <LoadingButton
              handleClick={handleClickReload}
              isLoading={isLoading}
              label="Reload Data"
            ></LoadingButton>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md">
            <TabContent/>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

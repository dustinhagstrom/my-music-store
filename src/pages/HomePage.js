import React, { useEffect, useState, useReducer } from "react";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import { fetchProducts } from "../fetchData";
import ProductList from "../components/ProductList";

const ADD_TO_CART_ACTION = "ADD_TO_CART";

// ACTION CREATORS
// Helper functions that easily create actions.

const addToCartActionCreator = ({ id, title, price }) => {
  return {
    type: ADD_TO_CART_ACTION,
    payload: { id, title, price },
  };
};

//Actions: simple JS objects that tell us how the state should change. All actions must include a type property.

const HomePage = () => {
  // 1. because we need to get data from db when user goes to homepage we use ueh w/ empty array.
  // 2. we take that promise and we need to store it in a data store.
  // 3. now we make a useState with an empty array that we can fill.

  //this data store "productData" is a result of needing to store data from the database.
  const [productData, setProductData] = useState([]);

  //reducer is named b/c it asks like a reduce method of array. so it takes a list or something and returns one thing. actions run through the input parameter of reducer but only one matches.
  const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      return [...state, action.payload];
    }
  };

  const [shoppingCart, dispatch] = useReducer(reducer, []);

  const addItemToCart = ({ id, title, price }) => {
    dispatch(
      addToCartActionCreator({
        id,
        title,
        price,
      })
    );
  };

  //every time that someone comes to the website, I want to call data from db here.
  useEffect(() => {
    //hey fetch the products and once you have the data then do the following
    fetchProducts().then((databaseData) => {
      setProductData(databaseData);
    });
  }, []);

  return (
    <Layout>
      <Box sx={{ height: "500px" }}>
        <ProductList
          products={productData}
          addItemToCart={addItemToCart}
        ></ProductList>
      </Box>
    </Layout>
  );
};

export default HomePage;

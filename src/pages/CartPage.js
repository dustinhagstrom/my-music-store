import React from "react";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import { useShoppingCart } from "../context/shoppingCartContext";

const CartPage = () => {
  const { shoppingCart, removeFromCart } = useShoppingCart();

  if (shoppingCart.length < 1) {
    return <Layout>There are no items to show here.</Layout>;
  }

  return (
    <Layout>
      <Box>
        {shoppingCart.map((item) => (
          <Box>
            {item.title} - {item.price} {item.quantity}{" "}
            <button onClick={() => removeFromCart(item.id)}>remove me</button>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default CartPage;

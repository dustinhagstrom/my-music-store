// Actions: simple javascript objects that tell us how the state should change. all actions must include a type propery.

import { createContext, useContext, useReducer } from "react";

// {
//   type: "indicates the type of action",
// }

// Hey I am the state reducer I get called everythime an action is dispatched.
// The arguments react calls me with are the currentstate and the action that was just dispatched.
// Whatever I return is the new state

const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);

const ADD_TO_CART_ACTION = "ADD_TO_CART";
const REMOVE_FROM_CART_ACTION = "REMOVE_FROM_CART_ACTION";

// ACTION CREATORS
// Helper functions that easily create actions.

const addToCartActionCreator = ({ id, title, price }) => {
  return {
    type: ADD_TO_CART_ACTION,
    payload: { id, title, price },
  };
};

const removeFromCartActionCreator = (itemId) => {
  return {
    type: REMOVE_FROM_CART_ACTION,
    payload: {
      id: itemId,
    },
  };
};

//reducer function

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART_ACTION) {
    const {
      payload: { id, title, price, image },
    } = action;

    const itemFound = state.find((item) => item.id === action.payload.id);

    if (itemFound) {
      return [
        ...state.filter((item) => item.id !== action.payload),
        {
          ...itemFound,
          quantity: itemFound.quantity + 1,
        },
      ];
    }

    return [
      ...state,
      {
        id,
        title,
        price,
        image,
        quantity: 1,
      },
    ];
  }
  if (action.type === REMOVE_FROM_CART_ACTION) {
    const itemFound = state.find((item) => item.id === action.payload.id);

    if (itemFound) {
      if (itemFound.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }

      return [
        ...state.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity - 1,
        },
      ];
    }
  }
};

export const ShoppingCartContextProvider = (props) => {
  const { children } = props;

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

  const removeFromCart = (id) => {
    dispatch(removeFromCartActionCreator(id));
  };

  return (
    <shoppingCartContext.Provider
      value={{ shoppingCart, addItemToCart, removeFromCart }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

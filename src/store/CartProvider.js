import React from "react";
import CartContext from "./cart-context";
import { useState } from "react";

function CartProvider(props) {
  const [selected, setSelected] = useState({});
  const [chosen, setChosen] = useState("Play");

  function addHandler(item) {
    setSelected({ item });
  }
  function chosenHandler(item1) {
    setChosen(item1);
  }

  //console.log(chosen);

  const cartContext = {
    items: selected,
    list: chosen,
    addItem: addHandler,
    addChosen: chosenHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

// import React from "react";
// import CartContext from "./cart-context";
// import { useState } from "react";

// function CartProvider(props) {
//   const [selected, setSelected] = useState([]);
//   console.log(selected);
//   const onAddHandler = (item) => {
//     setSelected([item]);
//   };

//   const cartContext = {
//     items: selected,
//     addItem: onAddHandler,
//   };
//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// }

// export default CartProvider;

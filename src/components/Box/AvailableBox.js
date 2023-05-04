import React from "react";
import ITEMBOX from "./itemBox";
import BoxItem from "./BoxItem";
import "./AvailableBox.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { useState } from "react";

function AvailableBox(props) {
  const cartCtx = useContext(CartContext);

  const house = cartCtx.list;
  console.log(house);

  const onAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const houseFiltered = ITEMBOX.filter((data) => {
    const houseChosen = data.name;
    //console.log(houseChosen);
    return houseChosen === house;
  });

  const listHouese = houseFiltered.map((item) => (
    <div
      onClick={() => {
        onAddHandler(item);
      }}
    >
      <BoxItem
        key={item.id}
        title={item.title}
        img={item.img}
        img2={item.img}
        img3={item.img}
        img4={item.img}
        img5={item.img}
        img6={item.img}
        star={item.star}
        love={item.icon}
        date={item.date}
        loc={item.loc}
        price={item.price}
      />
    </div>
  ));

  return <div className="box mb-5 pb-5">{listHouese}</div>;
}

export default AvailableBox;

// import React from "react";
// import ITEMBOX from "./itemBox";
// import BoxItem from "./BoxItem";
// import "./AvailableBox.css";
// import CartContext from "../../store/cart-context";
// import { useContext } from "react";

// function AvailableBox(props) {
//   const cartCtx = useContext(CartContext);
//   const onAddHandler = (item) => {
//     cartCtx.addItem(item);
//   };
//   const listHouese = ITEMBOX.map((item) => (
//     <div
//       onClick={() => {
//         onAddHandler(item);
//       }}
//     >
//       <BoxItem
//         key={item.id}
//         title={item.title}
//         img={item.img}
//         img2={item.img}
//         img3={item.img}
//         img4={item.img}
//         img5={item.img}
//         img6={item.img}
//         star={item.star}
//         love={item.icon}
//         date={item.date}
//         loc={item.loc}
//         price={item.price}
//       />
//     </div>
//   ));
//   return <div className="box">{listHouese}</div>;
// }

// export default AvailableBox;

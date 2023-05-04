import React, { useContext, useEffect } from "react";
import Filters from "../Filters/Filters";

import Box from "../Box/Box";
import Footer from "../Footer/Footer";
import SearchDate from "../SearchDate/SearchDate";
import { useState } from "react";
import AvailableBox from "../Box/AvailableBox";
import CartContext from "../../store/cart-context";

function Home(props) {
  const [chosen, setChosen] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   We use the useEffect hook to add and remove the scroll event listener to the window object.

  // In React, we typically want to separate side effects from rendering. Side effects are any operations that don't directly affect the UI, such as adding or removing event listeners, making network requests, or updating the browser's localStorage.

  // The useEffect hook allows us to perform side effects in a functional component. It takes two arguments: a function that runs after the component mounts, and an array of dependencies that determines when the function should run. If the dependencies array is empty, the function runs only once after the component mounts.

  // In this case, we use useEffect to add a scroll event listener to the window object after the HomePage component mounts. We also return a cleanup function that removes the event listener when the component unmounts. This ensures that we don't add multiple event listeners to the window object, which could cause memory leaks.

  // By using useEffect, we're following the React best practice of separating side effects from rendering.

  const cartCtx = useContext(CartContext);

  const addChosenHandler = (item1) => {
    cartCtx.addChosen(item1);
  };

  return (
    <div className="scrollable">
      <div className="container">
        <Filters onChosen={addChosenHandler} />
        <AvailableBox items={setChosen} />
      </div>
    </div>
  );
}

export default Home;

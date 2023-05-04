import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import InfoHouse from "./components/InfoHouse/InfoHouse";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import { useEffect, useState } from "react";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<InfoHouse />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

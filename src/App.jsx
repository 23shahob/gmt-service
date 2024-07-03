import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import Guarantee from "./pages/Guarantee";
import Blog from "./pages/Blog";
import Stock from "./pages/Stock";
import TurnKey from "./pages/TurnKey";
import Manufacturers from "./pages/Manufacturers";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/turnkey" element={<TurnKey />} />
        <Route path="/manufacturer" element={<Manufacturers />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

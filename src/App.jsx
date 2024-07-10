import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import CatalogGoods from "./pages/CatalogGoods";
import Cart from "./redux/cart/Cart";
import Wishlist from "./pages/Wishlist";
import ProductView from "./pages/ProductView";
import Compare from "./pages/Compare";
import Personal from "./pages/Personal";
import { useSelector } from "react-redux";
import Breadcrumb from "./components/Breadcrumb";

const App = () => {
  const showFooter = location.pathname !== "/personal";

  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <>
      <Header />
      {/* {checking && <Breadcrumb breadCrumb={breadCrumb} />} */}
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/:product" element={<CatalogGoods />} />
        <Route path="/product/:productId" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/compare" element={<Compare />} />
        <Route
          path="/personal"
          element={authUser ? <Personal /> : <Navigate to="/" />}
        />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default App;

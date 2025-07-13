import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/hero/Hero.jsx";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Learn from "./components/learn/Learn.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx"

createRoot(document.getElementById("root")).render(
  <>
    <Header/>
    <Hero/>
    <Products/>
    <Learn/>
    <Testimonial/>
  </>
);

import React, { useState } from "react";
import ProductList from "./components/product/productList.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/productDetail.js";
import FavoriteProducts from "./components/product/favoriteProducts.js";
import { FavoriteProductProvider } from "./context/favoriteProductContext.js";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <FavoriteProductProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorite" element={<FavoriteProducts />} />
          </Routes>
        </Router>
      </FavoriteProductProvider>
    </Container>
  );
}

export default App;

import React, { useContext } from "react";
import { FavoriteProductContext } from "../context/favoriteProductContext";
import Navigation from "../navigation/navigation";
import Product from "../product/product.js";

function FavoriteProducts() {
  const { favoriteProducts } = useContext(FavoriteProductContext);

  return (
    <div>
      <h1>Favourites</h1>
      <Navigation/>
      <div style={{ width: "30%", height: "30%" }}>
        {favoriteProducts.length !== 0 ? (
          favoriteProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))
        ) : (
          <p>You haven't chosen any favorites yet!</p>
        )}
      </div>
    </div>
  );
}

export default FavoriteProducts;

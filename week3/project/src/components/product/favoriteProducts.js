import React, { useContext } from "react";
import { FavoriteProductContext } from "../../context/favoriteProductContext";
import Navigation from "../navigation/navigation";
import Product from "../product/product.js";
import Grid from "@mui/material/Unstable_Grid2";

function FavoriteProducts() {
  const { favoriteProducts } = useContext(FavoriteProductContext);

  return (
    <div>
      <Navigation />
      <h1>Favourites</h1>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
          {favoriteProducts.length !== 0 ? (
            favoriteProducts.map((product, index) => (
              <Grid key={index} xs={12} sm={6} md={4}>
                <Product product={product} key={index} />
              </Grid>
            ))
          ) : (
            <p>You haven't chosen any favorites yet!</p>
          )}
      </Grid>
    </div>
  );
}

export default FavoriteProducts;
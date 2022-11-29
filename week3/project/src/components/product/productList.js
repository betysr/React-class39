import React, { useState, useEffect, useContext } from "react";
import Product from "./product";
import Grid from "@mui/material/Unstable_Grid2";
import Category from "../category/category.js";
import { RotatingLines } from "react-loader-spinner";
import Navigation from "../navigation/navigation";
import useFetch from "../../hooks/useFetch";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectedCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const productUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : `https://fakestoreapi.com/products`;

  const {data, isLoading, error} = useFetch(productUrl);

  return (
    <div>
      {error && "Error"}
      {isLoading ? (
        <RotatingLines
          strokeColor="green"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      ) : (
        <div>
          <Navigation />
          <Category handleSelectedCategory={handleSelectedCategory} />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 12, sm: 6, md: 4 }}
          >
            {data.map((product, index) => (
              <Grid key={index} xs={12} sm={6} md={4}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default ProductList;

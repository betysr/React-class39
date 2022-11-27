import React, { useState, useEffect, useContext } from "react";
import Product from "./product";
import Grid from "@mui/material/Unstable_Grid2";
import Category from "../category/category.js";
import { RotatingLines } from "react-loader-spinner";
import { FavoriteProductContext } from "../context/favoriteProductContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoad, setIsLoad] = useState(true);
  const { handleAddFavorite, handleRemoveFavorite, favoriteIds } = useContext(
    FavoriteProductContext
  );

  const handleSelectedCategory = (categoryName) => {
    console.log("new fav product added");
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Something went wrong with API!");
        }
        const data = await response.json();
        setTimeout(() => {
          setIsLoad(false);
          setProducts(data);
          setSelectedProducts(data);
        }, 2000);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      if (selectedCategory) {
        (async () => {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong with API!");
          }
          const data = await response.json();
          setSelectedProducts(data);
        })();
      }
    } catch (err) {
      console.log(err);
    }
  }, [selectedCategory]);

  return (
    <div>
      <Link to={`/`}>
        <Button variant="contained" style={{ float: "right" }}>
          Product List
        </Button>
      </Link>
      <Link to={`/favorite`}>
        <Button variant="contained" style={{ float: "right" }}>
          Favorite Products
        </Button>
      </Link>
      {isLoad ? (
        <RotatingLines
          strokeColor="green"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      ) : (
        <div>
          <Category handleSelectedCategory={handleSelectedCategory} />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 12, sm: 6, md: 4 }}
          >
            {selectedProducts.map((product, index) => (
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

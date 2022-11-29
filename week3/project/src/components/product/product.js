import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import FavIcon from "../product/favoriteIcon.js";

function Product({ product }) {
  return (
    <Card>
      <FavIcon product={product}></FavIcon>
      <Link to={`/product/${product.id}`}>
        <CardContent>
          <CardMedia
            component="img"
            height="400"
            image={product.image}
            alt={product.image}
          />
        </CardContent>
        <CardActions>
          <p>{product.title}</p>
        </CardActions>
      </Link>
    </Card>
  );
}

export default Product;

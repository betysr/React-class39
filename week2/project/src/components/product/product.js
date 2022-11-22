import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProductDetail from './productDetail';


function Product({product}) {
  return (
    
      <div>
        <Card>
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
        </Card>
      </div>
  
  );
}

export default Product;
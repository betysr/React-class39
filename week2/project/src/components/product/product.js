import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {Link} from "react-router-dom";

function Product({product}) {
  return (
    <Link to={`/product/${product.id}`}>
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
    </Link>
  );
}

export default Product;
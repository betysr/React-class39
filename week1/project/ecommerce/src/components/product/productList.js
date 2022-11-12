import React, { useState } from 'react'
import allProducts from '../../fake-data/all-products.js'
import Product from './product';
import Grid from '@mui/material/Unstable_Grid2';

function ProductList() {

  const [products, setAllProducts] = useState(allProducts);
  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product,index) => (
          <Grid key={index} xs={4}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </div>
    
  )
}

export default ProductList;
import React, { useState, useEffect } from 'react'
import allProducts from '../../fake-data/all-products.js'
import Product from './product';
import Grid from '@mui/material/Unstable_Grid2';


function ProductList({category}) {

  const [products, setAllProducts] = useState(allProducts);
  const [selectedProducts, setSelectedProducts] = useState(allProducts);
  
  useEffect(() => {
    if(category){
      setSelectedProducts(products.filter(product => product.category === category));
    }
  }, [category]);

  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
        {selectedProducts.map((each,index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <Product product={each}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductList;
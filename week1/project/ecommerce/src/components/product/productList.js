import React, { useState, useEffect } from 'react'
import allProducts from '../../fake-data/all-products.js'
import Product from './product';
import Grid from '@mui/material/Unstable_Grid2';


function ProductList(props) {

  const [products, setAllProducts] = useState(allProducts);
  const [selectedProducts, setSelectedProducts] = useState(allProducts);
  
  useEffect(() => {
    if(props.category){
      setSelectedProducts(products.filter(product => product.category === props.category));
    }
  }, [props.category]);

  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {selectedProducts.map((each,index) => (
          <Grid key={index} xs={4}>
            <Product product={each}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductList;
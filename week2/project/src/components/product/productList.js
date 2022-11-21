import React, { useState, useEffect } from 'react'
import Product from './product';
import Grid from '@mui/material/Unstable_Grid2';

function ProductList({category}) {

  const [products, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      (async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Something went wrong with API!');
        }
        const data = await response.json();
        setTimeout(() => {
          setAllProducts(data);
          setSelectedProducts(data);
          setIsLoading(false);
        }, 2000);
      })();
  }, []);

  useEffect(() => {
    if(category){
      setSelectedProducts(products.filter(product => product.category === category));
    }
  }, [category]);

  return (
    <div>
      {isLoading ? <div>Loading</div>
      : 
      <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
        {selectedProducts.map((each,index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <Product product={each}/>
          </Grid>
        ))}
    </Grid>}
    </div>
  )
}

export default ProductList;
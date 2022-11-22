import React, { useState, useEffect } from 'react'
import Product from './product';
import Grid from '@mui/material/Unstable_Grid2';
import Category from "../category/category.js";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoad, setIsLoad] = useState(true);

  const handleSelectedCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  }

  useEffect(() => {
    try{
      (async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log("response for products", response);
        if (!response.ok) {
          throw new Error('Something went wrong with API!');
        }
        const data = await response.json();
        setTimeout(() => {
          setIsLoad(false);
          setProducts(data);
          setSelectedProducts(data);
        }, 2000);
      })();
    }catch(err){
      console.log(err);
    } 
  }, []);

  useEffect(() => {
    if(selectedCategory){
      setSelectedProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div>
      {isLoad ? "Loading" : 
      <div>
        <Category handleSelectedCategory={handleSelectedCategory} />
        <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 6, md: 4 }}>
          {selectedProducts.map((each,index) => (
            <Grid key={index} xs={12} sm={6} md={4}>
              <Product product={each}/>
            </Grid> 
          ))}
      </Grid> 
      </div>}
      
    </div>
  )
}

export default ProductList;
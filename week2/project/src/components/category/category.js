import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ProductList from '../product/productList.js';

function Category({handleSelectedCategory}) {

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    })();
  }, []);

  return (
    <div>
      <h1>Products!</h1>
      {}
      <Stack spacing={2} direction="row">
        {categories.map((category,index)=>{
          return <Button key={index} variant="contained" onClick={()=>{handleSelectedCategory(category)}}>{category}</Button>
        })}
      </Stack>
    </div>
  )
}

export default Category;
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import allCategories from '../../fake-data/all-categories.js'
import ProductList from '../product/productList.js';

function Category() {

  const [categories, setCategories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectCategory = (event) => {
    setSelectedCategory(event.target.innerText.slice(6).toLowerCase());
  }

  return (
    <div>
      <h1>Products!</h1>
      <Stack spacing={2} direction="row">
        {categories.map((category,index)=>{
          return <Button key={index} variant="contained" onClick={selectCategory}>{category}</Button>
        })}
      </Stack>
      <ProductList category={selectedCategory}/>
    </div>
  )
}

export default Category;
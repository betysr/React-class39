import React, { useState, useRef } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import allCategories from '../../fake-data/all-categories.js'

function Category() {

  const [categories, setCategories] = useState(allCategories);
  return (
    <div>
      <Stack spacing={2} direction="row">
        {categories.map((category,index)=>{
          return <Button key={index} variant="contained">{category}</Button>
        })}
    </Stack>
    </div>
  )
}

export default Category;
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useFetch from "../../hooks/useFetch";

function Category({ handleSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  const { data, error } = useFetch(
    `https://fakestoreapi.com/products/categories`
  );

  return (
    <div>
      <h1>Products!</h1>
      {error ? (
        "Error"
      ) : (
        <Stack spacing={2} direction="row">
          {data.map((category, index) => {
            return (
              <Button
                key={index}
                variant="contained"
                onClick={() => {
                  handleSelectedCategory(category);
                }}
              >
                {category}
              </Button>
            );
          })}
        </Stack>
      )}
    </div>
  );
}

export default Category;

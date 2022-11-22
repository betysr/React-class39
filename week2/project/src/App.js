import Category from "./components/category/category";
import React, { useState } from 'react'
import ProductList from './components/product/productList.js';
function App() {  

  return (
    <div className="App">
      <header className="App-header">
          <div>
            <ProductList />
          </div>
      </header>
    </div>
  );
}

export default App;
import Category from "./components/category/category";
import ProductList from "./components/product/productList";
import Container from '@mui/material/Container';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Products!</h1>
          <Category></Category>
          <ProductList></ProductList>
        </Container>
        
      </header>
    </div>
  );
}

export default App;

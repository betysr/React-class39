import ProductList from "./components/product/productList";
import Container from '@mui/material/Container';
import Category from "./components/category/category";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Products!</h1>
          <Category/>
        </Container>
        
      </header>
    </div>
  );
}

export default App;

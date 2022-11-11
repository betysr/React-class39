import Category from "./components/category/category";
import ProductList from "./components/product/productList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products!</h1>
        <Category></Category>
        <ProductList></ProductList>
      </header>
    </div>
  );
}

export default App;

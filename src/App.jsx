import { useEffect } from "react";
import { apiClient } from "../src/API/axios";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/Card";
import { setProducts } from "./store/productSlice";
import { addToCart } from "./store/cartSlice";

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  async function fetchProducts() {
    try {
      const res = await apiClient.get("products");
      const products = res.data.data;
      dispatch(setProducts(products));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={(product) => dispatch(addToCart(product))}
              cart={cart}
            />
          }
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

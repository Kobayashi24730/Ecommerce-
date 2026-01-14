import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aro from "./components/Aro";     // Menu (Header)
import Bojo from "./components/Bojo";   // Home
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>

      {/* MENU FIXO */}
      <Aro />

      {/* CONTEÚDO */}
      <Routes>
        <Route path="/" element={<Bojo />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

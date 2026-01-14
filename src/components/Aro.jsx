import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Aro from "./components/Aro";
import Bojo from "./components/Bojo";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>

      {/* MENU FIXO */}
      <Aro onCartClick={() => setCartOpen(true)} />

      {/* CARRINHO LATERAL */}
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
      />

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Bojo addToCart={addToCart} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

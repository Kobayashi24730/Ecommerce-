import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Aro";
import Product from "./components/Bojo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
		<Route path="/" element={<Aro />} />
        <Route path="/" element={<Bojo />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<h1>Carrinho</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";

export default function Aro({ onCartClick }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          MinhaLoja
        </div>

        {/* MENU */}
        <nav className="menu">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/categoria/feminino")}>Women</button>
          <button onClick={() => navigate("/categoria/masculino")}>Men</button>
          <button onClick={() => navigate("/categoria/eletronicos")}>Electronics</button>
          <button onClick={() => navigate("/contato")}>Contact</button>
        </nav>

        {/* AÇÕES */}
        <div className="actions">
          <input type="text" placeholder="Search products..." />
          <button className="cart" onClick={onCartClick}>🛒</button>
        </div>

      </div>
    </header>
  );
}

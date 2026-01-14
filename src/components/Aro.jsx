import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <h2>MinhaLoja</h2>
        </div>

        {/* Menu */}
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">Feminino</a>
          <a href="#">Masculino</a>
          <a href="#">Eletrônicos</a>
          <a href="#">Contato</a>
        </nav>

        {/* Ações */}
        <div className="actions">
          <input type="text" placeholder="Buscar produtos..." />

          {/* Botão Carrinho */}
          <button className="cart" onClick={goToCart}>
            🛒
          </button>
        </div>

      </div>
    </header>
  );
}

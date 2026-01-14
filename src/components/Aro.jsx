import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";

export default function Aro({ onCartClick }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo" onClick={() => navigate("/")}>
          <h2>MinhaLoja</h2>
        </div>

        <nav className="menu">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/categoria/feminino")}>Feminino</button>
          <button onClick={() => navigate("/categoria/masculino")}>Masculino</button>
          <button onClick={() => navigate("/categoria/eletronicos")}>Eletrônicos</button>
          <button onClick={() => navigate("/contato")}>Contato</button>
        </nav>

        <div className="actions">
          <input type="text" placeholder="Buscar produtos..." />
          <button className="cart" onClick={onCartClick}>🛒</button>
        </div>

      </div>
    </header>
  );
}

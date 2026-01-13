import "../assets/CSS/global.css";

export default function Header() {
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
          <button className="cart">🛒</button>
        </div>

      </div>
    </header>
  );
}

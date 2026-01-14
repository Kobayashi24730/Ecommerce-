import "../assets/CSS/global.css";

export default function Cart({ isOpen, onClose, cartItems, onRemove, onBuy }) {
  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      
      {/* Header */}
      <div className="cart-header">
        <h3>Carrinho</h3>
        <button onClick={onClose}>✖</button>
      </div>

      {/* Itens */}
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty">Carrinho vazio</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.price}</span>
              </div>
              <button onClick={() => onRemove(index)}>🗑</button>
            </div>
          ))
        )}
      </div>

      {/* Ações */}
      {cartItems.length > 0 && (
        <div className="cart-actions">
          <button className="buy" onClick={onBuy}>
            Comprar
          </button>
        </div>
      )}

    </div>
  );
}

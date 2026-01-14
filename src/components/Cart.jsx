export default function Cart({ open, onClose, items, removeFromCart }) {
  return (
    <aside className={`cart-sidebar ${open ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Carrinho</h3>
        <button onClick={onClose}>✖</button>
      </div>

      {items.length === 0 && <p>Carrinho vazio</p>}

      {items.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.img} />
          <div>
            <h4>{item.name}</h4>
            <span>{item.price}</span>
          </div>
          <button onClick={() => removeFromCart(index)}>🗑</button>
        </div>
      ))}

      {items.length > 0 && (
        <a href="/checkout.php" className="checkout-btn">
          Comprar
        </a>
      )}
    </aside>
  );
}

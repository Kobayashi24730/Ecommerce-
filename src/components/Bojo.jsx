import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Produto Fashion",
    price: "R$ 199,90",
    img: "https://picsum.photos/400/400?1"
  },
  {
    id: 2,
    name: "Produto Exemplo",
    price: "R$ 149,90",
    img: "https://picsum.photos/400/400?2"
  },
  {
    id: 3,
    name: "Produto Premium",
    price: "R$ 299,90",
    img: "https://picsum.photos/400/400?3"
  },
  {
    id: 4,
    name: "Produto Casual",
    price: "R$ 129,90",
    img: "https://picsum.photos/400/400?4"
  }
];

export default function Bojo({ addToCart }) {
  const navigate = useNavigate();

  return (
    <main className="home">

      {/* HERO / BANNER */}
      <section className="hero">
        <div className="hero-content">
          <h1>Responsive</h1>
          <p>Layout moderno e responsivo em React</p>
          <button onClick={() => navigate("/categoria/feminino")}>
            Ver coleção
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">🎨 Unlimited Colors</div>
        <div className="feature">📱 Responsive Layout</div>
        <div className="feature">🧭 Mega Menu</div>
      </section>

      {/* PRODUTOS */}
      <section className="products-container">
        <h2>Produtos em destaque</h2>

        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>

              <button
                className="add-cart"
                onClick={() => addToCart(product)}
              >
                🛒
              </button>

              <img src={product.img} alt={product.name} />

              <h4>{product.name}</h4>
              <span className="price">{product.price}</span>

              <div className="product-actions">
                <button onClick={() => navigate(`/product/${product.id}`)}>
                  Ver produto
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

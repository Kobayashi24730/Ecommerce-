import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";


export default function Bojo({ addToCart }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => (
	  fetch("http://localhost:3000/products")
	    .then(res => res.json())
	    .then(data => setProduct(data));
  ), []);

  return (
    <main className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Responsive</h1>
          <p>Layout moderno e responsivo em React</p>
          <button onClick={() => navigate("/categoria/feminino")}>
            Ver coleção
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature">🎨 Unlimited Colors</div>
        <div className="feature">📱 Responsive Layout</div>
        <div className="feature">🧭 Mega Menu</div>
      </section>

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

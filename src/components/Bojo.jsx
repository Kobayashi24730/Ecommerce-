import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Produto Fashion",
    price: "R$ 199,90",
    img: "https://picsum.photos/300/300?1"
  },
  {
    id: 2,
    name: "Produto Exemplo",
    price: "R$ 149,90",
    img: "https://picsum.photos/300/300?2"
  },
  {
    id: 3,
    name: "Produto Premium",
    price: "R$ 299,90",
    img: "https://picsum.photos/300/300?3"
  }
];

export default function Bojo({ addToCart }) {
  const navigate = useNavigate();

  const buyNow = (product) => {
    window.location.href = `/checkout.php?id=${product.id}`;
  };

  return (
    <section className="products">
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
          <span>{product.price}</span>

          <div className="product-actions">
            <button onClick={() => buyNow(product)}>Comprar agora</button>
            <button onClick={() => navigate(`/product/${product.id}`)}>
              Ver produto
            </button>
          </div>

        </div>
      ))}
    </section>
  );
}

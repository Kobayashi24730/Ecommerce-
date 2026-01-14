import "../assets/CSS/global.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Produto Fashion",
    price: "R$ 199,90",
    img: "https://picsum.photos/300/300?1",
    description: "Produto fashion de alta qualidade, moderno e confortável."
  },
  {
    id: 2,
    name: "Produto Exemplo",
    price: "R$ 149,90",
    img: "https://picsum.photos/300/300?2",
    description: "Produto exemplo com ótimo custo-benefício."
  },
  {
    id: 3,
    name: "Produto Premium",
    price: "R$ 299,90",
    img: "https://picsum.photos/300/300?3",
    description: "Linha premium com acabamento sofisticado."
  }
];

export default function Bojo({ addToCart }) {
  const navigate = useNavigate();

  // Comprar agora → checkout.php
  const buyNow = (product) => {
    window.location.href = `/checkout.php?id=${product.id}`;
  };

  const viewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <main className="container">

      {/* Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <h1>Responsive</h1>
          <p>Layout moderno e responsivo em React</p>
        </div>
      </section>

      {/* Produtos */}
      <section className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>

            {/* Botão Carrinho */}
            <button
              className="add-cart"
              onClick={() => addToCart(product)}
              title="Adicionar ao carrinho"
            >
              🛒
            </button>

            <img src={product.img} alt={product.name} />

            <div className="product-info">
              <h4>{product.name}</h4>
              <span className="price">{product.price}</span>
            </div>

            {/* Ações */}
            <div className="product-actions">
              <button
                className="buy"
                onClick={() => buyNow(product)}
              >
                Comprar agora
              </button>

              <button
                className="view"
                onClick={() => viewProduct(product)}
              >
                Ver produto
              </button>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
            }

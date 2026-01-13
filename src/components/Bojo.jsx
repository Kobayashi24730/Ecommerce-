import "../assets/CSS/global.css";

const products = [
  { id: 1, name: "Produto Fashion", price: "R$ 199,90", img: "https://picsum.photos/300/300?1" },
  { id: 2, name: "Produto Exemplo", price: "R$ 149,90", img: "https://picsum.photos/300/300?2" },
  { id: 3, name: "Produto Premium", price: "R$ 299,90", img: "https://picsum.photos/300/300?3" },
  { id: 4, name: "Novo Produto", price: "R$ 179,90", img: "https://picsum.photos/300/300?4" },
  { id: 5, name: "Produto Destaque", price: "R$ 249,90", img: "https://picsum.photos/300/300?5" },
  { id: 6, name: "Produto Trend", price: "R$ 219,90", img: "https://picsum.photos/300/300?6" }
];

export default function Body() {
  return (
    <main className="container">

      {/* Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <h1>Responsive</h1>
          <p>Layout moderno e responsivo em React</p>
        </div>
      </section>

      {/* Destaques */}
      <section className="features">
        <div className="feature-card">
          <h3>Cores Ilimitadas</h3>
          <p>Personalização total de layout e identidade visual.</p>
        </div>
        <div className="feature-card">
          <h3>Layout Responsivo</h3>
          <p>Compatível com desktop, tablet e mobile.</p>
        </div>
        <div className="feature-card">
          <h3>Produtos Dinâmicos</h3>
          <p>Fácil integração com APIs e banco de dados.</p>
        </div>
      </section>

      {/* Produtos */}
      <section className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <span>{product.price}</span>
          </div>
        ))}
      </section>

    </main>
  );
}

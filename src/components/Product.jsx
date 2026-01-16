import { useLocation } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
	  fetch(`http://localhost:3000/product/${id}`)
	       .then(res => res.json())
	       .then(data => setProduct(data));
  }, [id]);

  return (
    <div className="container">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}

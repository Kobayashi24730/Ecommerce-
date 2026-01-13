import { useLocation } from "react-router-dom";

export default function Product() {
  const { state } = useLocation();

  return (
    <div className="container">
      <img src={state.img} alt={state.name} />
      <h2>{state.name}</h2>
      <h3>{state.price}</h3>
      <p>{state.description}</p>
    </div>
  );
}

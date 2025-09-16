import Button from "../components/Button";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      {/* Imagem com tag */}
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.tag && <span className={`tag ${product.tag.toLowerCase()}`}>{product.tag}</span>}
      </div>

      {/* Título e preço */}
      <h2 className="title">{product.title}</h2>
      <p className="price">R$ {product.price.toFixed(2)}</p>

      {/* Rating em estrelas */}
      <div className="rating" aria-label={`Avaliação: ${product.rating} de 5`}>
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
      </div>

      {/* Botão adicionar */}
      <Button
        type="solid"
        onClick={onAddToCart}
        aria-label={`Adicionar ${product.title} ao carrinho`}
      >
        Adicionar
      </Button>
    </div>
  );
}

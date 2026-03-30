function ProductCard({ image, name, price }) {
  return (
    <div className="product-box">
      <img src={image} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

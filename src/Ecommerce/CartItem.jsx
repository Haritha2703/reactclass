function CartItem({ image, name, price }) {
  return (
    <div className="cart-item">
      <img src={image}  />
      <p>{name}</p>

      <div className="price-delete">
        <h4>${price}</h4>
        <span className="delete">🗑️</span>
      </div>
    </div>
  );
}

export default CartItem;

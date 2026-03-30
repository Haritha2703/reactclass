import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>My Cart</h3>
      </div>

      <CartItem
        image="https://i.imgur.com/Zk7J1XU.png"
        name="Z Flip Foldable Mobile"
        price="120"
      />
      <CartItem
        image="https://i.imgur.com/8Q2QJZK.png"
        name="Air Pods Pro"
        price="60"
      />
      <CartItem
        image="https://i.imgur.com/N6b6YvN.png"
        name="Head Phones"
        price="60"
      />
      <CartItem
        image="https://i.imgur.com/5Y5WkzK.png"
        name="250D DSLR Camera"
        price="100"
      />

      <div className="cart-total">
        <h4>Total:</h4>
        <span className="total-price">$340</span>
      </div>
    </div>
  );
}

export default Cart;

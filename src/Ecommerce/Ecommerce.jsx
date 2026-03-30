import "./Ecommerce.css";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";

function Ecommerce() {
  return (
    <div className="container">
      <Header />

      <div className="Section1">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default Ecommerce;

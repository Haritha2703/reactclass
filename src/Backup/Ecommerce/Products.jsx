import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="products">
      <ProductCard
        image="https://i.imgur.com/Zk7J1XU.png"
        name="Z Flip Foldable Mobile"
        price="120"
      />
      <ProductCard
        image="https://i.imgur.com/8Q2QJZK.png"
        name="Air Pods Pro"
        price="60"
      />
      <ProductCard
        image="https://i.imgur.com/5Y5WkzK.png"
        name="250D DSLR Camera"
        price="100"
      />
      <ProductCard
        image="https://i.imgur.com/N6b6YvN.png"
        name="Head Phones"
        price="60"
      />
    </div>
  );
}

export default Products;

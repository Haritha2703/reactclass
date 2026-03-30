import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="products">
      <ProductCard
        image="ht"
        name="Z Flip Foldable Mobile"
        price="120"
      />
      <ProductCard
        image="h"
        name="Air Pods Pro"
        price="60"
      />
      <ProductCard
        image="h"
        name="250D DSLR Camera"
        price="100"
      />
      <ProductCard
        image="h"
        name="Head Phones"
        price="60"
      />
    </div>
  );
}

export default Products;

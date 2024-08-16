import { useProductCardContext } from './ProductContext';

function ProductImage() {
  const { product } = useProductCardContext();
  return (
    <div className="product-image">
      <img src={product.image} />
    </div>
  );
}

export default ProductImage;

import { Product } from '../types';

function useProduct() {
  const addToCart = (product: Product) => {
    alert(`Added: ${JSON.stringify(product)}`);
  };

  return { addToCart };
}

export default useProduct;

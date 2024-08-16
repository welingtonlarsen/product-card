import { ReactNode } from 'react';
import { Product } from '../types';
import { useProductCardContext } from './ProductContext';

type Props = {
  onClick: (product: Product) => void;
  children: ReactNode;
};

function ProductButton({ onClick, children }: Props) {
  const { product } = useProductCardContext();

  const handleClick = () => {
    onClick(product);
  };

  return (
    <button type="button" className="product-button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default ProductButton;

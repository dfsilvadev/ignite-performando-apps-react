import { memo } from "react";

interface ProductitemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductitemProps) {
  return (
    <div>
      {product.title} -{" "}
      {product.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

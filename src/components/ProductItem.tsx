interface ProductitemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function Productitem({ product }: ProductitemProps) {
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

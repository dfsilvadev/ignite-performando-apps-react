export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestedClose: () => void;
}

export function AddProductToWishList({
  onAddToWishList,
  onRequestedClose,
}: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button type="button" onClick={onAddToWishList}>
        Adicionar
      </button>
      <button type="button" onClick={onRequestedClose}>
        Sair
      </button>
    </span>
  );
}

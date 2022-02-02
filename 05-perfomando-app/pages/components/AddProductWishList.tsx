export interface AddProductWishListProps {
  addWithList: () => void;
  onRequestClose: () => void
}

export function AddProductWishList({ addWithList, onRequestClose }: AddProductWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={addWithList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}
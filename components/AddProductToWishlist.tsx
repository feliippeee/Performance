export interface AddProductToWishlistProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishlist({
    onAddToWishList, 
    onRequestClose
}: AddProductToWishlistProps) {
    return (
        <span>
            Deseja adicionar os favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>

    )
    
}
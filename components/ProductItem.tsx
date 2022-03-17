import { memo, useState } from 'react';
import { AddProductToWishlistProps } from './AddProductToWishlist';
//import { AddProductToWishlist } from './AddProductToWishlist';
import dynamic from 'next/dynamic'; // se for uma aplicação só react sem SSR usa o lazy importado do react

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import('./AddProductToWishlist').then(nod => nod.AddProductToWishlist)
}, {
    loading: () => <span>Carregando...</span>
});

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddToWishList: (id: number) => void;
}

// shallow compare = comparação rasa
function ProductItemComponent({product, onAddToWishList}: ProductItemProps){
    const [isAddingToWishList, setIsAddingToWishList] = useState(false);
    return (
        <div>         
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
            { isAddingToWishList && (
                <AddProductToWishlist 
                    onAddToWishList={() => onAddToWishList(product.id)}
                    onRequestClose={() => setIsAddingToWishList(false)}
                />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});
import { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}

// shallow compare = comparação rasa
function ProductItemComponent({product}: ProductItemProps){
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});
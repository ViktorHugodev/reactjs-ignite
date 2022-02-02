import { memo, useState } from 'react'
import { AddProductWishListProps } from './AddProductWishList'
import dynamic from 'next/dynamic'

const AddProductWishList = dynamic<AddProductWishListProps>(() => {
  return import('./AddProductWishList').then(mod => mod.AddProductWishList)
}, {
  loading: () => <span>Carregando..</span>
})

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
    priceFormatted: string
  }
  addWithList: (id: number) => void
}

function ProductItemComponent({ product, addWithList }: ProductItemProps) {
  const [isAddWishList, setIsAddWishList] = useState(false)
  return (
    <div>
      {product.title} - {product.id} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddWishList(true)}>Adicionar aos favoritos</button>


      {isAddWishList && (
        <AddProductWishList
          addWithList={() => addWithList(product.id)}
          onRequestClose={() => setIsAddWishList(false)}
        />
      )}

    </div>
  )
} export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})
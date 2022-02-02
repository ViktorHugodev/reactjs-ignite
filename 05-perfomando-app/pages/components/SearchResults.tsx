import { List, ListRowRenderer } from 'react-virtualized'

import { ProductItem } from "./ProductItem";

interface SearchProps {
  results: Products[]
  addWithList: (id: number) => void
  totalPrice: number
}

interface Products {
  id: number
  price: number
  title: string
  priceFormatted: string
}

export function SearchResults({ totalPrice, results, addWithList }: SearchProps) {
  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          addWithList={addWithList}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />
    </div>
  )
}
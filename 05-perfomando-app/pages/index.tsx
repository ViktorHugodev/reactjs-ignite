import { FormEvent, useState, useCallback } from "react"
import { SearchResults } from "./components/SearchResults"

interface DataProps {
  totalPrice: number
  data: any[]
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<DataProps>({
    totalPrice: 0,
    data: []
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()
    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const product = data.map((product: { id: any; title: any; price: number | bigint }) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    })

    const totalPrice = data.reduce((total: number, product: { price: number }) => {
      return total + product.price
    }, 0)


    setResults({
      totalPrice,
      data: product
    })
  }

  const addWithList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>
        Search
      </h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit"></button>
      </form>
      <SearchResults
        addWithList={addWithList}
        totalPrice={results.totalPrice}
        results={results.data} />
    </div>
  )
}

import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import { useEffect, useReducer, useState } from "react"
import Basket from "./Basket"
import { data } from "../../provider/data"
import { BasketContext, DataContext, FilterContext } from "../../provider/context"
import basketReducer from "../../provider/basketReducer"

function App() {
  const [basket, basketDispatch] = useReducer(basketReducer, JSON.parse(sessionStorage.getItem('basket')) || [])
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filterArray = (array) => {
    if (filter == 'All') return array
    return array.filter(item => item.filter.includes(filter))
  }

  const searchArray = (array) => {
    if (search == '') return array
    return array.filter(item => item.name.toLowerCase().includes(search))
  }

  useEffect(() => {sessionStorage.setItem('basket', JSON.stringify(basket))}, [basket])

  return (
    <DataContext value={data}>
      <BasketContext value={{basket, basketDispatch, show, setShow}}>
        <FilterContext value={{filter, setFilter, search, setSearch}}>

          <Header />
          <main className="py-5">
            <div className="container mx-auto px-4">
              <Outlet context={searchArray(filterArray(data.pizzas))} />
            </div>
          </main>
          <Footer />
          <Basket />
        
        </FilterContext>
      </BasketContext>
    </DataContext>
  )
}

export default App
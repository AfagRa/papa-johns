import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import { data } from "../data"
import { useEffect, useState } from "react"
import Basket from "./Basket"
import Filter from "./Filter"

function App() {
  const [basket, setBasket] = useState(JSON.parse(sessionStorage.getItem('basket')) || [])
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    sessionStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  
  function addToBasket({id, size, quant, category}) {
    const ind = basket.findIndex(item => item.id == id && item.size == size)
    if (ind >= 0) updateBasket (ind, basket[ind].quant + quant)
    else setBasket([...basket, { id, size, quant, category }])
  }

  function updateBasket (ind, quant) {
    let obj = {...basket[ind]}
    obj.quant = quant
    setBasket(basket.map((item, i) => i == ind ? obj : item))
  }

  function deleteFromBasket(ind) {
    setBasket(basket.filter((item, i) => i != ind))
  }

  return (
    <>
      <Header setShow={setShow} basket={basket} />
      <main className="py-5">
        <div className="container mx-auto px-4">
          <Outlet context={{data, addToBasket, basket, show, setShow}} />
        </div>
      </main>
      <Footer />
      <Basket basket={basket} deleteFromBasket={deleteFromBasket} updateBasket={updateBasket} show={show} setShow={setShow} onHide={() => setShow(false)} pizzas={data.pizzas} snacks={data.snacks} />
    </>
  )
}

export default App
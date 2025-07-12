function basketReducer(basket, action) {
    const {type, payload} = action
    return type == 'add' ? addToBasket(basket, payload.id, payload.size, payload.quant) :
           type == 'del' ? deleteFromBasket(basket, payload.id) :
                           updateBasket(basket, payload.ind, payload.quant) 
}

function addToBasket({basket, id, size, quant, category}) {
    let ind = basket.findIndex(item => item.id == id && item.size == size)
    if (ind >= 0) return updateBasket (basket, ind, basket[ind].quant + quant)
    else return ([...basket, { id, size, quant, category }])
  }

  function updateBasket (basket, ind, quant) {
    let obj = {...basket[ind]}
    obj.quant = quant
    return (basket.map((item, i) => i == ind ? obj : item))
  }

  function deleteFromBasket(basket, ind) {
    return (basket.filter((item, i) => i != ind))
  }

export default basketReducer
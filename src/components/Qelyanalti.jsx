import { useOutletContext } from 'react-router';
import Snack from './Snack'

const Qelyanalti = () => {
  const {snacks} = useOutletContext().data;
  const {addToBasket, setShow} = useOutletContext()
  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="max-sm:text-xl sm:text-2xl md:text-3xl font-black mb-6">QƏLYANALTILAR</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {snacks.map(snack => (
            <Snack key={snack.id} snack={snack} addToBasket={addToBasket} setShow={setShow} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Qelyanalti
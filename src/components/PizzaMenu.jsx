import { useOutletContext } from "react-router";
import Item from "./Item";

const PizzaMenu = ({basket}) => {
  const {pizzas} = useOutletContext().data
  const {addToBasket, setShow} = useOutletContext();
  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="max-sm:text-xl sm:text-2xl md:text-3xl font-black mb-6">PİZZALAR</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {pizzas.map(pizza => (
            <Item addToBasket={addToBasket} setShow={setShow} key={pizza.id} pizza={pizza} basket={basket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
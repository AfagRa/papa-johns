import Item from "./Item";
import Filter from "./Filter";
import { useOutletContext } from "react-router";

const PizzaMenu = () => {
  const pizzas = useOutletContext()
  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="max-sm:text-xl sm:text-2xl md:text-3xl font-black mb-6">PİZZALAR</h1>
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {pizzas.map(pizza => (
            <Item key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
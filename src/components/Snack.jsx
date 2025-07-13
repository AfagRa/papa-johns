import { useContext, useState } from "react";
import { BasketContext } from "../../provider/context";

const Snack = ({snack}) => {
  const [quantity, setQuantity] = useState(1)
  const {basketDispatch, setShow} = useContext(BasketContext)

  const path = '../assets/img/'  

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const id = snack.id

  return (
    <div className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="max-sm:h-fit sm:h-48">
        <img src={path + snack.img} alt={snack.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6 flex flex-col justify-between md:h-[300px]">
        <div>
          <h3 className="text-lg font-bold mb-2">{snack.name}</h3>
          <p className="text-sm mb-4">{snack.desc}</p>
        
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button onClick={decreaseQuantity} className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors">
                <span className="font-bold">−</span>
              </button>
              <span className="text-md mx-1 font-semibold text-center">
                {quantity}
              </span>
              <button onClick={increaseQuantity} className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors">
                <span className="font-bold">+</span>
              </button>
            </div>
            <div className="text-md font-bold">
              {quantity * snack.price['standard']} AZN
            </div>
          </div>
        </div>
      
        <button onClick={() => {
          basketDispatch({type: 'add', payload: {id, size: 'standard', quant: quantity, category: 'snack'}}), 
          setShow(true)}} 
          className="bg-[#CFEB0B] hover:bg-[#fff] border-1 cursor-pointer font-bold text-sm mt-3 py-2 px-6 mx-auto rounded-full transition-colors duration-200 transform">
          SƏBƏTƏ ƏLAVƏ ET
        </button>
      </div>
    </div>
  );
};

export default Snack
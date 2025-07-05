import { useState } from "react";
import { useOutletContext } from "react-router";

const Item = ({ pizza, basket, setShow }) => {
  const {sizes} = useOutletContext().data
  const {addToBasket} = useOutletContext();
  const [selectedSize, setSelectedSize] = useState(Object.keys(pizza.price)[0]);
  const [quantity, setQuantity] = useState(1);

  const path = '../assets/img/'  

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const id = pizza.id

  return (
    <div className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48">
        <img src={path + pizza.img} alt={pizza.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6 flex flex-col justify-between max-sm:h-fit sm:h-[320px] md:h-[450px] lg:h-[450px] xl:h-[350px]">
        <div>
          <h3 className="text-lg font-bold mb-2">{pizza.name}</h3>
          <p className="text-sm mb-4">{pizza.desc}</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Ölçü:</label>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(pizza.price).map(size => (
                <button key={size} onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedSize == size 
                      ? 'bg-yellow-400' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                  {sizes[size]}
                </button>
              ))}
            </div>
          </div>
        
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
              {quantity * pizza.price[selectedSize]} AZN
            </div>
          </div>
        </div>

        <button onClick={() => {addToBasket({id, size: selectedSize, quant: quantity, category: 'pizza'}), setShow(true)}} className="bg-[#CFEB0B] hover:bg-[#fff] border-1 cursor-pointer font-bold text-sm mt-3 py-2 px-6 mx-auto rounded-full transition-colors duration-200 transform">
          SƏBƏTƏ ƏLAVƏ ET
        </button>
      </div>
    </div>

  );
};

export default Item
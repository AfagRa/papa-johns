import { useContext, useEffect, useState } from "react";
import { IoCloseSharp, IoTrashOutline } from "react-icons/io5";
import { BasketContext, DataContext } from "../../provider/context";

function Basket() {
    let path = '../assets/img/'
    const data = useContext(DataContext)
    const pizzas = data.pizzas
    const snacks = data.snacks
    const {show, setShow, basket, basketDispatch} = useContext(BasketContext);
    const [price, setPrice] = useState(0)


    useEffect(() => {
        let total = 0
        basket.forEach(item => {
            let p 
            if (item.category == 'pizza') p = pizzas.find(elm => elm.id == item.id)
            else if (item.category == 'snack') p = snacks.find(elm => elm.id == item.id)            
            total += p.price[item.size] * item.quant
        });
        setPrice(total);
    }, [basket])

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-[#000000a2] flex items-center justify-center z-50 p-2">
            <div className="bg-white rounded-4xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold uppercase">Səbət</h2>
                    <button onClick={() => setShow(false)} className="text-2xl cursor-pointer">
                        <IoCloseSharp />
                    </button>
                </div>
                
                <div className="p-4 overflow-auto flex-1">
                    <h4 className="text-lg font-medium mb-4">Sifariş:</h4>
                    
                    {/* Desktop */}
                    <div className="hidden md:block">
                        <div style={{gridTemplateColumns: '5% 12% auto 9% 9% 15% 10% 7%'}} className="grid gap-0 text-center font-semibold rounded-lg mb-4">
                            <div className="border border-gray-300 py-2 px-1 rounded-tl-lg">#</div>
                            <div className="border border-gray-300 py-2 px-1">Şəkil</div>
                            <div className="border border-gray-300 py-2 px-1">Ad</div>
                            <div className="border border-gray-300 py-2 px-1">Ölçü</div>
                            <div className="border border-gray-300 py-2 px-1">Qiymət</div>
                            <div className="border border-gray-300 py-2 px-1">Say</div>
                            <div className="border border-gray-300 py-2 px-1">Məbləğ</div>
                            <div className="border border-gray-300 py-2 px-1 rounded-tr-lg"></div>
                        </div>
                        
                        <div className="space-y-2">
                            {basket.map((item, i) => {
                                let p 
                                if (item.category == 'pizza') p = pizzas.find(elm => elm.id == item.id)
                                else if (item.category == 'snack') p = snacks.find(elm => elm.id == item.id);

                                return (
                                    <div style={{gridTemplateColumns: '5% 12% auto 9% 9% 15% 10% 7%'}} className="grid gap-0 text-center bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm rounded-lg" key={i}>
                                        <div className="border border-gray-300 p-2 rounded-l-lg">{i + 1}</div>
                                        <div className="border border-gray-300 p-2 flex justify-center items-center">
                                            <img className="h-[40px]" src={path + p.img} alt={p.name} />
                                        </div>
                                        <div className="border border-gray-300 p-2 flex items-center justify-center">{p.name}</div>
                                        <div className="border border-gray-300 p-2 flex items-center justify-center">{item.size}</div>
                                        <div className="border border-gray-300 p-2 flex items-center justify-center">{p.price[item.size]}₼</div>
                                        <div className="border border-gray-300 p-2 flex items-center justify-center">
                                            <button onClick={() => basketDispatch({type: 'upd', payload: { ind: i, quant: (item.quant > 1 ? (item.quant - 1) : 1)}})} className="bg-gray-200 hover:bg-gray-300 border-1 cursor-pointer font-bold text-sm py-1 px-3 rounded-full transition-colors duration-200 transform hover:scale-105"> - </button>
                                            <span className="p-2">{item.quant}</span>
                                            <button onClick={() => basketDispatch({type: 'upd', payload: { ind: i, quant: (item.quant + 1)}})} className="bg-gray-200 hover:bg-gray-300 border-1 cursor-pointer font-bold text-sm py-1 px-3 rounded-full transition-colors duration-200 transform hover:scale-105"> + </button>
                                        </div>
                                        <div className="border border-gray-300 p-2 flex items-center justify-center">{p.price[item.size] * item.quant}₼</div>
                                        <div className="border border-gray-300 p-2 rounded-r-lg flex items-center justify-center">
                                            <div className="cursor-pointer text-2xl" onClick={() => basketDispatch({type: 'del', payload: {ind: i}})}>
                                                <IoTrashOutline />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden space-y-3">
                        {basket.map((item, i) => {
                            let p
                            if (item.category == 'pizza') p = pizzas.find(elm => elm.id == item.id)
                            else if (item.category == 'snack') p = snacks.find(elm => elm.id == item.id);

                            return (
                                <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4" key={i}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <img className="h-[60px] w-[60px] object-cover rounded-lg" src={path + p.img} alt={p.name} />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">{p.name}</h3>
                                            <p className="text-gray-600">Ölçü: {item.size}</p>
                                            <p className="text-gray-600">Qiymət: {p.price[item.size]}₼</p>
                                        </div>
                                        <div className="cursor-pointer text-2xl text-red-500" onClick={() => basketDispatch({type: 'del', payload: {ind: i}})}>
                                            <IoTrashOutline />
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => updateBasket(i, item.quant > 1 ? (item.quant - 1) : 1)} className="bg-gray-200 hover:bg-gray-300 border-1 cursor-pointer font-bold text-sm py-2 px-3 rounded-full transition-colors duration-200 transform hover:scale-105"> - </button>
                                            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium min-w-[50px] text-center">{item.quant}</span>
                                            <button onClick={() => updateBasket(i, item.quant + 1)} className="bg-gray-200 hover:bg-gray-300 border-1 cursor-pointer font-bold text-sm py-2 px-3 rounded-full transition-colors duration-200 transform hover:scale-105"> + </button>
                                        </div>
                                        <div className="text-lg font-bold">{p.price[item.size] * item.quant}₼</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className="my-3 font-bold text-lg text-right">Yekun qiymət: {price} AZN</div>
                </div>
                
                <div className="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button onClick={() => setShow(false)} className="bg-red-700 hover:bg-[#fff] text-white hover:text-black border-black border-1 font-bold px-4 py-2 rounded-[999px] cursor-pointer transition-colors duration-200 transform w-full sm:w-auto">
                        Bağla
                    </button>
                    <button className="bg-[#CFEB0B] hover:bg-[#fff] border-1 cursor-pointer font-bold py-2 px-6 rounded-[999px] transition-colors duration-200 transform w-full sm:w-auto">
                        Sifariş ver
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Basket
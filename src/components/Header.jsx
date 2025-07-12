import { useContext, useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { IoChevronDown, IoClose, IoGlobeOutline, IoMenu } from "react-icons/io5";
import { Link, useLocation } from 'react-router';
import { BasketContext } from '../../provider/context';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Pizzalar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { basket, setShow } = useContext(BasketContext)

  const isOnMenuPage = location.pathname.startsWith('/menu');

  const mainMenuItems = [
    { name: 'Menyu', path: '/menu' },
    { name: 'Papa Bonus', path: '/bonus' },
    { name: 'Papa Talk', path: '/talk' },
    { name: 'Haqqımızda', path: '/about' }
  ];

  const categoryItems = [
    { name: 'Pizzalar', path: '/menu/pizzalar' },
    { name: 'Qəlyanaltılar', path: '/menu/qelyanaltilar' }
  ];
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="menu" className="flex-shrink-0">
            <img src="../assets/img/PJ-logo.png" alt="PJ logo" />
          </Link>

          <div className="relative">
            <div 
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <IoGlobeOutline className="h-4 w-4" />
              <span className="text-md font-bold">Azərbaycanca</span>
              <IoChevronDown className="h-4 w-4" />
            </div>
            
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="px-4 py-2 text-md hover:bg-gray-100 cursor-pointer">Azərbaycanca</div>
                <div className="px-4 py-2 text-md hover:bg-gray-100 cursor-pointer">English</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <nav className="hidden md:flex space-x-8">
              {mainMenuItems.map((item) => (
                <Link to={item.path} key={item.name} className="\font-bold hover:bg-gray-200 rounded-[999px] px-3 py-2 text-md">
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden flex items-center justify-center p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" /> }
            </button>

            <button onClick={() => setShow(true)} className="relative bg-[#CFEB0B] hover:bg-transparent cursor-pointer border-1 px-6 py-2 rounded-full text-md font-medium transition-colors">
              SƏBƏT <GiShoppingCart className='inline text-2xl' />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {basket.length}
              </span>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              {mainMenuItems.map((item) => (
                <Link to={item.path} key={item.name} className="font-bold hover:bg-gray-200 rounded-[999px] px-3 py-2 text-md">
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {isOnMenuPage && (
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-1 py-3">
              {categoryItems.map((item) => (
                <Link to={item.path} key={item.name} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors 
                  ${activeTab === item.name ? 'bg-black text-white'
                                            : 'text-black hover:bg-gray-200 rounded-[999px]'
                  }`}
                  onClick={() => setActiveTab(item.name)}>
                  {item.name}
              </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header
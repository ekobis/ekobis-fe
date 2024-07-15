import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ekobisnewLogo from "../../public/ekobisnewLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isLoggedIn = () => {
    // localStorage'dan isLoggedIn değerini kontrol ediyoruz
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  const handleLogout = () => {
    // Çıkış yapılacaksa localStorage'daki isLoggedIn değerini kaldırıyoruz
    localStorage.removeItem('isLoggedIn');
    navigate('/login'); // Çıkış yapıldığında yönlendirilecek sayfa
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={ekobisnewLogo} className="h-24 shadow-m shadow-green-700 ml-5"  alt="Ekobis Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white border border-white rounded shadow-xl shadow-green-400">Ekobis</span>
        </span>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0V5zm0 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0v-1zm0 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0v-1z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {isLoggedIn() ? (
              <>
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      isActive ? 
                      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : 
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/urunekle" 
                    className={({ isActive }) => 
                      isActive ? 
                      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : 
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    Ürün Ekle
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/urunlistele" 
                    className={({ isActive }) => 
                      isActive ? 
                      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : 
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    Ürün Listele
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/pricing" 
                    className={({ isActive }) => 
                      isActive ? 
                      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : 
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      isActive ? 
                      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : 
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => 
                    isActive ? 
                    "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : 
                    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                  aria-current="page"
                >
                  Giriş Yap
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {isLoggedIn() && (
          <div className="ml-0 sm:ml-3">
            <button
              onClick={handleLogout}
              className="block py-2 px-4 text-gray-900 bg-red-500 rounded hover:bg-red-700 dark:text-white dark:bg-red-600 dark:hover:bg-red-800 mr-5"
            >
              Çıkış
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

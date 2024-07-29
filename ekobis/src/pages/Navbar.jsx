import { useState } from "react";
import ekobisLogo from "../../public/ekobisnewLogo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [tableDropdownOpen, setTableDropdownOpen] = useState(false);
  const [formDropdownOpen, setFormDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setExpanded(true);
  };

  const handleMouseOut = () => {
    setExpanded(false);
  };

  const toggleClientDropdown = () => {
    setClientDropdownOpen(!clientDropdownOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  const toggleFormDropdown = () => {
    setFormDropdownOpen(!formDropdownOpen);
  };

  const toggleTableDropdown = () => {
    setTableDropdownOpen(!tableDropdownOpen);
  };

  return (
    <div className="relative h-screen">
      <div
        className={`flex flex-col fixed h-screen items-center gap-2 transition-all duration-300 ${
          expanded ? "bg-customGreen w-56" : "bg-customCyan w-16"
        }`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="mt-3 h-auto w-full flex justify-center">
          <img src={ekobisLogo} alt="logo" className="w-10 h-10 max-w-none" />
        </div>

        <div
          className={`flex flex-col mt-5 transition-all duration-300 ${
            expanded ? "w-56" : "w-16"
          }`}
        >
          <div className="flex items-center justify-center p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300">
            <NavLink
              to="/"
              className="flex items-center justify-center p-2 rounded-full shadow-md bg-customBlue transition-all border border-customPurple hover:bg-indigo-800 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-indigo-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              {expanded && (
                <span className="text-indigo-100 transition-opacity duration-300">
                  Home
                </span>
              )}
            </NavLink>
          </div>

          {/* Client Dropdown */}
          <div className="flex flex-col w-full">
            <button
              onClick={toggleClientDropdown}
              className="flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
            >
              <div className="flex items-center border border-customPurple hover:bg-indigo-800 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                {expanded && (
                  <span className="ml-2 text-indigo-100 transition-opacity duration-300">
                    Clients
                  </span>
                )}
              </div>
              {expanded && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 transition-transform text-indigo-100 ${
                    clientDropdownOpen ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {clientDropdownOpen && expanded && (
              <div className="flex flex-col items-start p-2 pl-4 space-y-2 bg-customBlue">
                <NavLink
                  to="/clients/list"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Clients Listele
                </NavLink>
                <NavLink
                  to="/clients/add"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Client Ekle
                </NavLink>
              </div>
            )}
          </div>

          {/* Product Dropdown */}
          <div className="flex flex-col w-full">
            <button
              onClick={toggleProductDropdown}
              className="flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
            >
              <div className="flex items-center border border-customPurple hover:bg-indigo-800 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {expanded && (
                  <span className="ml-2 text-indigo-100 transition-opacity duration-300">
                    Products
                  </span>
                )}
              </div>
              {expanded && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 transition-transform text-indigo-100 ${
                    productDropdownOpen ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {productDropdownOpen && expanded && (
              <div className="flex flex-col items-start p-2 pl-4 space-y-2 bg-customBlue">
                <NavLink
                  to="urunlistele"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Ürün Listele
                </NavLink>
                <NavLink
                  to="urunekle"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Ürün Ekle
                </NavLink>
              </div>
            )}
          </div>

          {/* Forms Dropdown */}
          <div className="flex flex-col w-full">
            <button
              onClick={toggleFormDropdown}
              className="flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
            >
              <div className="flex items-center border border-customPurple hover:bg-indigo-800 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 text-indigo-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

                {expanded && (
                  <span className="ml-2 text-indigo-100 transition-opacity duration-300">
                    Forms
                  </span>
                )}
              </div>
              {expanded && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 transition-transform text-indigo-100 ${
                    formDropdownOpen ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {formDropdownOpen && expanded && (
              <div className="flex flex-col items-start p-2 pl-4 space-y-2 bg-customBlue">
                <NavLink
                  to="/formlar/form1"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Form 1
                </NavLink>
                <NavLink
                  to="/formlar/form2"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Form 2
                </NavLink>
              </div>
            )}
          </div>

          {/* Tables Dropdown */}
          <div className="flex flex-col w-full">
            <button
              onClick={toggleTableDropdown}
              className="flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
            >
              <div className="flex items-center border border-customPurple hover:bg-indigo-800 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
              </svg>

                {expanded && (
                  <span className="ml-2 text-indigo-100 transition-opacity duration-300">
                    Tables
                  </span>
                )}
              </div>
              {expanded && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 transition-transform text-indigo-100 ${
                    tableDropdownOpen ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {tableDropdownOpen && expanded && (
              <div className="flex flex-col items-start p-2 pl-4 space-y-2 bg-customBlue">
                <NavLink
                  to="/tables/table1"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Table 1
                </NavLink>
                <NavLink
                  to="/tables/table2"
                  className="text-indigo-100 w-full flex items-center justify-between p-2 border border-customPurple shadow-md bg-customBlue hover:bg-customCyan transition-all duration-300"
                >
                  Table 2
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

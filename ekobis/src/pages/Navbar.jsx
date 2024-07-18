import { useState } from "react";
import ekobisLogo from "../../public/ekobisnewLogo.png";
import { NavLink } from "react-router-dom";

// customGreen: 'rgb(119, 228, 200)',
// customCyan: 'rgb(54, 194, 206)',
// customBlue: 'rgb(71, 140, 207)',
// customPurple: 'rgb(69, 53, 193)',

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <div className={`flex flex-col h-screen w-12  items-center gap-5 transition-width duration-300 ${expanded ? "bg-customGreen" : "bg-customCyan"} ${expanded ? "w-36" : "w-12"} `}>
        <div className="mt-5 w-full h-auto">
          <img
            src={ekobisLogo}
            alt="logo"
            className="transition-transform duration-300 hover:scale-125"
          />
        </div> {/* Navbar logo */}

        <button onClick={toggleExpanded}>
          <div className="relative flex flex-col items-center group mt-10 p-1 transition-transform duration-100 shadow rounded-full border border-customBlue shadow-black hover:bg-customBlue hover:scale-150">
            {expanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-customPurple">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-customPurple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                />
              </svg>
            )} {/* Collapse Icon */}
            <div className={`absolute left-8 top-0 opacity-0 ${!expanded ? "group-hover:visible" : "invisible"} group-hover:opacity-100 bg-customPurple text-customGreen text-xs rounded p-1 transition-opacity duration-100 border border-customBlue shadow-black`}>
              Expand
            </div>
          </div>
        </button>

        <NavLink
         to="/"
         className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "active" : ""
         }>
          <div className={`relative flex flex-col items-center group p-1 transition-transform duration-100 shadow rounded-full border border-customBlue shadow-black hover:bg-customBlue ${expanded ? "" : " hover:scale-150"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-customPurple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg> {/* Home Icon */}
            <div className={`absolute left-8 top-0 opacity-0 ${!expanded ? "group-hover:visible" : "invisible"} group-hover:opacity-100 bg-customPurple text-customGreen text-xs rounded p-1 transition-opacity duration-100`}>
              Home
            </div>
          </div>
          {expanded && <div className="text-customPurple text-xs mt-1">Ana Sayfa</div>}
        </NavLink>

        <NavLink
        to="/musteri"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
          <div className={`relative flex flex-col items-center group p-1 transition-transform duration-100 shadow rounded-full hover:bg-customBlue ${expanded ? "" : " hover:scale-150"} border border-customBlue shadow-black`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-customPurple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg> {/* Client list Icon */}
            <div className={`absolute left-8 top-0 opacity-0 ${!expanded ? "group-hover:visible" : "invisible"} group-hover:opacity-100 bg-customPurple  text-customGreen text-xs rounded p-1 transition-opacity duration-100`}>
              Clients
            </div>
          </div>
          {expanded && <div className="text-customPurple text-xs mt-3">Müşteri Yönetimi</div>}
        </NavLink>

        <NavLink
        to="/urun"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
          <div className={`relative flex flex-col items-center group p-1 transition-transform duration-100 shadow rounded-full hover:bg-customBlue ${expanded ? "" : " hover:scale-150"} border border-customBlue shadow-black`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-customPurple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> {/* Product list Icon */}
            <div className={`absolute left-8 top-0 opacity-0 ${!expanded ? "group-hover:visible" : "invisible"} group-hover:opacity-100 bg-customPurple text-customGreen text-xs rounded p-1 transition-opacity duration-100 `}>
              Products
            </div>
          </div>
          {expanded && <div className="text-customPurple text-xs mt-1">Ürün Yönetimi</div>}
        </NavLink>
      </div>
    </div>
  );
}

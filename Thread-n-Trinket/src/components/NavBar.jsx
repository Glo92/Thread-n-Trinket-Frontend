

import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isAccessoriesHovered, setIsAccessoriesHovered] = useState(false);
  const [isMenHovered, setIsMenHovered] = useState(false);
  const [isWomenHovered, setIsWomenHovered] = useState(false);

  let accessoriesTimeoutId = null;
  let menTimeoutId = null;
  let womenTimeoutId = null;

  
  const handleAccessoriesMouseEnter = () => {
    if (accessoriesTimeoutId) clearTimeout(accessoriesTimeoutId);
    setIsAccessoriesHovered(true);
  };

  const handleAccessoriesMouseLeave = () => {
    accessoriesTimeoutId = setTimeout(() => setIsAccessoriesHovered(false), 200);
  };

  const handleMenMouseEnter = () => {
    if (menTimeoutId) clearTimeout(menTimeoutId);
    setIsMenHovered(true);
  };

  const handleMenMouseLeave = () => {
    menTimeoutId = setTimeout(() => setIsMenHovered(false), 200);
  };

 
  const handleWomenMouseEnter = () => {
    if (womenTimeoutId) clearTimeout(womenTimeoutId);
    setIsWomenHovered(true);
  };

  const handleWomenMouseLeave = () => {
    womenTimeoutId = setTimeout(() => setIsWomenHovered(false), 200);
  };

  return (
    <nav className="pt-4 pb-4 my-6 flex justify-center">
      {/* Home */}
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'pr-10 font-bold text-xl text-red-500 underline'
            : 'pr-10 font-bold text-xl text-black underline hover:text-red-500'
        }
      >
        Home
      </NavLink>

      {/* Men Dropdown */}
      <div
        className="relative px-10 font-bold text-xl text-black underline hover:text-red-500 cursor-pointer"
        onMouseEnter={handleMenMouseEnter}
        onMouseLeave={handleMenMouseLeave}
      >
        Men
        {isMenHovered && (
          <div
            className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10"
            onMouseEnter={handleMenMouseEnter}
            onMouseLeave={handleMenMouseLeave}
          >
            <NavLink
              to={'/mensclothes'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 text-red-500 underline'
                  : 'block px-4 py-2 text-black hover:bg-gray-200 hover:text-red-500'
              }
            >
              Clothes
            </NavLink>
            <NavLink
              to={'/menshoes'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 text-red-500 underline'
                  : 'block px-4 py-2 text-black hover:bg-gray-200 hover:text-red-500'
              }
            >
              Shoes
            </NavLink>
          </div>
        )}
      </div>

      {/* Women Dropdown */}
      <div
        className="relative px-10 font-bold text-xl text-black underline hover:text-red-500 cursor-pointer"
        onMouseEnter={handleWomenMouseEnter}
        onMouseLeave={handleWomenMouseLeave}
      >
        Women
        {isWomenHovered && (
          <div
            className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10"
            onMouseEnter={handleWomenMouseEnter}
            onMouseLeave={handleWomenMouseLeave}
          >
            <NavLink
              to={'/womensclothes'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 text-red-500 underline'
                  : 'block px-4 py-2 text-black hover:bg-gray-200 hover:text-red-500'
              }
            >
              Clothes
            </NavLink>
            <NavLink
              to={'/womenshoes'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 text-red-500 underline'
                  : 'block px-4 py-2 text-black hover:bg-gray-200 hover:text-red-500'
              }
            >
              Shoes
            </NavLink>
          </div>
        )}
      </div>

      {/* Accessories Dropdown */}
      <div
        className="relative pl-10 font-bold text-xl text-black underline hover:text-red-500 cursor-pointer"
        onMouseEnter={handleAccessoriesMouseEnter}
        onMouseLeave={handleAccessoriesMouseLeave}
      >
        Accessories
        {isAccessoriesHovered && (
          <div
            className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10"
            onMouseEnter={handleAccessoriesMouseEnter}
            onMouseLeave={handleAccessoriesMouseLeave}
          >
            <NavLink
              to={'/mensaccesories'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 text-red-500 underline'
                  : 'block px-4 py-2 text-black hover:bg-gray-200 hover:text-red-500'
              }
            >
              For Men
            </NavLink>
            <NavLink
              to={'/womensaccesories'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 text-red-500 underline'
                  : 'block px-4 py-2 text-black hover:bg-gray-200 hover:text-red-500'
              }
            >
              For Women
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar

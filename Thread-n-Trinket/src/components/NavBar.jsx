import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className=" pt-4 pb-4  my-6 flex justify-center">
        
        <NavLink to={'/'} className='pr-10 font-bold text-xl text-black'>
           Home 
        </NavLink>
        <NavLink to={'/men'} className='px-10 font-bold text-xl text-black'>
           Men 
        </NavLink>
        <NavLink to={'/women'} className='px-10 font-bold text-xl text-black'>
           Women 
        </NavLink>
        <NavLink to={'/accesories'} className='pl-10 font-bold text-xl text-black'>
           Accesories
        </NavLink>
        
        
    </nav>
  )
}

export default NavBar;
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"



export const Header = () => {

    return(
       <header className="w-full bg-slate-200">
        <nav className="max-w-7xl w-full mx-auto flex items-center justify-between h-14 px-5">

            <Link to="/" className="font-bold text-2xl">
                DevShop
            </Link>

            <Link to="/cart" className="relative">
                <FiShoppingCart size={24} color="#121212"/>
                <span 
                className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center px-2.5 text-xs rounded-full bg-sky-500 text-white">  
                    1
                </span>
            </Link>

        </nav>
       </header>
    )
}
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className = "header">
            <NavLink
            to="/"
            className={({ isActive }) =>
                `w-20 h-20 rounded-lg flex items-center justify-center font-bold shadow-md border transition-colors duration-200 ${
                isActive
                    ? "border-pink-300 bg-white text-pink-500"
                    : "border-white bg-white text-black hover:text-pink-500"
                }`
            }
            >
            <p className="font-serif">
                HOME
            </p>
            </NavLink>
            <nav className='font-serif flex text-lg gap-7 font-medium'>
                
                <NavLink
                to="/about"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg border ${
                    isActive
                        ? "text-pink-500 border-pink-500 bg-white"
                        : "text-black border-white bg-white hover:text-pink-400"
                    }`
                }
                >
                About
                </NavLink>

                <NavLink
                to="/projects"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg border ${
                    isActive
                        ? "text-pink-500 border-pink-500 bg-white"
                        : "text-black border-white bg-white hover:text-pink-400"
                    }`
                }
                >
                Projects
                </NavLink>

            </nav>            
        </header>
    );
};

export default Navbar
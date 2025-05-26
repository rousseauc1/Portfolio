import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex gap-8 justify-end px-8 pb-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <Link to="/Home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Home</Link>
            <Link to="/Projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Projects</Link>
            <Link to="/Resume" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Resume</Link>
            <Link to="/About" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">About</Link>
        </nav>
    )
}

export default NavBar;

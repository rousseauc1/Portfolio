import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex gap-8 justify-end px-8 pb-4">
            <Link to="/Home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/Projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <Link to="/Resume" className="text-gray-600 hover:text-gray-900 transition-colors">Resume</Link>
            <Link to="/About" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
        </nav>
    )
}

export default NavBar;

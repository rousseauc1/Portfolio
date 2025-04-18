import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="flex gap-4 p-4 bg-white shadow-md">
            <Link to="/Home" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/Projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            <Link to="/Resume" className="hover:text-blue-500 transition-colors">Resume</Link>
            <Link to="/About" className="hover:text-blue-500 transition-colors">About Me</Link>
        </nav>
    )
}

export default NavBar;

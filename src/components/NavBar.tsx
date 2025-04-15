import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar() {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/Projects');
    }

    const goToAboutMe = () => {
        navigate('/About');
    }

    const goToResume = () => {

    }

    const goToHome = () => {

    }

    return (
        // need About Me, Resume, Home, and Projects
        <div>
            
        </div>
    )
}

export default NavBar;

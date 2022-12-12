import { Link } from 'react-router-dom'

const NavHome = (props) => {
    return (
        <div className="nav-home">
            <Link to="/game">
                <div>Play a Game</div>
            </Link>
            <Link to="/glossary ">
                <div>Meet the Cast</div>
            </Link>
            <Link to="/about-us ">
                <div>About Us</div>
            </Link>
            
        </div>
    );
};

export default NavHome;
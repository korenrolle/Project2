import { Link } from 'react-router-dom'

const NavHome = (props) => {
    return (
        <div className="nav-home">
            <Link to="/glossary">
                <div>Glossary</div>
            </Link>
            <Link to="/character">
                <div>Game</div>
            </Link>
        </div>
    );
};

export default NavHome;
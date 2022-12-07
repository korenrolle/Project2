import { Link } from 'react-router-dom'
import HOMELOGO from '../RNMlogo.png'

const NavApp = (props) => {
    return (
        <div className="nav-app">
            <Link to="/">
                <div>
                    <img src={HOMELOGO} className="App-Logo" alt="Logo" />
                </div>
            </Link>
        </div>
    );
};

export default NavApp;
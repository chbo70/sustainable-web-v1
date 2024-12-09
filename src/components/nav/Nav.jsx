import Logo from '../../assets/logo.webp'
import './nav.css'
const Nav = () => {
    return (
        <div className="nav_wrapper">   
            <nav>
                <img className="logo" alt="logo" src={Logo} />
                <div className="nav-links">                
                    {/* eslint-disable-next-line */}
                    <a href="#">Home</a>
                    {/* eslint-disable-next-line */}
                    <a href="#">About</a>
                    {/* eslint-disable-next-line */}
                    <a href="#">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
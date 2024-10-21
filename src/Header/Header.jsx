import logo from './img/111.png'
import './Header.scss';

function Header() {
    return (
        <>
            <div className="container">
                <div className="header-block">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className='block-list'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/project">Project</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        
                    </nav>
                </div>
            </div>
        </>
    )

}
export default Header;
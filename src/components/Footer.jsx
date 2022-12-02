import Logo from '../assets/Logo.svg'
import Social from '../assets/socials.svg'

function Footer() {
    return(
        <footer>
            <div className="foot-nav">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </div>
            <div className="foot">
                <div className="foot-logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="foot-socials">
                    <li><img src={Social} alt="social" className="social"/></li>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
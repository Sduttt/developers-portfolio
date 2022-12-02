import Logo from '../assets/Logo.svg'
import Navdrop from '../assets/mq-nav.svg'
import Itemdrop from '../assets/DROP-cropped.svg'
function Nav(){
    return(
        <nav>
            
            <img src={Logo} alt="" className="logo"/>
            <ul className="nav-list">
                <li className="nav-item list-item1">HOME <img src={Itemdrop} alt= "" className="nav-drop"/> </li>
                <li className="nav-item list-item2">PROJECT</li>
                <li className="nav-item list-item3">ABOUT</li>
                <li className="nav-item list-item4">CONTACT</li>
                <li className="nav-item list-item5">OTHER PAGE <img src={Itemdrop} alt="" className="nav-drop"/> </li>
            </ul>
            <img src={Navdrop} alt="Dropdown icon" className="nav-dropdown"/>
        </nav>
    )
}

export default Nav;
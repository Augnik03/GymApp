import React from 'react'
import './NavBar.css'
import dark from '../../assets/moon.png'
import gymLogo from '../../assets/weightlifting.png'
import searchIcon from '../../assets/magnifying-glass.png'
import light from '../../assets/day-mode.png'

const NavBar =({theme,setTheme})=>{

    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return(
        <nav className="navBar">
            <img src={gymLogo} alt="" className='logo'/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder='Search'/>
                <img src={searchIcon} alt="" />
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme=='light'?dark: light} alt="" className="toggle-icon" />
        </nav>
    );
}
export default NavBar
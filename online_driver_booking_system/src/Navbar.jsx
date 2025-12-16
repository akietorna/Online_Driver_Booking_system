import { IoMdClose } from 'react-icons/io';
import './navbar.css'
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';


function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    return(
        <nav className='navBar'>
            <ul className='Navlinks'>
                <li className='Logo'><a href="">GetADriver</a></li>
                <div className= {clicked ? 'Close' : 'Menu'}>
                    <button className='Button' onClick={() => setClicked(!clicked)}> {clicked ? <IoMdClose /> : <FiMenu />}</button>  
                    <ul className='Others'>                       
                        <li className='Register'>  
                            <a href='' target='' onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}> Register  
                            {hover ? <FiChevronUp className='Arrow' /> : <FiChevronDown className='Arrow' /> } </a> 
                            <ul className='RegisterDrpdwn'>
                                <li className='Drop1'> <a href="" >As A Driver</a> </li>
                                <li className='Drop2'> <a href="" >As A Rider</a> </li>
                                <li className='Drop3'> <a href="" >As A Customer</a> </li>
                            </ul>
                        </li>
                        <li className='Service'> <a href='' target=''>Our Services</a> </li>
                        <li className='Other'> <a href='' target=''>  Others </a> </li>
                        <li className='Profile'> <a href='' target=''> Profile </a> </li>
                    </ul>
                </div>
                
                
                
            </ul>

        </nav>
    );
}

export default Navbar
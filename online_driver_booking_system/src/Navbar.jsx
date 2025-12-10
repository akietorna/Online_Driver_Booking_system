import './navbar.css'
// import logo from './logo.png'

function Navbar() {
    return(
        <nav className='navBar'>
            <ul className='Navlinks'>
                <li className='Logo'><a href="">GetADriver</a></li>
                <li className='Others'> <a href='' target=''>  Others </a> </li>
                <li className='Others'> 
                    <a href='' target=''> Register </a> 
                    <ul className='RegisterDrpdwn'>
                        <li> <a href="" className='Drop1'>As A Driver</a> </li>
                        <li> <a href="" className='Drop2'>As A Rider</a> </li>
                        <li> <a href="" className='Drop3'>As A Customer</a> </li>
                    </ul>
                </li>
                <li className='Others'> <a href='' target=''>Our Services</a> </li>
                <li className='Others'> <a href='' target=''> Profile </a> </li>
                
            </ul>

        </nav>
    );
}

export default Navbar
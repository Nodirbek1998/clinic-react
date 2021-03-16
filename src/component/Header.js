import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      
        return (
            <nav className= "navbar navbar-dark">
                <Link className="navbar-brand" to="/">Name</Link>
                <ul className ="navbar-nav">
                    <li className="nav-item first"><Link className='nav-link' to='#'><i className='fa fa-phone'></i>9387458324</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='#'><i className='fa fa-phone'></i>1003</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='#'>Rus</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='#'>Uzb</Link></li>
                    
                    <li className="nav-item"><Link className='nav-link' to='/login'>Login</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Header;
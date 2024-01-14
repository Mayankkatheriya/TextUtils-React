import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className="nav_left">
            <Link to = "/"><h1>📝 TextUtils</h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <nav className="nav_right">
            <div class="checkbox-wrapper-54">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>
        </nav>
    </header>
  )
}

export default Header

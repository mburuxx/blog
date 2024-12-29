import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="links">
                <Link className='link' to="/?cat=art">
                <h6>Technology</h6>
                </Link>

                <Link className='link' to="/?cat=art">
                <h6>Finance</h6>
                </Link>

                <Link className='link' to="/?cat=art">
                <h6>Agriculture</h6>
                </Link>

                <Link className='link' to="/?cat=art">
                <h6>Other</h6>
                </Link>

                <span>Ann</span>
                <span>Logout</span>
                <span className="write">
                    <Link className="link" to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
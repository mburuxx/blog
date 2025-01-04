import React, { useContext } from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

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

                <span>{currentUser?.username}</span>
                {currentUser ? ( 
                  <span onClick={logout}>Logout</span> 
                ) : ( 
                  <Link className='link' to={"/login"}>
                    Login
                  </Link> )}
                <span className="write">
                    <Link className="link" to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
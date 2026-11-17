import React from 'react'
import './Navbar.css'
import Logoimg from '../../assets/emplogo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const Menuitems = [
        { mid: 1, mname: "Home", mnavi: '/home' },
        { mid: 2, mname: "About", mnavi: '/about' },
        { mid: 3, mname: "Service", mnavi: '/service' },
        { mid: 4, mname: "Contact", mnavi: '/contact' },
        { mid: 5, mname: "Register", mnavi: '/register' },
        { mid: 6, mname: "signin", mnavi: '/signin' },
        { mid: 7, mname: "Empinfo", mnavi: '/empinfo' },
    ]
    return (
        <header className='menubar'>
            <div className="logo">
                <div className="img"><a href="#"><img src={Logoimg} alt="" /></a></div>
            </div>
            <div className="menus">
                <ul>
                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li> */}

                    {
                        Menuitems.map((mi) => <li key={mi.mid}><Link to={mi.mnavi}>  {mi.mname} </Link></li>)
                    }
                </ul>
            </div>
        </header>
    )
}

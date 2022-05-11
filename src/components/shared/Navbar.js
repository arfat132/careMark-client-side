import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 fixed w-full z-10 shadow-lg">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-medium">
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>Appoinment</Link></li>
                        <li><Link to=''>ABout</Link></li>
                        <li><Link to=''>Blogs</Link></li>
                        <li><Link to=''>Contact</Link></li>
                    </ul>
                </div>
                <Link to='' class="btn btn-ghost normal-case text-2xl font-bold text-secondary ml-8">CareMark</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 ml-60 font-bold uppercase">
                    <li><Link to=''>Home</Link></li>
                    <li><Link to=''>Appoinment</Link></li>
                    <li><Link to=''>ABout</Link></li>
                    <li><Link to=''>Blogs</Link></li>
                    <li><Link to=''>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
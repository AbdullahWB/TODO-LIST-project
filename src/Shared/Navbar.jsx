import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
        <li><Link t0='/'>Home</Link></li>
        <li><Link to='/myTask'>Tasks</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#F1D4E5] rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">MY TODO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/myTask' className="btn text-white bg-[#73BBC9]">Tusk</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
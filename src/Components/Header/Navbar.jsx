import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  const links = <>
    <NavLink className={({ isActive }) => isActive ? "border-b-2 mx-4" : "mx-4"} to={'/'}>Home</NavLink>


    {/* For applicants */}
    {
      user && <NavLink className={({ isActive }) => isActive ? "border-b-2 mx-4" : "mx-4"} to={'/myApplications'}>My Applications</NavLink>
    }

    {/* For recruiters. Check roles as well */}
    {
      user && <>
        <NavLink className={({ isActive }) => isActive ? "border-b-2 mx-4" : "mx-4"} to={'/addJob'}>Add Job</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border-b-2 mx-4" : "mx-4"} to={'/myPostedJobs'}>My Posted Jobs</NavLink>
      </>
    }
  </>

  // Handle logout
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Log out Successful!")
      }).catch((error) => {
        toast.error(error);
      });
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <img className='w-12 h-12' src="../../../src/Assets/images/logo.png" alt="logo" />
          <h1 className="text-2xl font-bold text-start">Career Code</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      {
        user ?
          <div className="navbar-end gap-3">
            <button onClick={handleLogout} className="btn bg-[#74D4DE]" to={'/register'}>Logout</button>
          </div>
          :
          <div className="navbar-end gap-3">
            <NavLink className="btn" to={'/login'}>Login</NavLink>
            <NavLink className="btn bg-[#74D4DE]" to={'/register'}>Register</NavLink>
          </div>

      }
    </div>
  );
};

export default Navbar;
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = (props) => {
      const { user, logout } = useContext(AuthContext);
      const navigate = useNavigate();
      // console.log(user);

      const handleLogout = () => {
        logout()
          .then(() => {
            // toast("Logout successfully");
            navigate("/");
          })
          .catch((err) => console.log(err));
      };
  const menuItems = (
    <React.Fragment>
      <li className="hover:bg-green-500 hover:rounded hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-green-500 hover:rounded hover:text-white">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="hover:bg-green-500 hover:rounded hover:text-white">
        <Link to="/services">Services</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="hover:bg-green-500 hover:rounded hover:text-white">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:bg-green-500 hover:rounded hover:text-white">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li className="hover:bg-green-500 hover:rounded hover:text-white">
            <Link to="/login">login</Link>
          </li>
          <li className="hover:bg-green-500 hover:rounded hover:text-white">
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content m-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <p className="text-4xl">
            T<span>ire</span>X
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      {user?.uid ? (
        <>
          <li className="lg:hidden border-none btn bg-green-500 rounded text-white">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          
        </>
      )}

      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;

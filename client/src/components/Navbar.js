import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <>
      <li>
        <Link to='/dashboard' className='nav-link'>
          <i className='fas fa-user'></i>{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <nav className='navbar navbar-expand-sm '>
        <Link className='navbar-brand' to='/'>
          <i className='fas fa-leaf'></i> Kelp
        </Link>

        <div className=' navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/Home'>
                Home<span className='sr-only'>(current)</span>
              </Link>
            </li>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search Aquariums'
            />
            <button
              className='btn btn-outline-light my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

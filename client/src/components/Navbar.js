import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <span>
      <li>
        <Link to='/dashboard' className='nav-link'>
          <i className='fas fa-user'></i>{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>

      <li>
        <Link to='/aquariums' className='nav-link'>
          <i className='fas fa-fish'></i>{" "}
          <span className='hide-sm'>Aquariums</span>
        </Link>
      </li>

      <li>
        <a className='nav-link' onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </span>
  );

  const guestLinks = (
    <span>
      <li>
        <Link to='/aquariums' className='nav-link'>
          <i className='fas fa-fish'></i>{" "}
          <span className='hide-sm'>Aquariums</span>
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          <i className='far fa-user-circle'></i>{" "}
          <span className='hide-sm'>Register</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          <i className='fas fa-sign-in-alt'></i>{" "}
          <span className='hide-sm'>Login</span>
        </Link>
      </li>
    </span>
  );

  return (
    <div>
      <nav className='navbar '>
        <Link className='navbar-brand' to='/'>
          <i className='fas fa-leaf'></i> Kelp
        </Link>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
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

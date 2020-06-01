import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/aquariums";
import { Link } from "react-router-dom";

const CommentLogin = ({ aquaId, addComment, toggle }) => {
  return (
    <div className='login-form '>
      <div className='bg-primary p center'>
        <h3>Please Login to Review</h3>
      </div>
      <br />
      <div className='center'>
        <Link to='/login' className='btn bg-light m'>
          {" "}
          Login
        </Link>
        <Link to='/register' className='btn bg-light m'>
          {" "}
          Register
        </Link>
        <button onClick={() => toggle()} className=' m cancel btn btn-danger'>
          Cancel
        </button>
      </div>
    </div>
  );
};

CommentLogin.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentLogin);

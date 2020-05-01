import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const AquaItem = ({
  auth,
  aquarium: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div className='aquarium bg-white p-1 my-1'>
    <div>
      <Link to='/profile'>
        <img className='round-img' src={avatar} alt='pic of user' />
        <h4 className='text-primary'>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>
      </p>
      <br />
      <button type='button' className='btn btn-light'>
        <i className='fas fa-thumbs-up'></i>{" "}
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>
      <button type='button' className='btn btn-light'>
        <i className='fas fa-thumbs-down'></i>
      </button>
      <Link to={`/aquarium/${_id}`} className='btn btn-primary'>
        Discussion{" "}
        {comments.length > 0 && (
          <span className='comment-count'>{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button type='button' className='btn btn-danger'>
          <i className='fas fa-times'></i>
        </button>
      )}
    </div>
  </div>
);

AquaItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AquaItem);

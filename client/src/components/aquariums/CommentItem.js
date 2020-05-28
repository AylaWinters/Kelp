import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  deleteComment,
  addCommentLike,
  removeCommentLike,
} from "../../actions/aquariums";

const CommentItem = ({
  aquaId,
  comment: { _id, name, title, text, avatar, user, visit, date, rating, likes },
  auth,
  deleteComment,
  addCommentLike,
  removeCommentLike,
}) => {
  const starPercent = (rating / 5) * 100;
  const rounded = `${Math.round(starPercent / 10) * 10}%`;

  return (
    <div className='post bg-white p-1 my-1'>
      <div className='post-profile'>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4 className='text-primary'>{name}</h4>
        </Link>
      </div>
      <div className='post-content'>
        <div className='fish-outer'>
          <div className='fish-inner' style={{ width: `${rounded}` }}>
            {rounded}
          </div>
        </div>
        <div>
          <h5>
            <p className='post-text'>{title}</p>
          </h5>
          <hr />
          <p className='post-text'>{text}</p>
          <p className='visit-date'>
            Visited in{" "}
            <Moment format='MMM YYYY' add={{ days: 1 }}>
              {visit}
            </Moment>
          </p>
          <p className='post-date'>
            Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>{" "}
          </p>
          <button
            onClick={(e) => addCommentLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-chevron-up'></i>{" "}
            {likes.length > 0 && <span>{likes.length}</span>}
          </button>
          <button
            onClick={(e) => removeCommentLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-chevron-down'></i>
          </button>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => deleteComment(aquaId, _id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times'></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  aquaId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  addCommentLike: PropTypes.func.isRequired,
  removeCommentLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  deleteComment,
  addCommentLike,
  removeCommentLike,
})(CommentItem);

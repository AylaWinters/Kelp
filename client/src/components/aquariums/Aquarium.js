import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Alert";
import { getAquarium } from "../../actions/aquariums";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import GoogleMapsContainer from "./Map";

const Aquarium = ({
  getAquarium,
  aquariums: { aquarium, loading },
  // comments,
  match,
}) => {
  const [addComment, toggleAddComment] = useState(false);

  useEffect(() => {
    getAquarium(match.params.id);
  }, [getAquarium, match.params.id]);

  if (aquarium) {
    let overall = [];
    if (aquarium.comments[0]) {
      for (let i = 0; i < aquarium.comments.length; i++) {
        overall.push(aquarium.comments[i].rating);
      }
      let total = overall.reduce((res, a) => {
        return res + a;
      });
      var average = total / aquarium.comments.length;
    }
  }

  const starPercentage = (average / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return loading || aquarium === null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <img
        className='aquarium-photo'
        src={aquarium.photo}
        alt='pic of aquarium'
      />
      <h2 className='text-primary'>{aquarium.name}</h2>
      {aquarium.comments[0] ? (
        <div className='stars-outer'>
          <div
            className='stars-inner'
            style={{ width: `${starPercentageRounded}` }}
          ></div>
        </div>
      ) : (
        <p
          className='btn btn-primary add-comment'
          onClick={() => toggleAddComment(!addComment)}
        >
          Be the First to Review!
        </p>
      )}

      <h6 className='text-dark'>{aquarium.location}</h6>
      <p>{aquarium.description}</p>
      {/* <GoogleMapsContainer /> */}
      <hr />
      <button
        onClick={() => toggleAddComment(!addComment)}
        className='btn btn-primary add-comment'
      >
        Add Review
      </button>

      {addComment && (
        <div className='comment-modal'>
          <CommentForm toggle={toggleAddComment} aquaId={aquarium._id} />
        </div>
      )}
      <div className='comments'>
        {aquarium.comments &&
          aquarium.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              aquaId={aquarium._id}
            />
          ))}
      </div>
    </div>
  );
};

Aquarium.propTypes = {
  getAquarium: PropTypes.func.isRequired,
  aquariums: PropTypes.object.isRequired,
  // comment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  aquariums: state.aquariums,
});

export default connect(mapStateToProps, { getAquarium })(Aquarium);
